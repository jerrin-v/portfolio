# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.0.98 | Fri, 27 Nov 2026, 5:22:07 PM (Dubai) | 2026-11-27 13:22:07 UTC | [face060](https://github.com/jerrin-v/portfolio/commit/face060ee7ad9c6f6870000889b6787f9a180502) | [#64](https://github.com/jerrin-v/portfolio/actions/runs/46006339362) |
| 8.0.97 | Thu, 26 Nov 2026, 3:16:25 PM (Dubai) | 2026-11-26 11:16:25 UTC | [7bff0bd](https://github.com/jerrin-v/portfolio/commit/7bff0bd6c2dbcea19c4d13d20da87795dce00e76) | [#63](https://github.com/jerrin-v/portfolio/actions/runs/45808952863) |
| 8.0.96 | Mon, 23 Nov 2026, 8:00:27 PM (Dubai) | 2026-11-23 16:00:27 UTC | [d1d66b1](https://github.com/jerrin-v/portfolio/commit/d1d66b1370930f597a0aa1aeb51cd43e4f8bf772) | [#62](https://github.com/jerrin-v/portfolio/actions/runs/45211355785) |
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
