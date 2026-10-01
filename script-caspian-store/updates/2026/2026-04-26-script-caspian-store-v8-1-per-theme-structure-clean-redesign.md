---
product: Caspian Store
title: "script-caspian-store v8.1 — Per-theme structure + Clean redesign"
date: 2026-04-26
type: release
social: false
draft: false
---

v8.1 ships two improvements bundled in one release.

**Per-theme code structure.** Every preset now lives in its own folder under `src/theme/themes/<id>/` with its own `version: string`. The Appearance admin page tracks each admin's last-acknowledged version per theme in `localStorage` and shows an `Updated` pill only on cards that actually changed since they last engaged with them — so bumping one preset no longer makes every card look like it changed.

**Clean default theme redesign.** The library's default theme now ships with:

- 🤍 Pure white page background (new optional `ThemeTokens.background` token)
- ✨ Poppins as the body + headline font, auto-loaded from Google Fonts when the theme activates — no consumer hand-edit needed
- 🔗 Cleaner link hover (opacity transition instead of underline)
- 📐 Centered Collection page titles + taglines
- 🛍️ Shop page with a 240px filter sidebar (Category / Price / Size / Quick filters / Reset) on the left, products on the right; collapses to single column under 720px

No consumer action required — `npm install github:Caspian-Explorer/script-caspian-store#v8.1.0` is enough. Existing Clean-theme stores keep their current background until an admin re-activates the theme from `/admin/appearance`.

Repo: https://github.com/Caspian-Explorer/script-caspian-store
Release: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.1.0
