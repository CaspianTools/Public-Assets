---
product: Caspian Store
title: "script-caspian-store 10.0.1 - a user manual in four languages"
date: 2026-08-22
type: release
social: false
draft: false
---

**v10.0.1 ships a user manual — and five register fixes that writing it uncovered.**

`docs/user-manual.html` is one self-contained file covering every screen a shop owner or cashier touches. It opens straight from disk, needs no build step and no internet, and it is written for the person running the shop rather than the person who installed it.

🌍 **Four languages.** English, Azerbaijani, Russian and Turkish, switchable in the header and remembered per computer. Where the app's own interface is still English, the manual gives the English label in brackets so a cashier can match what is on screen.

🔎 **Sidebar, search, dark mode, print.** Press `/` to search. Print it and hand it to a new member of staff.

🧾 **Every screen was checked against the code.** Each claim was drafted from the source and then handed to a separate pass whose only job was to disprove it. That overturned 44 statements — and five of them were not documentation mistakes at all, but real bugs in the register released a day earlier:

- receipt printing produced a **blank page**
- a **register-only store could not sign in** — a lockout with no way back into the admin panel
- a button showed the raw text `common.confirm`
- the register name was never printed, though the settings screen said it was
- change was rounded on screen but not on the receipt

All five are fixed in this release.

```bash
npm install github:CaspianTools/script-caspian-store#v10.0.1
```

No rules redeploy and no Cloud Functions redeploy — this release changes client code only. If you run a register-only store, upgrade before anyone signs out.

https://github.com/CaspianTools/script-caspian-store
