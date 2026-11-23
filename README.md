# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.0.95 | Mon, 23 Nov 2026, 6:18:51 PM (Dubai) | 2026-11-23 14:18:51 UTC | [493dfd1](https://github.com/jerrin-v/portfolio/commit/493dfd108e6eee0ab9cf26a5835aa677388488a5) | [#61](https://github.com/jerrin-v/portfolio/actions/runs/45192638243) |
| 8.0.94 | Mon, 23 Nov 2026, 4:45:28 PM (Dubai) | 2026-11-23 12:45:28 UTC | [3ad6785](https://github.com/jerrin-v/portfolio/commit/3ad6785df7539c2c3707138593188c917301e0d4) | [#60](https://github.com/jerrin-v/portfolio/actions/runs/45177128867) |
| 8.0.93 | Mon, 23 Nov 2026, 4:33:18 PM (Dubai) | 2026-11-23 12:33:18 UTC | [5288bc4](https://github.com/jerrin-v/portfolio/commit/5288bc4461760a1729dcb60476bf0ce19d418d7f) | [#59](https://github.com/jerrin-v/portfolio/actions/runs/45175271984) |
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
