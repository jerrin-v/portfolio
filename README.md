# Jerrin Varghese — Portfolio

Website: **https://jerrin-v.github.io/portfolio/** (password protected) · main site: [www.jerrindesign.com](https://www.jerrindesign.com).

## Last 3 successful publishes

<!-- publishes:start -->
| Version | Published (Dubai time) | UTC | Commit | Run |
|---|---|---|---|---|
| 8.0.76 | Sun, 15 Nov 2026, 9:39:56 PM (Dubai) | 2026-11-15 17:39:56 UTC | [a92662c](https://github.com/jerrin-v/portfolio/commit/a92662c3507b6af3b9b799f10d69cfcd0f3a83f2) | [#42](https://github.com/jerrin-v/portfolio/actions/runs/43742300723) |
| 8.0.75 | Sun, 15 Nov 2026, 9:03:47 PM (Dubai) | 2026-11-15 17:03:47 UTC | [4dbfe09](https://github.com/jerrin-v/portfolio/commit/4dbfe0919aeaf40f43682ea13c692ad91eab5f43) | [#41](https://github.com/jerrin-v/portfolio/actions/runs/43738867423) |
| 8.0.74 | Sun, 15 Nov 2026, 8:40:10 PM (Dubai) | 2026-11-15 16:40:10 UTC | [6e621d3](https://github.com/jerrin-v/portfolio/commit/6e621d3b03f18c84355b1c60ecde69abdc388b34) | [#40](https://github.com/jerrin-v/portfolio/actions/runs/43736698997) |
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
