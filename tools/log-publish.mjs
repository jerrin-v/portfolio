// Keeps the "Last 3 successful publishes" table in README.md up to date.
// Run by the Publish site workflow after a successful deploy:
//   node tools/log-publish.mjs <commit-sha> <run-number> <run-url>
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const README = path.join(ROOT, "README.md");
const START = "<!-- publishes:start -->", END = "<!-- publishes:end -->";
const REPO = "https://github.com/jerrin-v/portfolio";

const [sha = "", run = "", runUrl = ""] = process.argv.slice(2);
let ver = "";
try { ver = JSON.parse(fs.readFileSync(path.join(ROOT, "site.pack"), "utf8")).ver || ""; } catch {}
const now = new Date();
const dubai = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Dubai", weekday: "short", day: "numeric", month: "short", year: "numeric",
  hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true }).format(now).replace(/ (am|pm)$/i, (m) => m.toUpperCase());
const utc = now.toISOString().replace("T", " ").replace(/\.\d+Z$/, " UTC");
const row = `| ${ver || "–"} | ${dubai} (Dubai) | ${utc} | [${sha.slice(0, 7)}](${REPO}/commit/${sha}) | [#${run}](${runUrl}) |`;

const md = fs.readFileSync(README, "utf8");
const a = md.indexOf(START), b = md.indexOf(END);
if (a < 0 || b < a) throw new Error("README markers missing");
const rows = md.slice(a + START.length, b).split("\n").filter((l) => /^\| (?!Version|---)/.test(l));
const keep = [row, ...rows].slice(0, 3);
const table = ["", "| Version | Published (Dubai time) | UTC | Commit | Run |", "|---|---|---|---|---|", ...keep, ""].join("\n");
fs.writeFileSync(README, md.slice(0, a + START.length) + table + md.slice(b));
console.log("logged", row);
