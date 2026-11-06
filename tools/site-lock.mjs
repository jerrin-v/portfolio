// Builds the password-protected GitHub copy of jerrindesign.com.
//
// The repo stores the site only as `site.pack`: the plain site sealed with the public key in tools/site.pub.pem
// (RSA-OAEP-SHA256 wraps a random AES-256-GCM key). Only the GitHub workflow can open it, with the private key
// in the SITE_PACK_KEY secret. It then locks every page with the SITE_PASSWORD secret and publishes to GitHub Pages.
//
//   node tools/site-lock.mjs pack  <plainDir> <out.pack> [ver]  seal a plain build (needs only the public key)
//   node tools/site-lock.mjs build <out.pack> <outDir>          workflow: unseal + lock with $SITE_PASSWORD (needs $SITE_PACK_KEY)
//
// Media: on the first build the workflow downloads every Wix image/video the pages use and keeps them in media/
// (each file AES-GCM encrypted with one data key, wrapped by the public key in media/key.json). Later builds reuse
// them and only fetch new ones, so the published copy no longer depends on Wix. Pages point at m/<id>.<ext>.
// Source: source.pack holds the site's source files, sealed the same way as site.pack (not published).
//   node tools/site-lock.mjs source <srcDir> <out.pack>        seal the source backup
//   node tools/site-lock.mjs export <outDir>                   full offline copy: unlocked site with its WebP media (needs $SITE_PACK_KEY)
// SITE_PUBLIC=true (repository variable) publishes without a password. Original uploads stay on Wix (only WebP is kept here).
//
// Page lock: gzip + AES-GCM-256, key from PBKDF2-SHA256 (600,000 rounds), one salt for the whole site so one
// unlock opens every page. "Remember me for 1 day" keeps the key for 24 hours; otherwise for the tab session.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nodeCrypto from "node:crypto";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ITER = 600000;
const PLAIN = new Set(["google16545ae81fbec641.html"]);   // Search Console token, no content
const DATA = new Set(["oxds-oxr.html"]);                  // data file fetched by oxds.html, encrypted but not a page
const te = new TextEncoder();
const b64 = (u) => Buffer.from(u).toString("base64");
const u8 = (s) => new Uint8Array(Buffer.from(s, "base64"));

async function gz(bytes) { return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new CompressionStream("gzip"))).arrayBuffer()); }
async function gunz(bytes) { return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()); }

/* ---------- pack / unpack (whole site, sealed) ---------- */
function walk(dir, base = dir, out = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, base, out); else out.push(path.relative(base, p));
  }
  return out;
}
async function pack(dir, outFile, version = "") {
  const files = {};
  for (const rel of walk(dir).sort()) files[rel.split(path.sep).join("/")] = b64(fs.readFileSync(path.join(dir, rel)));
  const data = await gz(te.encode(JSON.stringify(files)));
  const key = nodeCrypto.randomBytes(32), iv = nodeCrypto.randomBytes(12);
  const c = nodeCrypto.createCipheriv("aes-256-gcm", key, iv);
  const ct = Buffer.concat([c.update(data), c.final(), c.getAuthTag()]);
  const pub = fs.readFileSync(path.join(HERE, "site.pub.pem"), "utf8");
  const wrapped = nodeCrypto.publicEncrypt({ key: pub, padding: nodeCrypto.constants.RSA_PKCS1_OAEP_PADDING, oaepHash: "sha256" }, key);
  fs.writeFileSync(outFile, JSON.stringify({ v: 1, ver: version, k: b64(wrapped), iv: b64(iv), ct: b64(ct) }));
  console.log("packed", Object.keys(files).length, "files");
}
async function unpack(packFile, privPem) {
  const p = JSON.parse(fs.readFileSync(packFile, "utf8"));
  const key = nodeCrypto.privateDecrypt({ key: privPem, padding: nodeCrypto.constants.RSA_PKCS1_OAEP_PADDING, oaepHash: "sha256" }, Buffer.from(p.k, "base64"));
  const raw = Buffer.from(p.ct, "base64"), tag = raw.subarray(raw.length - 16), ct = raw.subarray(0, raw.length - 16);
  const d = nodeCrypto.createDecipheriv("aes-256-gcm", key, Buffer.from(p.iv, "base64")); d.setAuthTag(tag);
  const files = JSON.parse(new TextDecoder().decode(await gunz(Buffer.concat([d.update(ct), d.final()]))));
  return files; // { relPath: base64 }
}

