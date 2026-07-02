# Changelog

## 2026-07-02 — Initial scaffold

### New files
- `index.html`: Pages entry point. Hosts search input, breadcrumb mount point, and hub links to `prompts/` and `.skill/`. First file created because the repo was blank and every subsequent page depends on this shell.
- `assets/css/style.css`: Clamp-based responsive typography and flexbox layout for header, breadcrumbs, search dropdown, and footer. Required: CSS-clamping + dynamic responsive design rule; no smooshing permitted.
- `assets/js/main.js`: Breadcrumb builder (derives trail from URL path segments) and search handler (fetches `data/search-index.json` on focus, degrades gracefully when absent). Navigation and search are stated top priorities; wired directly into `index.html` via `<script defer>`.

### Maintenance artifacts
- `repo-map.md`: Created. Documents build commands (none — static), entry point, directory plan, and phase completion state.
- `changelog.md`: Created (this file). Append-only, chronological.
