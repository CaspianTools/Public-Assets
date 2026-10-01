---
product: Caspian Security
title: "Caspian Security now auto-verifies resolved findings"
date: 2026-03-28
type: notice
social: false
draft: false
---

Caspian Security 9.1.0 is here — no more clicking Verify manually.

The extension now watches your scan results and dependency files in real time:

- Findings auto-verify when re-scans confirm the issue is gone
- package.json and package-lock.json changes trigger automatic dependency re-checks
- DEP-OUTDATED and DEP-AUDIT findings resolve themselves when you update packages
- Smart line-drift detection prevents false verifications when code shifts

Toggle with `caspianSecurity.autoVerify` (on by default).

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
