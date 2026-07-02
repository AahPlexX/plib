function buildBreadcrumbs() {
  const list = document.getElementById("breadcrumb-list");
  if (!list) return;

  const base = "/plib/";
  const path = window.location.pathname;
  const trimmed = path.startsWith(base) ? path.slice(base.length) : path.replace(/^\//, "");
  const segments = trimmed.split("/").filter(Boolean);

  const crumbs = [{ label: "plib", href: base }];
  let accumulated = base;
  segments.forEach((segment, index) => {
    accumulated += segment + "/";
    const isLast = index === segments.length - 1;
    const label = decodeURIComponent(segment.replace(/\.html$/, ""));
    crumbs.push({ label, href: isLast ? null : accumulated });
  });

  list.innerHTML = crumbs
    .map((crumb) =>
      crumb.href
        ? `<li><a href="${crumb.href}">${crumb.label}</a></li>`
        : `<li aria-current="page">${crumb.label}</li>`
    )
    .join("");
}

function setupSearch() {
  const input = document.getElementById("site-search");
  const resultsList = document.getElementById("search-results");
  if (!input || !resultsList) return;

  let index = null;
  let indexError = false;

  async function loadIndex() {
    if (index || indexError) return;
    try {
      const response = await fetch("/plib/data/search-index.json");
      if (!response.ok) throw new Error("Search index not found");
      index = await response.json();
    } catch {
      indexError = true;
    }
  }

  function renderResults(matches) {
    if (!matches.length) {
      resultsList.hidden = true;
      resultsList.innerHTML = "";
      return;
    }
    resultsList.innerHTML = matches
      .slice(0, 10)
      .map((item) => `<li><a href="${item.url}">${item.title}</a></li>`)
      .join("");
    resultsList.hidden = false;
  }

  input.addEventListener("focus", loadIndex);

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    if (!query || indexError || !index) {
      renderResults([]);
      return;
    }
    const matches = index.filter((item) =>
      item.title.toLowerCase().includes(query) ||
      (item.tags || []).some((tag) => tag.toLowerCase().includes(query))
    );
    renderResults(matches);
  });

  document.addEventListener("click", (event) => {
    if (!resultsList.contains(event.target) && event.target !== input) {
      resultsList.hidden = true;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildBreadcrumbs();
  setupSearch();
});