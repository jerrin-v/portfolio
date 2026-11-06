# Jerrin Varghese — Portfolio (password-protected copy)

Website: **https://jerrin-v.github.io/portfolio/** — a password-protected copy of [www.jerrindesign.com](https://www.jerrindesign.com).

This repo holds the site only in sealed form (`site.pack`). On every update, the **Publish site** workflow opens it with the
`SITE_PACK_KEY` secret, locks every page with the `SITE_PASSWORD` secret and publishes it to GitHub Pages. Nothing readable is stored here.

## Change the password (works even if you forgot the old one)

1. **Settings → Secrets and variables → Actions → `SITE_PASSWORD` → Update** (type the new password, save).
2. **Actions → Publish site → Run workflow → Run workflow.**
3. About 1–2 minutes later the new password is live and the old one stops working.

## One-time setup

- Secrets: `SITE_PACK_KEY` (the private key file, pasted whole) and `SITE_PASSWORD`.
- **Settings → Pages → Build and deployment → Source: GitHub Actions.**

Visitors can tick "Remember me for 1 day" to stay unlocked for 24 hours in that browser.

## Full backup — works without Wix

- `site.pack` — every file of the site, sealed.
- `media/` — every image the site shows (WebP) plus the 1080p showreel, each file sealed and published with the site.
- Original uploads (full-quality PNG/JPG) stay in the Wix media library; this repo keeps only the WebP versions.
- `source.pack` — the source files (page sources, CSS, build and push tools, content, notes), sealed. The old v7 version is not kept here.
- The workflow downloads new media from Wix once, saves it here (commit "Update sealed media backup") and removes what the site no longer uses.
- The contact form on this copy is replaced by the email link (the form needs Wix).

**If Wix is ever gone, see [RESTORE.md](RESTORE.md)**: publish this copy without a password, make an offline copy, or rebuild from source.

Note: page text is password-locked; images are sealed in the repo but, once published, an image file can be opened by anyone who has its exact link.
