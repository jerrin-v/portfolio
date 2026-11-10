# Media backup

Files here are kept on purpose and are never removed by the publish workflow (it only cleans unused files directly in `media/`).

| File | What it is |
|---|---|
| `showreel-2025-614b8745c2c07c349be3.bin` | Showreel 2025, 1080p MP4 (38.5 s), replaced on the site by Showreel 2026 in 8.0.61 (10 Nov 2026). Wix source: video `62522e_edae0734c1fd4dbf86f7c25fc47b6055` (still in Wix). |

Each `.bin` is sealed like the rest of `media/` (AES-GCM with the data key in `media/key.json`, which only `SITE_PACK_KEY` can unwrap). To open one:

```
SITE_PACK_KEY="$(cat site-pack-key.pem)" node tools/site-lock.mjs unseal media/backup/showreel-2025-614b8745c2c07c349be3.bin showreel-2025.mp4
```
