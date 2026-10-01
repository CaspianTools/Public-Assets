---
product: Caspian Store
title: "script-caspian-store v8.23.2 — Templates fix: brand docs + placeholder product images"
date: 2026-05-19
type: release
social: false
draft: false
---

Bug-fix release for [v8.23.0](https://github.com/CaspianTools/script-caspian-store/discussions/128). Two real issues surfaced as soon as the first owner applied a template:

- 🏷️ **Every product tripped the "legacy free-text brand" admin warning** — templates wrote products with the brand name as a string instead of a `productBrands` doc id. Templates now ship a `brands` array; `applyTemplate()` writes the brand docs before products.
- 🖼️ **Several Unsplash IDs were wrong** (a Birkin handbag labelled "Canvas Tote", a Nike sneaker labelled "Suede Loafer"). The Unsplash Source API I planned as a fallback was deprecated by Unsplash and returns 503. Product images now use Picsum (`picsum.photos/seed/<slug>/...`) — deterministic, generic, always loads, obviously a placeholder rather than impersonating a specific product.

Hero and category shots keep their curated Unsplash IDs (those rendered correctly).

```bash
npm install github:CaspianTools/script-caspian-store#v8.23.2
```

Re-apply your template in replace mode for the cleanest result.

**Important framing:** this release does NOT address the "templates feel visually the same" concern. That's the whole point of v9.0.0 (per-template React components, animations, custom CSS) — currently being built phase-by-phase as `v9.0.0-alpha.N` releases.

Repo: <https://github.com/CaspianTools/script-caspian-store>
