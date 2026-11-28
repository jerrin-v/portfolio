# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.1.11 | Sat, 28 Nov 2026, 1:25:40 PM (Dubai) | 2026-11-28 09:25:40 UTC | [54f25e4](https://github.com/jerrin-v/portfolio/commit/54f25e4895b6ea15b2c03e3ef8e7304cc5ad5e53) | [#76](https://github.com/jerrin-v/portfolio/actions/runs/46130348277) |
| 8.1.10 | Sat, 28 Nov 2026, 1:05:56 PM (Dubai) | 2026-11-28 09:05:56 UTC | [ed05c76](https://github.com/jerrin-v/portfolio/commit/ed05c76dfbd1e4cf66d8c4c722a8f673aa5063f1) | [#75](https://github.com/jerrin-v/portfolio/actions/runs/46128761762) |
| 8.2.0 | Sat, 28 Nov 2026, 12:17:34 PM (Dubai) | 2026-11-28 08:17:34 UTC | [224a2ad](https://github.com/jerrin-v/portfolio/commit/224a2ad79fce1c756a205cc86e012abc1cd0df2a) | [#74](https://github.com/jerrin-v/portfolio/actions/runs/46125054543) |
<!-- publishes:end -->

Updated automatically after every successful publish.

## Full backup — works without Wix

- `site.pack` — every file of the site, sealed.
- `media/` — every image the site shows (WebP) plus the 1080p showreel, each file sealed and published with the site. File names match the Wix Media Manager names (`media/names.json`), e.g. `eagle-pro-login-page-with-email-and-one-time-password-sign-in.bin`. `media/backup/` keeps retired media (the 2025 showreel); the workflow never removes it.
- Original uploads (full-quality PNG/JPG) stay in the Wix media library; this repo keeps only the WebP versions.
- `source.pack` — the source files (page sources, CSS, build and push tools, content, notes), sealed. The old v7 version is not kept here.
- The workflow downloads new media from Wix once, saves it here (commit "Update sealed media backup") and removes what the site no longer uses.
- The contact form is replaced here by the email link (the form needs Wix).

**If Wix is ever gone, see [RESTORE.md](RESTORE.md)**: publish this site without a password, save an offline version, or rebuild from source.
