---
product: Caspian Store
title: "script-caspian-store 8.1.4 — Storefront category filter shows names; search re-renders on client navigation"
date: 2026-04-26
type: release
social: false
draft: false
---

v8.1.4 fixes two storefront bugs.

**Category filter** — on `/shop`, the left-rail Category filter was listing raw `product.category` values (Firestore auto-IDs from the admin editor + one legacy free-text label). `/admin/categories` and `/admin/products` already showed the human names, so the views disagreed. v8.1.4 reuses the admin products-list resolver pattern in the storefront — `<ProductListPage>` and `<SearchResultsPage>` now load active categories, build a `Map<id, name>`, and render the resolved label (with a raw-value fallback for legacy free-text categories).

**Search re-renders on client nav** — `<SearchResultsPage>` was failing to re-render on client-side URL changes when the consumer's navigation adapter omitted a reactive `searchParams`. The library now wraps `useCaspianNavigation()`'s `push`/`replace` to emit a `caspian:locationchange` window event, which the page listens for. No consumer adapter edit required (issue #43 self-heal).

**Highlights**

- `/shop` Category filter now shows category names, sorted by label
- Searching for a category name (e.g. "apparel") matches products in that category again
- Issue #43 self-heal — search-results reactivity works on adapters that don't expose a reactive `searchParams`
- `<ShopFilterSidebar>` gains an optional `categoryLabels` prop — backward-compatible for any direct consumers

**Upgrade**

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.1.4
```

No consumer action required beyond reinstalling the tag.

Repo: https://github.com/Caspian-Explorer/script-caspian-store
