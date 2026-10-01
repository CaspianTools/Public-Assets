---
product: Caspian Store
title: "script-caspian-store v7.3.0 — Version realignment (plugins sidebar fix surfaces above v7.2.0)"
date: 2026-04-24
type: release
social: false
draft: false
---

Quick version realignment. v7.1.1 shipped a fix so clicking the `Plugins` sidebar header navigates to `/admin/plugins` (not just toggles the submenu). v7.2.0's Self-healing LayoutShell release then followed and pushed v7.1.1 off the top of the release list, making the sidebar fix less visible even though it was still in the code.

v7.3.0 is a pure version bump — no source changes vs v7.2.0 — so the plugins-sidebar fix sits at the visible top of the releases page again. Consumers on v7.2.0 upgrading to v7.3.0 see no behavior change; consumers on v7.1.x upgrading to v7.3.0 get both the LayoutShell self-heal and the sidebar navigation fix.

```bash
npm install github:Caspian-Explorer/script-caspian-store#v7.3.0
```

Details in the [release notes](https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v7.3.0).
