# If Wix is gone — restoring the portfolio from this repository

Everything needed to run and edit www.jerrindesign.com lives here, sealed with the `SITE_PACK_KEY` key
(keep it with the safekeeping PDF). Nothing below needs Wix.

## What the backup holds

| Part | What it is |
|---|---|
| `site.pack` | Every file of the live site (pages, CSS, JS, font, icons, SVG logos, sitemap, robots, Search Console file). |
| `media/*.bin` | Every image the pages show (WebP, as served) and the 1080p showreel. Published with the site. |
| `source.pack` | Source to rebuild and edit the site: page sources, CSS, content, build and push tools, notes, ADX generator, the old v7 archive. |

The workflow refreshes `media/` on every publish: new images are added, removed ones dropped.
Original uploads (full-quality PNG/JPG) are **not** kept here: they stay in the Wix media library. Download them from Wix
(Media Manager, or the full library zip from 6 Nov 2026) if you ever plan to leave Wix.

## Option A — make the GitHub copy the public website

1. **Settings → Secrets and variables → Actions → Variables → New repository variable**: name `SITE_PUBLIC`, value `true`.
2. **Actions → Publish site → Run workflow.** Pages are now published without a password at https://jerrin-v.github.io/portfolio/.
3. To use your own domain: **Settings → Pages → Custom domain** → `www.jerrindesign.com`, then at your domain registrar add a
   `CNAME` record `www` → `jerrin-v.github.io` (and the four GitHub Pages `A` records for the bare domain, see GitHub's Pages docs).
4. To lock it again: delete the variable (or set it to `false`) and run Publish site.

## Option B — a complete offline copy on your Mac

Needs Node.js 20+ and a clone of this repository (`git clone https://github.com/jerrin-v/portfolio`). In Terminal, inside it:

    npm install --no-save sharp@0.33.5
    export SITE_PACK_KEY="$(cat ~/Documents/Personal/Git-Hub-Files/Portfolio/site-pack-key.pem)"
    node tools/site-lock.mjs export ~/Desktop/portfolio-offline

The folder holds the full unlocked site with all its WebP images and the showreel (open it through a local web server,
e.g. `npx serve ~/Desktop/portfolio-offline`).

## Option C — the source, to edit and rebuild

    node tools/site-lock.mjs restore source.pack ~/Desktop/portfolio-source

Then `python3 src/build.py` inside it (see HANDOFF.md and BRIEF-v8.md in that folder).

## What Wix did that is not a file

- **Contact form**: needs Wix. The GitHub copy shows the email link instead. Messages already sent through the form stay in Wix (export them from the Wix dashboard if you still can).
- **301 redirects**: /about→/about.html, /articles→/writing.html, /project-designs→/work.html, /case-studies→/work.html, /branding→/, /v8→/v8/index.html. GitHub Pages has no redirects; recreate them on the new host if needed.
- **Domain**: www.jerrindesign.com is connected through Wix. Point its DNS to the new host (step A3).
- **Wix media library**: 568 files (~478 MB) including the full-quality originals and many files the site no longer uses. Only WebP versions of the files the site uses are backed up here; the full library zip was downloaded on 6 Nov 2026.
