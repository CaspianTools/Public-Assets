---
product: Caspian Store
title: "Caspian Store 11.0.1 - the register app now refuses a wrong shop address"
date: 2026-08-23
type: release
social: false
draft: false
---

The Windows register app used to take any address you typed. Point it at your company's homepage instead of your shop and you got a blank 404 — with nothing on screen saying which address it had tried, and no way to change it short of deleting a file from `%APPDATA%`. That is fixed.

- 🛑 **Wrong addresses are refused before they're saved.** The setup screen checks that a register actually answers, and says so if it doesn't — while you're still looking at the box.
- 🧭 **A `Till` menu that always works.** *Change shop address* (`Ctrl+Shift+A`) and *Reload*, native to the window, so they still work when the page below them is a 404.
- 🏷️ **The title bar names the address** — `Caspian Register — shop.example.com`. No more guessing what a broken page was pointing at.
- 🔒 **A validation hole closed:** `http://localhost.evil.com` used to count as "local" and skip the https requirement.

Deliberately, only a definitive 404 refuses. An unreachable site still saves — tills get set up before shops go live, and refusing then would strand someone who typed the right address. The manual says so plainly rather than implying the check is a guarantee.

**Upgrade the library** (documentation only this time — the manual, in all four languages):

```bash
npm install github:CaspianTools/script-caspian-store#v11.0.1
```

**Update a till** — the register app versions separately, so download and run the new installer:
https://github.com/CaspianTools/script-caspian-store/releases/download/desktop/v0.2.0/Caspian.Register_0.2.0_x64-setup.exe

https://github.com/CaspianTools/script-caspian-store
