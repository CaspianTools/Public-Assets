---
product: Caspian Store
title: "v9.10.0 — Mobile bottom-drawer nav + installable PWA"
date: 2026-06-13
type: release
social: false
draft: false
---

**v9.10.0** brings the storefront's mobile chrome up to par and gives you the pieces to ship an installable PWA — ported from the luivante standalone fork and adapted to this library's framework-agnostic, inline-styled model.

### 📱 Mobile navigation
- A reusable **`<BottomSheet>`** primitive (veil, slide-up, drag handle, Escape + scroll-lock, focus management).
- **`<SiteHeader>`** now collapses to a **hamburger + `<MobileNavSheet>`** below 820px — no API change, automatic once the library CSS is imported.
- **`<ShopFilterDrawer>`** now sits on top of `<BottomSheet>`.

### ⚡ Installable PWA
- **`<ServiceWorkerRegister>`**, **`<InstallAppPrompt>`** + **`useInstallPrompt()`** (Android prompt + iOS Add-to-Home-Screen hint).
- **`buildWebManifest(input)`** — a pure helper your route handler calls to serve a dynamic, brand-aware manifest.
- **`examples/nextjs`** is wired end-to-end: dynamic manifest + logo-derived icon routes, `sw.js` + offline page, layout metadata.

### Upgrade
Fully backward-compatible — nothing breaks if you do nothing. To make a site installable, follow **INSTALL.md § 9.5** (mount two components, add `sw.js`/`offline.html`, add a manifest route). The mobile hamburger is free with the CSS.

```
npm i @caspian-explorer/script-caspian-store@9.10.0
```

📦 [Release](https://github.com/CaspianTools/script-caspian-store/releases/tag/v9.10.0) · 📋 [CHANGELOG](https://github.com/CaspianTools/script-caspian-store/blob/main/CHANGELOG.md)
