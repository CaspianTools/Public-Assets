---
product: Caspian Store
title: "script-caspian-store v9.0.0-alpha.2 — Hero variants (pre-release)"
date: 2026-05-20
type: release
social: false
draft: false
---

**Pre-release.** Phase 2 of the v9.0.0 theme rearchitecture. First phase where applying a template visibly changes the storefront — three real hero designs, one per template.

- 👕 **fashion-minimal** → `<HeroCentered>` — editorial centered hero, 0.9s rise entrance
- 🎧 **electronics-tech** → `<HeroFullBleed>` — 80vh slab, monospace eyebrow, 22s ken-burns zoom + staggered text rise
- 🏡 **home-goods** → `<HeroSplit>` — 50/50 editorial split, slide-from-left copy + scale-in image

Motion is pure CSS via each template's `css` field (registered through the `<ThemeInjector>` slot added in alpha.1), scoped by `[data-caspian-template="<id>"]`, with `prefers-reduced-motion` opt-outs. No motion library added — bundle stays lean.

Consumer `<Hero>` import is unchanged; the alpha.1 dispatcher (`useTemplateComponent('Hero', HeroCentered)`) picks the variant.

```bash
npm install github:CaspianTools/script-caspian-store#v9.0.0-alpha.2
```

Pre-release; not picked up by `^8.x` pins. Phase 3 (HomePage + ProductCard variants) is next.

Repo: <https://github.com/CaspianTools/script-caspian-store>
