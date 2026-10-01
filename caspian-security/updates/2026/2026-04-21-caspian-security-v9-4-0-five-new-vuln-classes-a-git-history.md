---
product: Caspian Security
title: "Caspian Security v9.4.0 — five new vuln classes + a git-history secret scanner"
date: 2026-04-21
type: release
social: false
draft: false
---

v9.4.0 ships the roadmap's Phase 2: detections for the vulnerability classes that actually keep security engineers up at night, plus a scanner that walks your git history.

- 🎯 **48 new rules** covering SSRF, XXE, SSTI (template injection), insecure deserialization (pickle, Java, .NET, PHP, Ruby), and JWT algorithm confusion / `alg: none`.
- 🕰️ **Git-history secret scanner** — `npm run scan-git-history` walks every commit reachable from `--all` and flags every historical leak with commit SHA, author, date, file, line. Shows you which secrets need rotating RIGHT NOW even if the commit was "fixed" later.
- 🌐 Coverage across 6 language families per rule family: JS/TS, Python, Java, .NET, PHP, Ruby, Go where applicable.
- 🛡️ Every new pattern build-time proven ReDoS-safe (812 tests, up from 691).

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
