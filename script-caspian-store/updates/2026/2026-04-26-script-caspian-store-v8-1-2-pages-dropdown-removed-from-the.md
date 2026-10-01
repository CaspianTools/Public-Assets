---
product: Caspian Store
title: "script-caspian-store v8.1.2 — Pages dropdown removed from the storefront header"
date: 2026-04-26
type: release
social: false
draft: false
---

v8.1.2 cleans up the storefront `<SiteHeader>` by removing the hardcoded "Pages ▾" dropdown that was wedged next to Shop and Collections. The library no longer prescribes a fixed list of extra content pages — consumer sites add their own links via the `nav` prop instead.

- 🧹 Dropdown trigger, flyout, and the `DEFAULT_MORE` default list all gone
- 🧊 `moreNav` prop kept as a `@deprecated` no-op so existing consumers still typecheck
- 🌐 `navigation.pages` i18n key removed (no orphan references)

**Upgrade:** `npm install github:Caspian-Explorer/script-caspian-store#v8.1.2`

Repo: https://github.com/Caspian-Explorer/script-caspian-store
