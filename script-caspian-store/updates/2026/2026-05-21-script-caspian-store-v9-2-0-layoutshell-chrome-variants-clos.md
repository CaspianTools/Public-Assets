---
product: Caspian Store
title: "script-caspian-store v9.2.0 — LayoutShell chrome variants close the v9 surface set"
date: 2026-05-21
type: release
social: false
draft: false
---

The v9 per-template component dispatcher gains its **fifth and final** wired slot. `<LayoutShell>`'s chrome (header + content + footer composition) is now template-dispatched — completing the v9 surface set: Hero, HomePage, ProductCard, ProductDetailPage, and **LayoutShell**.

- 👕 **fashion-minimal** → `<LayoutShellChromeDefault>` — byte-equivalent v8.x composition
- 🎧 **electronics-tech** → `<LayoutShellChromeTech>` — monospace announcement bar above header + spec strip above footer
- 🏡 **home-goods** → `<LayoutShellChromeEditorial>` — editorial sign-off section with serif italic pull-quote between content and footer

Chrome variants only choose how the standard `<SiteHeader>` and `<SiteFooter>` are *composed* — they don't replace them. Bypass routing, coming-soon gating, double-mount sentinel, and locale-prefix stripping all stay in the dispatcher.

```bash
npm install github:CaspianTools/script-caspian-store#v9.2.0
```

Existing storefronts render identically until an admin (re-)applies a v9.2.0 template that registers `components.LayoutShell`. The three bundled templates now do.

Repo: <https://github.com/CaspianTools/script-caspian-store>
