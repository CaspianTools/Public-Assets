---
product: Caspian Store
title: "script-caspian-store 11.0 — a till that needs no shop behind it"
date: 2026-08-23
type: release
social: false
draft: false
---

Plenty of shops sell in person and have no website at all. Until now our register assumed one: a Firebase project, an online store, a cloud admin panel. **v11.0 drops that assumption.** Mount the provider with `standalone` and the register runs entirely on one computer — catalogue, staff, sales and receipt numbers on that machine, contacting nothing.

🧾 **A real back office, not just a register.** `/pos/admin` gives you items with spreadsheet import and export, sales and takings, people and roles, receipt wording, and backups. A till you cannot put products into is not a till.

👥 **Three tiers, set up once.** Support → Owner → Cashier, created when the machine is commissioned. Each sees only its own part, and access is cumulative, so an owner can work the counter without signing out.

💾 **Backups are blunt about it.** Nothing is copied off the machine — that is the point of the mode — so the screen shows you how many items, people and sales are on the computer before you press the button.

🔒 **Standalone is always explicit.** A broken Firebase config still fails loudly instead of quietly falling back, because a real shop coming up as an empty local register is a failure that looks exactly like a working till.

Upgrade:

```bash
npm install github:CaspianTools/script-caspian-store#v11.0.0
```

Rules, indexes and Cloud Functions are unchanged. The major bump covers one narrow type change — `useCaspianStore().firebase` is now nullable; `useCaspianFirebase()` is unchanged and still returns non-null.

Still to come: the Windows installer currently points at a shop's website, and packaging a standalone till as an `.exe` that needs no website at all is the next desktop release.

https://github.com/CaspianTools/script-caspian-store
