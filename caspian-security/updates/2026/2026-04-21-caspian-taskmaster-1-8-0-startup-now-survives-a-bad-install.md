---
product: Caspian Security
title: "Caspian Taskmaster 1.8.0 — Startup now survives a bad install"
date: 2026-04-21
type: release
social: false
draft: false
---

A defensive release. Two startup-path fixes so a missing or partial install directory can't cascade into activation failure.

🛡️ What's hardened:
- Activate-time `package.json` read guarded with try/catch — missing file logs and moves on instead of aborting the extension
- `cleanupOldVersions` now uses a strict regex and cross-checks the version against the running `package.json` before removing anything. Unrelated siblings with similar prefixes are safe. Current-install protection no longer depends solely on basename matching.
- Cleanup decisions now log through the Caspian output channel — visible via `Show Sync Log`.

🧪 8 new unit tests covering the new pure helper. Total test count: 16 → 24.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
