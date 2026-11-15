# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.0.70 | Sun, 15 Nov 2026, 9:04:05 AM (Dubai) | 2026-11-15 05:04:05 UTC | [675124d](https://github.com/jerrin-v/portfolio/commit/675124d01186b9664e96b514b79d58e3bc538cb7) | [#36](https://github.com/jerrin-v/portfolio/actions/runs/43679387243) |
| 8.0.69 | Sat, 14 Nov 2026, 6:54:50 PM (Dubai) | 2026-11-14 14:54:50 UTC | [cb1b55a](https://github.com/jerrin-v/portfolio/commit/cb1b55a4e5b22b73e900fb66b44490826a73a40c) | [#35](https://github.com/jerrin-v/portfolio/actions/runs/43607245533) |
| 8.0.68 | Fri, 13 Nov 2026, 1:10:46 PM (Dubai) | 2026-11-13 09:10:46 UTC | [93958d6](https://github.com/jerrin-v/portfolio/commit/93958d6394609e8c46ea2dd71583140a3f5384e4) | [#34](https://github.com/jerrin-v/portfolio/actions/runs/43399016708) |
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
