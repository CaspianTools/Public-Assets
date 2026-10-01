---
product: Caspian Store
title: "script-caspian-store 10.3 — the register installs as its own app"
date: 2026-08-23
type: release
social: false
draft: false
---

A till can now install the register: its own icon, its own window, no address bar. Same web page underneath — nothing to download, nothing to update by hand — but it starts like a program, and a cashier can't type a URL into it by accident.

📲 **Two separate apps on one origin** — the storefront installs at `/`, the register at `/pos`. A counter machine gets an icon that opens straight into the register, not into the shop with the register two taps away.

🧰 **Scaffolded sites get the whole layer generated** — both manifests, a generated icon route, the `/pos` route segment, two service workers, two offline pages, plus the redirects and cache headers. Verified by building a scaffolded site end to end.

🐛 **Building it for real found four bugs, all fixed** — `/az/pos/settings` rendered the register instead of Settings, so no cashier on a non-English till could reach their own settings; the storefront's install banner floated over the cash keypad; INSTALL.md's manifest route has been uncompilable since v9.10.0 (hence the new `./pwa` entry); and brand colours vanished from the manifest because dotenv reads an unquoted `#` as a comment.

Installing does **not** make the register work offline — it still needs the network to complete a sale. The manual says so up front. The offline queue is separate work, in progress.

```bash
npm install github:CaspianTools/script-caspian-store#v10.3.0
```

https://github.com/CaspianTools/script-caspian-store