/* ---------- page lock ---------- */
async function keyFor(pw, salt) {
  const base = await crypto.subtle.importKey("raw", te.encode(pw), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt"]);
}
async function enc(plain, key, salt) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, await gz(te.encode(plain))));
  return b64(salt) + "." + b64(iv) + "." + b64(ct);
}

const CSS = `.lk{min-height:calc(100svh - var(--hh));display:grid;grid-template-columns:minmax(0,440px);justify-content:center;align-content:center;padding:calc(var(--hh) + 48px) var(--pad) 72px}
.lk-in{width:100%;max-width:440px}
.lk-eb{font-size:13px;color:var(--muted);margin:0 0 12px}
.lk h1{font-size:clamp(32px,5vw,48px);line-height:1.05;letter-spacing:-.03em;font-weight:600;margin:0 0 16px;color:var(--ink)}
.lk-p{font-size:16px;line-height:1.5;color:var(--muted);margin:0 0 32px}
.lk form{display:grid;grid-template-columns:minmax(0,1fr);gap:8px}
.lk label{font-size:13px;color:var(--muted)}
.lk-row{display:flex;gap:12px;align-items:stretch}
.lk-pw{position:relative;flex:1;min-width:0;display:flex}
.lk .lk-pw input{flex:1;padding-right:44px}
.lk .lk-eye{position:absolute;right:0;top:0;width:44px;height:48px;padding:0;background:transparent;color:var(--muted);display:grid;place-items:center;cursor:pointer}
.lk .lk-eye:hover{color:var(--ink)}
.lk .lk-eye:focus-visible{outline:2px solid var(--ink);outline-offset:-2px}
.lk .lk-pw input{flex:1;min-width:0;height:48px;border:0;border-bottom:1px solid var(--field);border-radius:0;background:transparent;color:var(--ink);font:inherit;font-size:17px;letter-spacing:.12em;padding:0}
.lk .lk-pw input:focus{outline:0;border-bottom-color:var(--ink)}
.lk button{height:48px;padding:0 24px;border:0;border-radius:0;background:var(--ink);color:var(--bg);font:inherit;font-size:15px;font-weight:500;cursor:pointer}
.lk button:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
.lk button[disabled]{opacity:.6;cursor:progress}
.lk .lk-rm{display:flex;align-items:center;gap:10px;margin-top:12px;font-size:14px;color:var(--ink);cursor:pointer;width:max-content}
.lk-rm input{appearance:none;-webkit-appearance:none;width:18px;height:18px;margin:0;border:1px solid var(--field);border-radius:0;background:transparent;display:grid;place-items:center;cursor:pointer}
.lk-rm input:checked{background:var(--ink);border-color:var(--ink)}
.lk-rm input:checked::after{content:"";width:9px;height:5px;border:solid var(--bg);border-width:0 0 1.5px 1.5px;transform:translateY(-1px) rotate(-45deg)}
.lk-rm input:focus-visible{outline:2px solid var(--ink);outline-offset:2px}
.lk-err{min-height:20px;font-size:14px;color:#d1343b;margin:4px 0 0}
[data-theme="dark"] .lk-err{color:#ff7a7f}
.lk-note{font-size:14px;line-height:1.5;color:var(--muted);margin:32px 0 0;padding-top:16px;border-top:1px solid var(--line)}
.lk-note a{color:var(--ink);text-underline-offset:3px}
.lk-ts{font-size:12px;line-height:1.4;color:var(--muted);margin:12px 0 0;font-variant-numeric:tabular-nums}
html:not(.sg-ok) .lk-in{visibility:hidden}`;

