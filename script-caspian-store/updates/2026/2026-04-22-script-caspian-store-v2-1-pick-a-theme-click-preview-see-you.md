---
product: Caspian Store
title: "script-caspian-store v2.1 — Pick a theme, click Preview, see your store"
date: 2026-04-22
type: release
social: false
draft: false
---

The Appearance page now shows a **grid of 10 pre-designed themes** instead of raw color pickers. Each theme is a complete out-of-the-box identity (colors + radius + optional serif font). Click **Preview** on any card and a popup window renders a dummy-data storefront (header + hero + product grid + footer) with that theme applied — no Firestore roundtrip, no seed data required. Click **Activate** to push the tokens to your live storefront.

**What shipped:**

- 🎨 10 themes — Clean white, Minimal dark, Boutique, Editorial, Neon shop, Pastel studio, Academy, Kitchen table, Forum blue, Runway
- 🔍 Category filter sidebar (Corporate, Shop, Creative, Portfolio, Education, Health & Beauty, Events, Food, Marketing, Minimal) + search
- 🪟 Popup preview with dummy-data storefront — safe to click without touching production
- ♻️ `THEME_PRESETS` + `THEME_CATALOG` back-compat preserved — existing `save({ theme: ... })` calls keep working

**Upgrade:**

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.1.0
```

Existing installs on v2.0.x: add one file to wire the preview route — copy from the CHANGELOG: https://github.com/Caspian-Explorer/script-caspian-store/blob/main/CHANGELOG.md#v210

Repo: https://github.com/Caspian-Explorer/script-caspian-store
