# repo-map.md

- Project: `plib` — static GitHub Pages site; browsable prompt library and skill directory.
- Owner: AahPlexX | Repo: plib | Pages URL: https://AahPlexX.github.io/plib/
- Stack: plain HTML/CSS/vanilla JS. No build step. No framework.
- Pages source: repo root, `main` branch (verify in Settings → Pages if deploy fails).
- Entry point: `index.html`.
- Breadcrumbs: client-side in `assets/js/main.js` — derived from `location.pathname`.
- Search: client-side in `assets/js/main.js` — fetches `/plib/data/search-index.json` on input focus; degrades silently if file absent.
- Directory plan:
  - `prompts/` — markdown files per prompt + `prompts/index.html` listing page.
  - `.skill/` — files per skill definition + `.skill/index.html` listing page.
  - `assets/css/`, `assets/js/` — site chrome only.
  - `data/` — static JSON acting as data layer (`search-index.json`).
- Completion phases:
  1. Site shell + breadcrumb/search engine — DONE (this commit).
  2. `data/search-index.json` + `prompts/index.html` + `.skill/index.html` — next.
  3. Seed content in `prompts/` and `.skill/`, plus `404.html` deep-link fallback.
