---
product: Caspian Store
title: "script-caspian-store v9.0.0-alpha.1 — Template component override foundation (pre-release)"
date: 2026-05-19
type: release
social: false
draft: false
---

**Pre-release.** First alpha of the v9.0.0 theme rearchitecture. Ships the infrastructure that makes per-template React components possible; no storefront primitive is wrapped yet, runtime behaviour is identical to v8.23.2. Phase 2 (`alpha.2`) wraps `<Hero>` and ships three hero variants — the first phase with visible differences.

- 🏗️ **`<TemplateProvider>` + `useTemplateComponent<TProps>(slotId, fallback)`** — typed registry resolver
- 🎨 **`<ThemeInjector>` injects template CSS** as `<style id="caspian-template-css">` + writes `<html data-caspian-template="<id>">`
- 🔑 **`scriptSettings.activeTemplateId`** — written by `applyTemplate()`, read by the provider
- 🔌 **Slot ids:** `Hero | HomePage | ProductCard | ProductDetailPage | LayoutShell`
- 🛡️ **Back-compat:** existing storefronts render identically. Stable consumers stay on v8.23.2.

```bash
npm install github:CaspianTools/script-caspian-store#v9.0.0-alpha.1
```

Not picked up by `^8.x` pins. Migration guide ships with v9.0.0 stable.

Repo: <https://github.com/CaspianTools/script-caspian-store>
