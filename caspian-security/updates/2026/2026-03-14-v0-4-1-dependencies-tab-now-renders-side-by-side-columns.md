---
product: Caspian Security
title: "v0.4.1 — Dependencies tab now renders side-by-side columns"
date: 2026-03-14
type: release
social: false
draft: false
---

Caspian Taskmaster v0.4.1 fixes the dependencies layout in the issue modal.

- The "This issue blocks" and "Blocked by" lists now correctly render as two columns, side by side
- Each column has its own search field and scrollable checkbox list
- Root cause: CSP was silently stripping inline grid styles — now uses a nonce'd stylesheet class

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