// JVLOCK.open lets oxds.html read its encrypted data file (oxds-oxr.html) with the same key.
const JS = `(function(){
var K='jv-site-key',el=document.getElementById('jv-site');if(!el)return;var E=el.textContent.trim().split('.');
function u8(b){var s=atob(b),u=new Uint8Array(s.length);for(var i=0;i<s.length;i++)u[i]=s.charCodeAt(i);return u}
function b64(u){var s='';for(var i=0;i<u.length;i++)s+=String.fromCharCode(u[i]);return btoa(s)}
function dec(k,iv,ct){return crypto.subtle.decrypt({name:'AES-GCM',iv:u8(iv)},k,u8(ct)).then(function(p){return new Response(new Blob([p]).stream().pipeThrough(new DecompressionStream('gzip'))).text()})}
function imp(r){return crypto.subtle.importKey('raw',u8(r),'AES-GCM',true,['decrypt'])}
function stored(){var r=null;try{var l=JSON.parse(localStorage.getItem(K)||'null');if(l&&l.s===E[0]&&l.exp>Date.now())r=l.k;else if(l)localStorage.removeItem(K)}catch(e){}
 if(!r){try{var s=JSON.parse(sessionStorage.getItem(K)||'null');if(s&&s.s===E[0])r=s.k}catch(e){}}return r?imp(r):Promise.resolve(null)}
function forget(){try{localStorage.removeItem(K)}catch(e){}try{sessionStorage.removeItem(K)}catch(e){}}
function keep(k,rem){crypto.subtle.exportKey('raw',k).then(function(r){var v={k:b64(new Uint8Array(r)),s:E[0]};
 try{sessionStorage.setItem(K,JSON.stringify(v))}catch(e){}if(rem){v.exp=Date.now()+864e5;try{localStorage.setItem(K,JSON.stringify(v))}catch(e){}}})}
function show(k,h){window.JVLOCK={open:function(t){var m=/id="jv-enc"[^>]*>([^<]+)</.exec(t);if(!m)return Promise.resolve(t);var p=m[1].trim().split('.');return dec(k,p[1],p[2])}};
 document.open();document.write(h);document.close()}
var d=document.documentElement,f=document.getElementById('sg-f'),i=document.getElementById('sg-pw'),rm=document.getElementById('sg-rm'),b=f.querySelector('button[type=submit]'),er=document.getElementById('sg-err');
function ready(){d.classList.add('sg-ok')}
var ey=document.querySelector('.lk-eye');if(ey)ey.addEventListener('click',function(){var s=i.type==='password';i.type=s?'text':'password';ey.setAttribute('aria-pressed',s?'true':'false');ey.setAttribute('aria-label',s?'Hide password':'Show password');ey.innerHTML=s?'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path d="M3 3l18 18"/></svg>':'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';i.focus()});
if(!window.crypto||!crypto.subtle||!window.DecompressionStream){ready();er.textContent='This browser can\\'t open protected pages. Try a recent version of Chrome, Safari, Edge or Firefox.';b.disabled=true;return}
stored().then(function(k){return k?dec(k,E[1],E[2]).then(function(h){show(k,h);return true}).catch(function(){forget();return false}):false}).then(function(ok){if(!ok){ready();i.focus()}});
f.addEventListener('submit',function(ev){ev.preventDefault();var v=i.value.trim();if(!v){er.textContent='Enter the password.';i.focus();return}
 b.disabled=true;b.textContent='Unlocking…';er.textContent='';
 crypto.subtle.importKey('raw',new TextEncoder().encode(v),'PBKDF2',false,['deriveKey']).then(function(base){return crypto.subtle.deriveKey({name:'PBKDF2',salt:u8(E[0]),iterations:${ITER},hash:'SHA-256'},base,{name:'AES-GCM',length:256},true,['decrypt'])})
 .then(function(k){return dec(k,E[1],E[2]).then(function(h){keep(k,rm.checked);show(k,h)})})
 .catch(function(){b.disabled=false;b.textContent='Unlock';er.textContent='That password didn\\'t work. Check it and try again.';i.select()})});
})();`;

