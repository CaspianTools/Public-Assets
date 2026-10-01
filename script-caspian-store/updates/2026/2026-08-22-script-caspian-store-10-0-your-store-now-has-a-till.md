---
product: Caspian Store
title: "script-caspian-store 10.0 - your store now has a till"
date: 2026-08-22
type: release
social: false
draft: false
---

**v10.0.0 puts a real point of sale inside the library.** It runs in the same app at `/pos` — nothing extra to install, no desktop app, no second login.

🔍 **Scan and sell.** Any USB or Bluetooth barcode scanner works with zero setup — no driver, no pairing, no permission prompt. Camera scanning and manual entry are there for when the label won't cooperate.

💵 **Cash, card, or both.** Change is calculated for you, the receipt prints on an 80 mm roll through your normal printer, and stock comes down automatically. Every sale is priced on the server, so a tampered browser can't ring up a discount.

🔑 **A real `staff` role.** Cashiers reach the till and the catalog and nothing else. Set it from Users in two clicks.

🌍 **Pick your language — and it sticks.** The register ships in English, Azerbaijani, Russian and Turkish, chosen per computer. One shop can run an English till at the counter and another in a different language, without touching the website.

🏪 **Storefront optional.** Flip on register-only mode and the online shop switches off entirely. Flip it back whenever you want.

```bash
npm install github:CaspianTools/script-caspian-store#v10.0.0
```

This release needs a rules redeploy and one new Cloud Functions codebase — the [changelog](https://github.com/CaspianTools/script-caspian-store/blob/main/CHANGELOG.md) has the exact commands.

https://github.com/CaspianTools/script-caspian-store
