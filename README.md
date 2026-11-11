# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.0.62 | Wed, 11 Nov 2026, 6:46:26 AM (Dubai) | 2026-11-11 02:46:26 UTC | [9cf4630](https://github.com/jerrin-v/portfolio/commit/9cf46308aa0d4132a715687834da6c2e456b0102) | [#28](https://github.com/jerrin-v/portfolio/actions/runs/42948201532) |
| 8.0.61 | Tue, 10 Nov 2026, 9:27:01 PM (Dubai) | 2026-11-10 17:27:01 UTC | [5732cbe](https://github.com/jerrin-v/portfolio/commit/5732cbeaa044ccda71b39d3f0ecc4f1617666eac) | [#27](https://github.com/jerrin-v/portfolio/actions/runs/42863458537) |
| 8.0.60 | Tue, 10 Nov 2026, 12:43:38 PM (Dubai) | 2026-11-10 08:43:38 UTC | [b9008a2](https://github.com/jerrin-v/portfolio/commit/b9008a252f8cefd99a0e36773b25e03e30805727) | [#25](https://github.com/jerrin-v/portfolio/actions/runs/42784061978) |
<!-- publishes:end -->

Updated automatically after every successful publish.

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
- `media/` — every image the site shows (WebP) plus the 1080p showreel, each file sealed and published with the site. `media/backup/` keeps retired media (the 2025 showreel); the workflow never removes it.
- Original uploads (full-quality PNG/JPG) stay in the Wix media library; this repo keeps only the WebP versions.
- `source.pack` — the source files (page sources, CSS, build and push tools, content, notes), sealed. The old v7 version is not kept here.
- The workflow downloads new media from Wix once, saves it here (commit "Update sealed media backup") and removes what the site no longer uses.
- The contact form is replaced here by the email link (the form needs Wix).

**If Wix is ever gone, see [RESTORE.md](RESTORE.md)**: publish this site without a password, save an offline version, or rebuild from source.

Note: page text is password-locked; images are sealed in the repo but, once published, an image file can be opened by anyone who has its exact link.
