# repo-map.md

- Project: `plib` — static GitHub Pages site; browsable prompt library and skill directory.
- Owner: AahPlexX | Repo: plib | Pages URL: https://AahPlexX.github.io/plib/
- Stack: plain HTML/CSS/vanilla JS. No build step. No framework.
- Pages source: repo root, `main` branch (verify in Settings → Pages if deploy fails).
- Entry point: `index.html`.
- Breadcrumbs: client-side in `assets/js/main.js` — derived from `location.pathname`.
- Search: client-side in `assets/js/main.js` — fetches `/plib/data/search-index.json` on input focus; degrades silently if file absent.
- Card listing: inline script in each listing `index.html` — fetches same JSON, filters by `type` field, renders grid + tag filter.
- Directory map:
  - `index.html` — hub/home
  - `prompts/index.html` — prompt listing (card grid, tag filter)
  - `.skill/index.html` — skill listing (card grid, tag filter)
  - `assets/css/style.css` — all site styles (clamp-based)
  - `assets/js/main.js` — breadcrumbs + global search
  - `data/search-index.json` — static JSON data layer (source of truth for search + card lists)
- Completion phases:
  1. Site shell + breadcrumb/search engine — DONE
  2. `data/search-index.json` + `prompts/index.html` + `.skill/index.html` — DONE
  3. `404.html` deep-link fallback + first real content pages (`prompts/intro-to-prompting.html`, `.skill/chain-of-thought.html`) — NEXT
