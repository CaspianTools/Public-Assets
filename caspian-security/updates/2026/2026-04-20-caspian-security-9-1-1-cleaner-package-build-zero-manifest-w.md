---
product: Caspian Security
title: "Caspian Security 9.1.1 — Cleaner package build, zero manifest warnings"
date: 2026-04-20
type: release
social: false
draft: false
---

Small but satisfying: Caspian Security 9.1.1 silences the last two `vsce package` warnings.

- Declares `ignoreAllByRule` and `explainRule` in the extension manifest (the runtime handlers were already there — only the declarations were missing)
- Results-panel Ignore-all and Explain buttons behave exactly as before, just with a clean package build
- No user-facing changes, no settings changes

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
