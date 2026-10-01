---
product: Caspian Store
title: "script-caspian-store 4.1.1 — Settings sidebar now matches Appearance \"Categories\" styling"
date: 2026-04-24
type: release
social: false
draft: false
---

Small admin-only polish release. The Settings sub-sidebar has existed since v3.0 but its visuals (bordered panel, icon rows, primary-colored active pill) didn't line up with the Appearance page's neighboring "Categories" menu. Merchants kept noticing the mismatch.

**Changed in v4.1.1:**

- 🎨 `AdminSettingsShell` sub-sidebar now mirrors `AdminAppearancePage` — uppercase "Categories" header, label-only rows, soft-grey `rgba(0,0,0,0.06)` active state, no bordered container
- 🌐 Settings shell title + subtitle now flow through `useT()` instead of hardcoded English that had drifted from the i18n keys
- 🔒 `SETTINGS_SUB_NAV` icons are preserved (still used by the main `AdminShell` sidebar) — only the sub-sidebar drops them for parity

**Upgrade:**

```bash
npm install github:Caspian-Explorer/script-caspian-store#v4.1.1
```

Full changelog: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v4.1.1
Repo: https://github.com/Caspian-Explorer/script-caspian-store