const pick = (h, re) => { const m = re.exec(h); return m ? m[0] : ""; };
function gate(blob, plain, stamp = "") {
  // Same layout as the design-system password screen: the page's head (no SEO text), site header, gate, footer.
  const head = plain.slice(plain.indexOf("<head>") + 6, plain.indexOf("</head>"))
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<script id="wix-site-script"[^>]*><\/script>/g, "")
    .replace(/<script type="application\/ld\+json"[\s\S]*?<\/script>/g, "")
    .replace(/<meta (name|property)="(description|og:[^"]*|twitter:[^"]*|robots)"[^>]*>/g, "")
    .replace(/<link rel="canonical"[^>]*>/g, "")
    .replace(/<title>[^<]*<\/title>/, "<title>Jerrin Varghese — Portfolio</title>")
    .replace(/\n\s*\n/g, "\n");
  const header = pick(plain, /<header\s+class="hdr[\s\S]*?<\/header>/).replace(/class="hdr\s+over"/, 'class="hdr"');
  const footer = pick(plain, /<footer[\s\S]*?<\/footer>/);
  return `<!doctype html>
<html lang="en" class="no-js" data-theme="light">
<head>${head}<meta name="robots" content="noindex, nofollow">
<style>${CSS}</style>
</head>
<body>
${header}
<main id="main" class="lk"><div class="lk-in"><p class="lk-eb">Portfolio</p><h1>Jerrin Varghese</h1><p class="lk-p">This copy of the portfolio is password protected. Enter the password to view it.</p><form id="sg-f" novalidate><label for="sg-pw">Password</label><div class="lk-row"><span class="lk-pw"><input id="sg-pw" type="password" autocomplete="current-password" required><button type="button" class="lk-eye" aria-label="Show password" aria-pressed="false"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg></button></span><button type="submit">Unlock</button></div><label class="lk-rm"><input id="sg-rm" type="checkbox"> Remember me for 1 day</label><p class="lk-err" id="sg-err" role="alert" aria-live="assertive"></p></form><p class="lk-note">The public site is <a href="https://www.jerrindesign.com">jerrindesign.com</a>.</p>${stamp ? `<p class="lk-ts">${stamp}</p>` : ""}</div><noscript><p class="lk-err">Turn on JavaScript to open this page.</p></noscript></main>
${footer}
<script type="application/octet-stream" id="jv-site">${blob}</script>
<script>${JS}</script>
<script src="js/v8.js" defer></script>
</body>
</html>
`;
}

