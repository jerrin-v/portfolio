# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.1.9 | Sat, 28 Nov 2026, 11:56:32 AM (Dubai) | 2026-11-28 07:56:32 UTC | [fe54b21](https://github.com/jerrin-v/portfolio/commit/fe54b213c019b1bc29f023a464a283ed42a08d86) | [#73](https://github.com/jerrin-v/portfolio/actions/runs/46123416492) |
| 8.1.8 | Sat, 28 Nov 2026, 10:40:31 AM (Dubai) | 2026-11-28 06:40:31 UTC | [03a3793](https://github.com/jerrin-v/portfolio/commit/03a379377bf0515c1df35b0e09dba5d99ef98f7e) | [#72](https://github.com/jerrin-v/portfolio/actions/runs/46117630161) |
| 8.1.7 | Sat, 28 Nov 2026, 10:17:01 AM (Dubai) | 2026-11-28 06:17:01 UTC | [aec79ff](https://github.com/jerrin-v/portfolio/commit/aec79ff0acd711df46368cf11d43c00900e715ad) | [#71](https://github.com/jerrin-v/portfolio/actions/runs/46115796271) |
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
