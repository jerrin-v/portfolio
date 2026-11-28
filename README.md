# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.1.4 | Sat, 28 Nov 2026, 9:17:42 AM (Dubai) | 2026-11-28 05:17:42 UTC | [6e2e8d4](https://github.com/jerrin-v/portfolio/commit/6e2e8d4295247e728979fbf9a1e73907b2c8630c) | [#68](https://github.com/jerrin-v/portfolio/actions/runs/46111375673) |
| 8.1.3 | Sat, 28 Nov 2026, 8:40:29 AM (Dubai) | 2026-11-28 04:40:29 UTC | [f6ddeba](https://github.com/jerrin-v/portfolio/commit/f6ddebae55dc9e171bbb8fb93f386785efe15341) | [#67](https://github.com/jerrin-v/portfolio/actions/runs/46108538337) |
| 8.1.2 | Sat, 28 Nov 2026, 1:06:01 AM (Dubai) | 2026-11-27 21:06:01 UTC | [c6b7658](https://github.com/jerrin-v/portfolio/commit/c6b76586a482c4305c355f4ae4db586dcad28805) | [#66](https://github.com/jerrin-v/portfolio/actions/runs/46067923745) |
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
