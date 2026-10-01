---
product: Caspian Store
title: "script-caspian-store v9.0.0-alpha.4 — ProductDetailPage variants (pre-release)"
date: 2026-05-21
type: release
social: false
draft: false
---

**Pre-release.** Phase 4 of the v9.0.0 theme rearchitecture — last visible-content phase. Every primary storefront surface is now template-dispatched: hero, product card, homepage, and **product detail page**.

PDP state shared via a new `useProductDetailState()` hook so variants are pure JSX:

- 👕 fashion-minimal → `<ProductDetailDefault>` — v8.x layout (gallery left, info right, tabs below)
- 🎧 electronics-tech → `<ProductDetailTech>` — info LEFT (sticky), gallery RIGHT, monospace SKU eyebrow, spec-sheet typography, Details + Reviews scroll inline
- 🏡 home-goods → `<ProductDetailEditorial>` — magazine flow: gallery centred above the fold, italic serif name, narrow story column, quiet reviews

`product-detail-page.tsx` collapsed from 382 LoC to a ~60-LoC dispatcher. Same export, same props, same back-compat.

```bash
npm install github:CaspianTools/script-caspian-store#v9.0.0-alpha.4
```

Pre-release; not picked up by `^8.x` pins. Phase 5 (stabilisation + v9.0.0 stable with migration docs) is next.

Repo: <https://github.com/CaspianTools/script-caspian-store>
