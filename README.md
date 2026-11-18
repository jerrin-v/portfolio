# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.0.82 | Wed, 18 Nov 2026, 6:23:59 AM (Dubai) | 2026-11-18 02:23:59 UTC | [fffff97](https://github.com/jerrin-v/portfolio/commit/fffff976ebf1c5176a29107422603bac63dbed4e) | [#48](https://github.com/jerrin-v/portfolio/actions/runs/44222857757) |
| 8.0.81 | Wed, 18 Nov 2026, 12:32:05 AM (Dubai) | 2026-11-17 20:32:05 UTC | [c737f29](https://github.com/jerrin-v/portfolio/commit/c737f297d807d68631bd79ca309fcd6d7c174e35) | [#47](https://github.com/jerrin-v/portfolio/actions/runs/44170135747) |
| 8.0.80 | Wed, 18 Nov 2026, 12:04:03 AM (Dubai) | 2026-11-17 20:04:03 UTC | [efd6a43](https://github.com/jerrin-v/portfolio/commit/efd6a43dfd7201ba895b966a5a4ff842a86ddc67) | [#46](https://github.com/jerrin-v/portfolio/actions/runs/44165164723) |
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
