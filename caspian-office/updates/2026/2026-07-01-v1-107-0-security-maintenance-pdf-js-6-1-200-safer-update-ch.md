---
product: Caspian Office
title: "v1.107.0 — Security & maintenance: pdf.js 6.1.200 + safer update check"
date: 2026-07-01
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.107.0.png)

**Shipped v1.107.0** · 2026-07-01

A security & maintenance release: the bundled **pdf.js** engine moves up to **6.1.200**, and the in-app update check is hardened to only ever follow secure (https) download links. Housekeeping under the hood — every tool works exactly as before.

- 🛠️ **Improved** — pdf.js updated **6.0.227 → 6.1.200**, picking up upstream fixes. Verified end-to-end (worker wired, parses + renders a page).
- 🛡️ **Fixed** — the "Update now" prompt now rejects any non-https download link, so a spoofed update manifest can't point the Download button elsewhere.
- 🧹 **Housekeeping** — refreshed the dev test toolchain (Playwright) and tightened repo hygiene. No change to how any tool behaves.

🔗 Live: https://caspianoffice.io
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 680e6f3
