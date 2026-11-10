# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.0.60 | Tue, 10 Nov 2026, 12:43:38 PM (Dubai) | 2026-11-10 08:43:38 UTC | [b9008a2](https://github.com/jerrin-v/portfolio/commit/b9008a252f8cefd99a0e36773b25e03e30805727) | [#25](https://github.com/jerrin-v/portfolio/actions/runs/42784061978) |
| 8.0.59 | Fri, 6 Nov 2026, 7:32:55 PM (Dubai) | 2026-11-06 15:32:55 UTC | [58938a2](https://github.com/jerrin-v/portfolio/commit/58938a2fb612328e0e60e0168626a2322a7c961a) | [#24](https://github.com/jerrin-v/portfolio/actions/runs/42243436599) |
| 8.0.58 | Fri, 6 Nov 2026, 6:53:33 PM (Dubai) | 2026-11-06 14:53:33 UTC | [242b450](https://github.com/jerrin-v/portfolio/commit/242b45068cd5d6f2eb39d58fe68c1052a7239caa) | [#22](https://github.com/jerrin-v/portfolio/actions/runs/42237479730) |
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
- `media/` — every image the site shows (WebP) plus the 1080p showreel, each file sealed and published with the site.
- Original uploads (full-quality PNG/JPG) stay in the Wix media library; this repo keeps only the WebP versions.
- `source.pack` — the source files (page sources, CSS, build and push tools, content, notes), sealed. The old v7 version is not kept here.
- The workflow downloads new media from Wix once, saves it here (commit "Update sealed media backup") and removes what the site no longer uses.
- The contact form is replaced here by the email link (the form needs Wix).

**If Wix is ever gone, see [RESTORE.md](RESTORE.md)**: publish this site without a password, save an offline version, or rebuild from source.

Note: page text is password-locked; images are sealed in the repo but, once published, an image file can be opened by anyone who has its exact link.
