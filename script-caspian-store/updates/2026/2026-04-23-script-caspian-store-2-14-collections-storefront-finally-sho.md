---
product: Caspian Store
title: "script-caspian-store 2.14 — Collections storefront, finally showing collections"
date: 2026-04-23
type: release
social: false
draft: false
---

A scaffolder bug meant every generated site had `/collections` rendering a full-width product list titled **Shop**, so admin-curated `productCollections` were invisible to shoppers. v2.14 ships the missing surface.

- 🛍️ **`<CollectionsPage>`** — grid of active collections, one card per collection with image + name + description.
- 📄 **`<CollectionDetailPage>`** — hero + `<ProductGrid>` at `/collections/[slug]`, honors inventory + tax-display settings like the main list page.
- 🔍 **`/shop`** — a dedicated catalog route so the header nav's **Shop** link stops pointing at the homepage.
- 🧭 **Default nav** — `DEFAULT_NAV` 's Shop item moves from `/` to `/shop`.

Full release + upgrade steps: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v2.14.0

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.14.0
```

Repo: https://github.com/Caspian-Explorer/script-caspian-store
