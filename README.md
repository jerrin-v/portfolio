# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.0.92 | Mon, 23 Nov 2026, 4:27:25 PM (Dubai) | 2026-11-23 12:27:25 UTC | [0160e03](https://github.com/jerrin-v/portfolio/commit/0160e03476b1dd9f9ce8d54f4573c7f7b42c46e8) | [#58](https://github.com/jerrin-v/portfolio/actions/runs/45174330791) |
| 8.0.91 | Mon, 23 Nov 2026, 4:03:12 PM (Dubai) | 2026-11-23 12:03:12 UTC | [0012ab8](https://github.com/jerrin-v/portfolio/commit/0012ab8febb3b977115fec2be0d3096d41739667) | [#57](https://github.com/jerrin-v/portfolio/actions/runs/45170520971) |
| 8.0.90 | Mon, 23 Nov 2026, 3:50:06 PM (Dubai) | 2026-11-23 11:50:06 UTC | [41eb3dd](https://github.com/jerrin-v/portfolio/commit/41eb3dd64bb343def940f7ea3479c0196700927a) | [#56](https://github.com/jerrin-v/portfolio/actions/runs/45168543554) |
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
