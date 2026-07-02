# repo-map.md

- Project: `plib` — static GitHub Pages site; browsable prompt library and skill directory.
- Owner: AahPlexX | Repo: plib | Pages URL: https://AahPlexX.github.io/plib/
- Stack: plain HTML/CSS/vanilla JS. No build step. No framework.
- Pages source: repo root, `main` branch (verify in Settings → Pages if deploy fails).
- Entry point: `index.html`.
- Breadcrumbs: `assets/js/main.js` — derives trail from `location.pathname` segments.
- Global search: `assets/js/main.js` — fetches `/plib/data/search-index.json` on focus; degrades silently if absent.
- Card listing: inline script per listing `index.html` — fetches same JSON, filters by `type`, renders grid + tag filter.
- Copy-to-clipboard: inline IIFE on each detail page — targets `.copy-btn[data-target]`.
  NOTE: when a third detail page is added, extract this IIFE into `main.js` (DRY trigger).
- Directory map:
  - `index.html` — hub/home
  - `404.html` — GitHub Pages custom 404 + 8s auto-redirect
  - `prompts/index.html` — prompt listing (card grid, tag filter)
  - `prompts/intro-to-prompting.html` — RISEN Universal Structured Prompt (first prompt detail; canonical template)
  - `.skill/index.html` — skill listing (card grid, tag filter)
  - `.skill/chain-of-thought.html` — Chain-of-Thought CoT skill (first skill detail; canonical template)
  - `assets/css/style.css` — all site styles (clamp-based, CSS vars; includes .section-note, .ref-list)
  - `assets/js/main.js` — breadcrumbs + global search
  - `data/search-index.json` — source of truth for search + card lists
- Content quality standard:
  - Every prompt must be copy-paste deployable with all-caps insertion tokens only. No vague bracket placeholders.
  - Every prompt must include a fully-worked concrete example with zero placeholders.
  - Every skill must state: model-scale prerequisites, task-type applicability, token cost profile, and alternatives.
  - All content must cite peer-reviewed sources (arXiv, ACL, NeurIPS) or authoritative production research.
  - Anatomy/breakdown section required on all pages.
- Adding new content (repeatable pattern):
  1. Add entry to `data/search-index.json` (`title`, `url`, `type`, `tags`).
  2. Create the `.html` detail file at the matching `url` path.
  3. Mirror the detail-page template from `intro-to-prompting.html` (prompt) or `chain-of-thought.html` (skill).
  4. Ensure all-caps insertion tokens only; include worked example; include References section.
- Completion phases:
  1. Site shell + breadcrumb/search engine — DONE
  2. Data layer + listing pages — DONE
  3. 404 fallback + first content pages (templates established) — DONE
  4. Content quality overhaul — DONE (RISEN framework prompt, full CoT skill with ZS + FS variants)