const WIX = /https:\/\/(?:static|video)\.wixstatic\.com\/[^"'\s)<>]+/g;
const MEDIA_DIR = path.join(HERE, "..", "media");
function aesSeal(key, buf) { const iv = nodeCrypto.randomBytes(12), c = nodeCrypto.createCipheriv("aes-256-gcm", key, iv); return Buffer.concat([iv, c.update(buf), c.final(), c.getAuthTag()]); }
function aesOpen(key, buf) { const d = nodeCrypto.createDecipheriv("aes-256-gcm", key, buf.subarray(0, 12)); d.setAuthTag(buf.subarray(buf.length - 16)); return Buffer.concat([d.update(buf.subarray(12, buf.length - 16)), d.final()]); }
function mediaKey(priv) {
  const kf = path.join(MEDIA_DIR, "key.json");
  if (fs.existsSync(kf)) return nodeCrypto.privateDecrypt({ key: priv, padding: nodeCrypto.constants.RSA_PKCS1_OAEP_PADDING, oaepHash: "sha256" }, Buffer.from(JSON.parse(fs.readFileSync(kf, "utf8")).k, "base64"));
  const key = nodeCrypto.randomBytes(32), pub = fs.readFileSync(path.join(HERE, "site.pub.pem"), "utf8");
  fs.mkdirSync(MEDIA_DIR, { recursive: true });
  fs.writeFileSync(kf, JSON.stringify({ k: b64(nodeCrypto.publicEncrypt({ key: pub, padding: nodeCrypto.constants.RSA_PKCS1_OAEP_PADDING, oaepHash: "sha256" }, key)) }));
  return key;
}
const extOf = (u) => { const m = /\.(webp|jpe?g|png|gif|avif|svg|mp4|webm)$/i.exec(u.split("?")[0]); return m ? m[1].toLowerCase().replace("jpeg", "jpg") : "bin"; };
const idOf = (u) => nodeCrypto.createHash("sha1").update(u).digest("hex").slice(0, 20);
// GitHub copy only: one file per image (drop Wix size variants), Wix contact form removed (the email link stays).
function prepPage(html) {
  return html
    .replace(/\s(?:srcset|imagesrcset|sizes|imagesizes)="[^"]*"/g, "")
    .replace(/<script[^>]*src="js\/contact\.js"[^>]*><\/script>/g, "")
    .replace(/<div id="contact-form"[\s\S]*?<\/noscript>\s*<\/div>/, "");
}
// GitHub copy keeps one video (the 1080p showreel) and only WebP images.
const canon = (u) => u.replace(/(video\.wixstatic\.com\/video\/[^/]+\/)(?:360p|480p|720p)\//, "$11080p/");
const isVideo = (u) => /video\.wixstatic\.com\//.test(u);
const isWebp = (b) => b.length > 12 && b.toString("latin1", 0, 4) === "RIFF" && b.toString("latin1", 8, 12) === "WEBP";
let sharpLib = null;
async function toWebp(buf) {
  if (isWebp(buf)) return buf;
  if (!sharpLib) sharpLib = (await import("sharp")).default;
  return sharpLib(buf, { animated: true }).webp({ quality: 90, effort: 5 }).toBuffer();
}
async function syncMedia(pages, priv, outDir) {
  const urls = new Set();
  for (const h of Object.values(pages)) for (const m of h.matchAll(WIX)) urls.add(m[0].replace(/[,.]+$/, ""));
  const key = mediaKey(priv), map = {}, done = {};
  let fetched = 0, kept = 0, failed = [];
  for (const u of urls) {
    const c = canon(u), vid = isVideo(c);
    if (done[c]) { map[u] = done[c]; continue; }
    const id = idOf(c), ext = vid ? "mp4" : "webp", store = path.join(MEDIA_DIR, id + ".bin"), rel = "m/" + id + "." + ext;
    let buf = null;
    if (fs.existsSync(store)) { buf = aesOpen(key, fs.readFileSync(store)); kept++; }
    else {
      for (let t = 0; t < 3 && !buf; t++) {
        try { const r = await fetch(c); if (r.ok) buf = Buffer.from(await r.arrayBuffer()); } catch {}
      }
      if (buf && !vid) { try { buf = await toWebp(buf); } catch (e) { console.log("could not convert", c, e.message); buf = null; } }
      if (buf) { fs.writeFileSync(store, aesSeal(key, buf)); fetched++; } else failed.push(c);
    }
    if (buf) { fs.mkdirSync(path.join(outDir, "m"), { recursive: true }); fs.writeFileSync(path.join(outDir, rel), buf); map[u] = done[c] = rel; }
  }
  // drop backed-up files the site no longer uses, so the repo holds only current media
  const live = new Set(Object.values(done).map((r) => path.basename(r).replace(/\.\w+$/, "") + ".bin"));
  let removed = 0;
  for (const f of fs.readdirSync(MEDIA_DIR)) if (f.endsWith(".bin") && !live.has(f) && !failed.some((x) => idOf(x) + ".bin" === f)) { fs.rmSync(path.join(MEDIA_DIR, f)); removed++; }
  console.log("media:", Object.keys(done).length + failed.length, "files for", urls.size, "links,", kept, "from backup,", fetched, "downloaded,", removed, "unused removed,", failed.length, "unavailable");
  if (failed.length) console.log("still on Wix:\n" + failed.join("\n"));
  return map;
}
async function build(packFile, outDir) {
  const priv = process.env.SITE_PACK_KEY, pw = (process.env.SITE_PASSWORD || "").trim();
  const pub = /^(1|true|yes)$/i.test((process.env.SITE_PUBLIC || "").trim());
  if (!priv) throw new Error("Secret SITE_PACK_KEY is missing.");
  if (!pw && !pub) throw new Error("Secret SITE_PASSWORD is missing. Add it under Settings → Secrets and variables → Actions.");
  const files = await unpack(packFile, priv);
  const ver = JSON.parse(fs.readFileSync(packFile, "utf8")).ver || "";
  const when = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Dubai", day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit", hour12: true }).format(new Date());
  const stamp = (ver ? "Version " + ver + " · " : "") + "Published " + when.replace(/ (am|pm)$/i, (m) => m.toUpperCase()) + " (Dubai time)";
  const salt = crypto.getRandomValues(new Uint8Array(16)), key = await keyFor(pw, salt);
  fs.rmSync(outDir, { recursive: true, force: true });
  const pages = {};
  for (const [rel, data] of Object.entries(files)) if (rel.endsWith(".html") && !rel.includes("/")) pages[rel] = prepPage(Buffer.from(data, "base64").toString("utf8"));
  const mmap = await syncMedia(pages, priv, outDir);
  const local = (h) => h.replace(WIX, (u) => { const k = u.replace(/[,.]+$/, ""); return mmap[k] ? mmap[k] + u.slice(k.length) : u; });
  let locked = 0;
  for (const [rel, data] of Object.entries(files)) {
    const out = path.join(outDir, rel);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    const buf = Buffer.from(data, "base64");
    if (pub && rel.endsWith(".html") && !rel.includes("/")) { fs.writeFileSync(out, local(pages[rel])); continue; }
    if (rel.endsWith(".html") && !rel.includes("/") && !PLAIN.has(rel)) {
      const plain = local(pages[rel]), blob = await enc(plain, key, salt);
      fs.writeFileSync(out, DATA.has(rel)
        ? `<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><script type="application/octet-stream" id="jv-enc">${blob}</script>\n`
        : gate(blob, plain, stamp));
      locked++;
    } else fs.writeFileSync(out, buf);
  }
  if (!pub) fs.writeFileSync(path.join(outDir, "robots.txt"), "User-agent: *\nDisallow: /\n");
  if (pub) console.log("SITE_PUBLIC is on: pages published WITHOUT a password");
  fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
  console.log("built", Object.keys(files).length, "files,", locked, "locked");
}

