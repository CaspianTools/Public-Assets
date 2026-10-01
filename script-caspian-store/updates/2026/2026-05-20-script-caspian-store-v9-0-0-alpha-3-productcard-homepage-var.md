---
product: Caspian Store
title: "script-caspian-store v9.0.0-alpha.3 — ProductCard + HomePage variants (pre-release)"
date: 2026-05-20
type: release
social: false
draft: false
---

**Pre-release.** Phase 3 of the v9.0.0 theme rearchitecture. The hero became template-specific in alpha.2; this release does the same for product cards and the homepage section composition. The whole homepage — not just the hero — now feels different per template.

**ProductCard variants:**
- 👕 fashion-minimal → `<ProductCardStandard>` — 3:4 portrait, hover lift
- 🎧 electronics-tech → `<ProductCardCompact>` — dark plinth, monospace eyebrow, accent line slides in under name
- 🏡 home-goods → `<ProductCardEditorial>` — 4:5 serif, hover fades in "View product →" CTA

**HomePage variants:**
- fashion-minimal → `<HomePageDefault>` (v8.x flow)
- electronics-tech → `<HomePageSpotlight>` — spec strip + Trending leads instead of Categories
- home-goods → `<HomePageEditorial>` — magazine-style pull-quote between sections

Motion still pure CSS via each template's `css` field. No motion library added.

```bash
npm install github:CaspianTools/script-caspian-store#v9.0.0-alpha.3
```

Pre-release; not picked up by `^8.x` pins. Phase 4 (ProductDetailPage variants + animation polish) is next.

Repo: <https://github.com/CaspianTools/script-caspian-store>
