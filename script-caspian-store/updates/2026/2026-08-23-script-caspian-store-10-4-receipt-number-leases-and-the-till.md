---
product: Caspian Store
title: "script-caspian-store 10.4 — receipt-number leases, and the till stops emailing you"
date: 2026-08-23
type: release
social: false
draft: false
---

Groundwork for offline selling, plus a bug that's been filling shop owners' inboxes.

🧾 **The hard problem with an offline till is the receipt.** The server allocates receipt numbers inside the commit transaction, so a sale captured offline has no number to print while the customer is standing there. A till can now **reserve a block of real numbers in advance** and spend from it — so an offline sale produces an ordinary receipt with a final, store-unique number, not a slip saying NOT A RECEIPT.

📧 **Every counter sale was emailing you a "new order".** The trigger fires on any order create, POS sales are written as `paid`, and while the customer half was gated on having an address to write to, the admin half wasn't. Two hundred Saturday sales, two hundred emails. Fixed.

👯 **Cloned tills can no longer hand two customers the same receipt number.** Imaging a Windows till — routine in multi-till rollouts — copies the device id *and* any stored lease. A claim registry catches the collision and the second sale takes a fresh number.

⚠️ **The commit transaction could exceed Firestore's 500-write ceiling**, failing as an opaque `internal` that a retrying client reads as transient and replays forever. Line cap is now 400.

Nothing user-visible yet — the register doesn't use leases until the offline queue ships. The server half lands first so old clients keep working.

```bash
npm install github:CaspianTools/script-caspian-store#v10.4.0
firebase deploy --only functions:caspian-pos,functions:caspian-email
```

https://github.com/CaspianTools/script-caspian-store
