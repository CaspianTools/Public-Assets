---
product: Caspian Store
title: "script-caspian-store 2.8 — Bank transfer, cheque, and cash-on-delivery payments"
date: 2026-04-23
type: release
social: false
draft: false
---

**v2.8.0 is out** — Stripe is no longer the only way customers can pay.

Three new offline payment plugins, all admin-installable from `/admin/payment-plugins`:

- 🏦 **Direct bank transfer (BACS)** — show your account details at checkout; mark paid in admin once funds clear.
- ✉️ **Cheque payments** — show payee + postal address; mark paid once the cheque clears.
- 💵 **Cash on delivery** — pay the courier; optional shipping-method allowlist.

All three create the order client-side with `status: 'on-hold'` and stamp the gateway on `payment.method`. No Cloud Function required, no rules change required — Caspian's order-create rule has allowed authenticated users to write their own orders since v1.0.

Also: payment-row polish in the admin. Each install gets an editable customer-facing description, and the row's action button flips between **Set up** (when config is invalid) and **Manage** (when it's good to ship), so you can see at a glance which gateways need attention.

Upgrade:

```bash
npm install github:Caspian-Explorer/script-caspian-store#v2.8.0
```

No migrations. https://github.com/Caspian-Explorer/script-caspian-store
