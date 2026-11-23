# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.0.88 | Mon, 23 Nov 2026, 12:24:42 PM (Dubai) | 2026-11-23 08:24:42 UTC | [aefe8f2](https://github.com/jerrin-v/portfolio/commit/aefe8f27367dccb4a38377fb80876d22993da04d) | [#54](https://github.com/jerrin-v/portfolio/actions/runs/45138265941) |
| 8.0.87 | Mon, 23 Nov 2026, 11:59:12 AM (Dubai) | 2026-11-23 07:59:12 UTC | [fe32acd](https://github.com/jerrin-v/portfolio/commit/fe32acd1ba1b4c92397ed7ce636ea383897cd3dd) | [#53](https://github.com/jerrin-v/portfolio/actions/runs/45134863653) |
| 8.0.86 | Fri, 20 Nov 2026, 5:26:54 PM (Dubai) | 2026-11-20 13:26:54 UTC | [9bd6e5b](https://github.com/jerrin-v/portfolio/commit/9bd6e5be141b1838bdbc0f3736f4465bc4c4220a) | [#52](https://github.com/jerrin-v/portfolio/actions/runs/44744228077) |
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
