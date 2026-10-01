---
product: Caspian Store
title: "script-caspian-store 2.7 — Coming Soon mode, currency formatting, structured store address"
date: 2026-04-23
type: release
social: false
draft: false
---

**v2.7.0 is out** — first release of the WooCommerce-parity roadmap.

Five merchant-facing additions, all admin-editable at `/admin/settings`, all off-by-default so upgrading is a no-op:

- 🚧 **Coming Soon mode** — branded splash for non-admin visitors while you're setting up. Share a preview with `?caspian-preview=1`.
- 💱 **Currency display formatting** — override symbol position, separators, and decimals. Falls back to `Intl.NumberFormat` when unset.
- 📍 **Structured store address** — 6 fields, searchable country picker, subdivision tables for US / CA / GB / AU.
- ⭐ **Reviews policy** — restrict to verified buyers, require a star rating, toggle the verified-purchase badge.
- 🛒 **Cart behavior** — optional redirect to `/cart` after add-to-cart.

Plus the plumbing every downstream feature will reuse: `<FieldHelp>` tooltip, `<FieldDescription>` sub-text, `<SearchableSelect>` dropdown, and an onboarding progress ring in the admin header that fades out at 100% setup.

Upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.7.0
```

No migrations, no rules changes, no Cloud Function redeploy. https://github.com/Caspian-Explorer/script-caspian-store