const [mode, x, y, z] = process.argv.slice(2);
if (mode === "pack") await pack(x, y, z);
else if (mode === "source") await pack(x, y, "source");
else if (mode === "build") await build(x, y);
else if (mode === "export") { // export <outDir> — unlocked offline copy with its WebP media; needs SITE_PACK_KEY
  if (!process.env.SITE_PACK_KEY) throw new Error("Set SITE_PACK_KEY to the private key first.");
  process.env.SITE_PUBLIC = "true";
  await build(path.join(HERE, "..", "site.pack"), x);
  console.log("exported unlocked site to", x);
}
else if (mode === "restore") { // restore <any.pack> <outDir> — needs SITE_PACK_KEY in env
  if (!process.env.SITE_PACK_KEY) throw new Error("Set SITE_PACK_KEY to the private key first.");
  const files = await unpack(x, process.env.SITE_PACK_KEY);
  for (const [rel, data] of Object.entries(files)) { const o = path.join(y, rel); fs.mkdirSync(path.dirname(o), { recursive: true }); fs.writeFileSync(o, Buffer.from(data, "base64")); }
  console.log("restored", Object.keys(files).length, "files to", y);
}
else { console.log("usage: node tools/site-lock.mjs pack <plainDir> <out.pack> [ver] | source <srcDir> <out.pack> | build <site.pack> <outDir> | restore <x.pack> <outDir>"); process.exit(1); }
