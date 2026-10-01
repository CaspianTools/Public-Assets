---
product: Caspian Store
title: "script-caspian-store v8.4 — Brands admin page + brand-id dropdown on Product CRUD"
date: 2026-04-27
type: release
social: false
draft: false
---

**v8.4.0** adds a proper Brands surface to the admin panel — no more "Acme" vs "ACME" duplicates piling up because Brand was a free-text input.

- 🆕 **Catalog → Brands** sub-menu — full CRUD on the `productBrands` collection (list, create, edit, delete)
- 🔽 **Product editor + list filter** — Brand becomes a dropdown sourced from the brands collection, matching how Category already works
- 🩹 **One-click migration** — admins clicking *Migrate now* on the Brands page sweeps every legacy free-text brand into proper records, idempotently. No CLI script, no service-account key, no `--dry-run` flag
- 📜 **Order receipts capture the brand name at purchase time** — historical orders survive future brand renames or deletions

Upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v8.4.0
```

Drop-in — no consumer code changes. The `caspian-stripe` Cloud Function bumped to `0.1.3`; redeploy if you want post-migration Stripe orders to store brand names instead of ids on `OrderItem.brand` (the read-side fallback handles either form regardless).

Release notes: https://github.com/Caspian-Explorer/script-caspian-store/releases/tag/v8.4.0
Repo: https://github.com/Caspian-Explorer/script-caspian-store
