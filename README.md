# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.0.83 | Fri, 20 Nov 2026, 10:32:00 AM (Dubai) | 2026-11-20 06:32:00 UTC | [198d1ba](https://github.com/jerrin-v/portfolio/commit/198d1ba9253a0d662e096e1fcb72564b8603dfd3) | [#49](https://github.com/jerrin-v/portfolio/actions/runs/44688336182) |
| 8.0.82 | Wed, 18 Nov 2026, 6:23:59 AM (Dubai) | 2026-11-18 02:23:59 UTC | [fffff97](https://github.com/jerrin-v/portfolio/commit/fffff976ebf1c5176a29107422603bac63dbed4e) | [#48](https://github.com/jerrin-v/portfolio/actions/runs/44222857757) |
| 8.0.81 | Wed, 18 Nov 2026, 12:32:05 AM (Dubai) | 2026-11-17 20:32:05 UTC | [c737f29](https://github.com/jerrin-v/portfolio/commit/c737f297d807d68631bd79ca309fcd6d7c174e35) | [#47](https://github.com/jerrin-v/portfolio/actions/runs/44170135747) |
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
