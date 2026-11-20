# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.0.85 | Fri, 20 Nov 2026, 12:34:05 PM (Dubai) | 2026-11-20 08:34:05 UTC | [dac5501](https://github.com/jerrin-v/portfolio/commit/dac550116b65f906d02c9e2a53038cddbf66b712) | [#51](https://github.com/jerrin-v/portfolio/actions/runs/44703443660) |
| 8.0.84 | Fri, 20 Nov 2026, 11:21:09 AM (Dubai) | 2026-11-20 07:21:09 UTC | [ecfe323](https://github.com/jerrin-v/portfolio/commit/ecfe3232b4dd4f61868eab2327bba86542186d58) | [#50](https://github.com/jerrin-v/portfolio/actions/runs/44694188237) |
| 8.0.83 | Fri, 20 Nov 2026, 10:32:00 AM (Dubai) | 2026-11-20 06:32:00 UTC | [198d1ba](https://github.com/jerrin-v/portfolio/commit/198d1ba9253a0d662e096e1fcb72564b8603dfd3) | [#49](https://github.com/jerrin-v/portfolio/actions/runs/44688336182) |
<!-- publishes:end -->

Updated automatically after every successful publish.

## Full backup — works without Wix

- `site.pack` — every file of the site, sealed.
- `media/` — every image the site shows (WebP) plus the 1080p showreel, each file sealed and published with the site. `media/backup/` keeps retired media (the 2025 showreel); the workflow never removes it.
- Original uploads (full-quality PNG/JPG) stay in the Wix media library; this repo keeps only the WebP versions.
- `source.pack` — the source files (page sources, CSS, build and push tools, content, notes), sealed. The old v7 version is not kept here.
- The workflow downloads new media from Wix once, saves it here (commit "Update sealed media backup") and removes what the site no longer uses.
- The contact form is replaced here by the email link (the form needs Wix).

**If Wix is ever gone, see [RESTORE.md](RESTORE.md)**: publish this site without a password, save an offline version, or rebuild from source.
