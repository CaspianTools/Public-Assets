---
product: Caspian Security
title: "Caspian Security v9.2.0 — the scanner just audited itself"
date: 2026-04-20
type: release
social: false
draft: false
---

Caspian Security v9.2.0 ships 9 fixes from a senior-level self-audit. No exploit in the wild — just defence-in-depth.

- 🔐 AI fixes now ask before sending code, and default to ~20 lines of context instead of your whole file
- 🛡️ Every webview locked down — strict CSP, nonce, allow-listed commands, scoped resource roots
- 🔑 Gemini API key moved out of URL (was logged by proxies)
- 🧹 Cached issue patterns no longer persisted (removes a secret-leak risk)
- 🕒 New ReDoS guard: every regex rule proven to finish in <200ms on adversarial input

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
