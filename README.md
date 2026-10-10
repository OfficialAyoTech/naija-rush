# Naija Rush
Original 3D endless runner (Three.js r128, bundled locally). Works offline after the first online load.

## Files (keep this structure)
index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png, vendor/ (3 JS files), models/Soldier.glb

## Run locally
`python3 -m http.server 8000` in this folder, open http://localhost:8000 (needs http, not file://).

## Free hosting
- GitHub Pages: repo Settings > Pages > Branch main, / (root). Site: https://USERNAME.github.io/REPO/
- Netlify Drop: drag this folder onto https://app.netlify.com/drop
- Cloudflare Pages: connect the repo, no build command, output directory `/`.

## Updating after you edit any file
Change `V` in sw.js (e.g. naija-rush-v10 -> v11), upload the files, hard-refresh (Ctrl+Shift+R); phones may need two reloads.

## Controls
Swipe or arrows: lanes. Up/W/Space jump. Down/S slide. P/Esc pause. Add `?fps=1` to the URL for an FPS overlay and an end-of-run performance report. Difficulty (Easy/Normal/Hard) and Quality (Auto/Low/High) are on the menu; tuning numbers are in the PRESETS block in index.html.

## Credits and licences
- three.js r128 (MIT).
- models/Soldier.glb: Mixamo character and animations, as shipped in the three.js examples. Mixamo terms allow use inside games but not redistributing the raw file alone. Check Adobe's current terms before wide release, or swap in your own model.
- All sounds and music are generated in code. Everything else is original.

## Power-ups and daily missions
- Magnet (8 s) pulls nearby coins in. Shield absorbs one crash. Both appear occasionally in the free lane.
- 3 daily missions, the same for everyone each day (seeded by the date). Progress and streak are saved on the device and counted when a run ends.

## Visuals
Road and building textures are drawn in code at start-up (no image files). Seven themed road segments (market, towers, houses, footbridge) are swapped as you run. If a browser lacks canvas, the game falls back to flat colours.
