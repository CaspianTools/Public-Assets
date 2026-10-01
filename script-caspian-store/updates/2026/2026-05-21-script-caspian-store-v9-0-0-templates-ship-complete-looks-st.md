---
product: Caspian Store
title: "script-caspian-store v9.0.0 — Templates ship complete looks (stable)"
date: 2026-05-21
type: release
social: false
draft: false
---

**Stable.** Promotes the v9.0.0-alpha.1 through alpha.4 series. The v8.23 templates feature shipped **content + theme tokens**; v9.0.0 generalises that to **content + theme + complete component overrides**. Applying a template now visibly changes the storefront's React components — not just colors and copy.

### What changes per template

| Surface | What templates can swap |
| --- | --- |
| `<Hero>` | Full layout, copy positioning, entrance motion |
| `<HomePage>` | Section composition + ordering |
| `<ProductCard>` | Card design + hover interactions |
| `<ProductDetailPage>` | Gallery position, info column, content sections |
| `<LayoutShell>` | Slot reserved for a future minor |

Three bundled templates with complete overrides:

- 👕 **fashion-minimal** — v8.x identity preserved (centred hero, standard card, default homepage flow, gallery-left PDP).
- 🎧 **electronics-tech** — dark mode spec-sheet. Ken-burns full-bleed hero, monospace `// SKU` eyebrows, inverted PDP with sticky info column, hover accent lines on cards.
- 🏡 **home-goods** — magazine editorial. 50/50 hero with slide-in animation, italic serif typography, editorial pull-quote on homepage, centred PDP with story column.

### Consumer action

Minimal. Reinstall + redeploy:

```bash
npm install github:CaspianTools/script-caspian-store#v9.0.0
```

The storefront renders identically to v8.23.x until an admin applies a v9 template — the three bundled templates register full overrides, so re-applying any of them in Replace mode produces the new look.

### Subtle change

`<HomePage>`'s `after*` slot props land at the active variant's semantic position, not v8.x's hardcoded order. Consumers relying on visual position should render their own composition.

Migration: <https://github.com/CaspianTools/script-caspian-store/blob/v9.0.0/INSTALL.md#760-v900--per-template-component-overrides>

Repo: <https://github.com/CaspianTools/script-caspian-store>
