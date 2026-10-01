---
product: Caspian Store
title: "Caspian Register — a Windows installer for the till"
date: 2026-08-23
type: notice
social: false
draft: false
---

The register can now be handed to a shop as a file. `desktop/` is a small Tauri shell — a native window pointing at the shop's own `/pos` page, using the WebView2 runtime already on Windows rather than shipping a browser, so the installer is about **1.5 MB**.

🖥️ **One binary for every shop.** The store address is asked once on first run, not compiled in — SmartScreen reputation accrues per signed binary, so per-customer builds would leave every customer staring at "Windows protected your PC" forever.

🔒 **https only.** Firebase Auth won't sign a cashier in over plain http, so an http till would look correct and then refuse every login. The shell rejects it up front instead.

📦 **Not in the npm package.** It builds and releases on its own `desktop/v*` tag, the same way `create-caspian-store` does.

Two limits, said plainly rather than left to be discovered:

- **The installer is unsigned**, so Windows warns on first run until a certificate is bought. That's procurement, not code.
- **v0.1.0 does not print straight to a thermal printer.** Receipts go through the same dialogue as the browser. Direct ESC/POS printing is the main reason to want the shell and is next.

Download: [desktop/v0.1.0](https://github.com/CaspianTools/script-caspian-store/releases/tag/desktop%2Fv0.1.0) · Prefer a browser install? The register has installed as its own PWA since 10.3.0.

https://github.com/CaspianTools/script-caspian-store
