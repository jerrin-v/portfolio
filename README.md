# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.1.15 | Sat, 28 Nov 2026, 5:47:57 PM (Dubai) | 2026-11-28 13:47:57 UTC | [72e9f05](https://github.com/jerrin-v/portfolio/commit/72e9f05b9db4bb21f88bcb717da7b7de8c4ad0d4) | [#80](https://github.com/jerrin-v/portfolio/actions/runs/46151311986) |
| 8.1.14 | Sat, 28 Nov 2026, 4:03:28 PM (Dubai) | 2026-11-28 12:03:28 UTC | [bcedbfd](https://github.com/jerrin-v/portfolio/commit/bcedbfdb7bbecf57c11f9ae437bccab0cd42212d) | [#79](https://github.com/jerrin-v/portfolio/actions/runs/46142710503) |
| 8.1.13 | Sat, 28 Nov 2026, 3:37:44 PM (Dubai) | 2026-11-28 11:37:44 UTC | [286bf94](https://github.com/jerrin-v/portfolio/commit/286bf9407db6e7913c5ac784eee3074820292d16) | [#78](https://github.com/jerrin-v/portfolio/actions/runs/46140704066) |
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
