# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.0.72 | Sun, 15 Nov 2026, 7:56:33 PM (Dubai) | 2026-11-15 15:56:33 UTC | [571f01a](https://github.com/jerrin-v/portfolio/commit/571f01aa01cefc751eb0e30ce3909f239ccd9e92) | [#38](https://github.com/jerrin-v/portfolio/actions/runs/43732579761) |
| 8.0.71 | Sun, 15 Nov 2026, 7:30:07 PM (Dubai) | 2026-11-15 15:30:07 UTC | [d81b8f2](https://github.com/jerrin-v/portfolio/commit/d81b8f2f20979342b7b170122159fb1cb9b83d53) | [#37](https://github.com/jerrin-v/portfolio/actions/runs/43730146571) |
| 8.0.70 | Sun, 15 Nov 2026, 9:04:05 AM (Dubai) | 2026-11-15 05:04:05 UTC | [675124d](https://github.com/jerrin-v/portfolio/commit/675124d01186b9664e96b514b79d58e3bc538cb7) | [#36](https://github.com/jerrin-v/portfolio/actions/runs/43679387243) |
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
