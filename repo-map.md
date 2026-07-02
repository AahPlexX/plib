# Repository map

- Project: `plib` — a static GitHub Pages prompt and skill library.
- Stack: plain HTML, CSS, and JavaScript. No build step.
- Entry point: `index.html`.
- Library UX: every entry contains a short overview, one copy-ready artifact, and Copy / Download controls.
- Portable source artifacts:
  - `prompts/structured-developer-task.md` — Markdown prompt.
  - `skills/reasoned-task-solver/SKILL.md` — Agent Skill file.
- Visual entry pages:
  - `prompts/index.html and `prompts/intro-to-prompting.html`
  - `.skill/index.html` and `.skill/chain-of-thought.html
- Shared browser behavior: `assets/js/main.js` supplies Copy and Markdown download actions.
- Shared CSS:
  - `assets/css/style.css` — existing responsive base and detail-page styles.
  - `assets/css/library.css` — small navigation, directory-card, and action-control additions.
- No static search index, tag filter, citation section, worked-example section, or model-scale claims are part of the library.
