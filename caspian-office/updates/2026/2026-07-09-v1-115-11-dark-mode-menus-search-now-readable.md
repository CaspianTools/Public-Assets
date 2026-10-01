---
product: Caspian Office
title: "v1.115.11 — Dark mode: menus & search now readable"
date: 2026-07-09
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.115.11.png)

**Shipped v1.115.11** · 2026-07-09

A dark-mode legibility fix. In dark mode the **Tools** mega-menu and the header **search** (the field and its results dropdown) were still painting on a hard-coded white panel, so their text turned near-invisible — white on white. They now follow the dark theme, and native controls (scrollbars, date pickers, dropdowns) match it too. The tools themselves stay on their clean light page, as before.

- 🐛 **Fixed** — Dark-mode menus and search are readable again. The mega-menu, search field, results dropdown, ⌘K badge and the open "Tools" button now use the theme's dark panel colour instead of a hard-coded white.
- ✨ **Improved** — Added `color-scheme` so scrollbars, selects and pickers render dark in the shell (and stay light inside a tool).

Verified with headless computed-colour checks across light + dark and visual screenshots.

🔗 Live: https://caspianoffice.io
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: fe664e2
