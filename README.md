# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.0.66 | Thu, 12 Nov 2026, 1:20:33 PM (Dubai) | 2026-11-12 09:20:33 UTC | [24e869e](https://github.com/jerrin-v/portfolio/commit/24e869e053e02eb965980cc205df712f7219ee41) | [#32](https://github.com/jerrin-v/portfolio/actions/runs/43190496659) |
| 8.0.65 | Thu, 12 Nov 2026, 12:22:59 PM (Dubai) | 2026-11-12 08:22:59 UTC | [6f6396d](https://github.com/jerrin-v/portfolio/commit/6f6396d9d2d1ac1def85b731565bfdc31317a76d) | [#31](https://github.com/jerrin-v/portfolio/actions/runs/43182345928) |
| 8.0.64 | Thu, 12 Nov 2026, 11:41:51 AM (Dubai) | 2026-11-12 07:41:51 UTC | [119fd9c](https://github.com/jerrin-v/portfolio/commit/119fd9c125cd942ca2a104a2bc9a9115987bba8b) | [#30](https://github.com/jerrin-v/portfolio/actions/runs/43177070076) |
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
