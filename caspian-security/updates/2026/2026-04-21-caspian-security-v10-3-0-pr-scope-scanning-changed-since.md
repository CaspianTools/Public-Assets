---
product: Caspian Security
title: "Caspian Security v10.3.0 — PR-scope scanning (--changed-since)"
date: 2026-04-21
type: release
social: false
draft: false
---

Your monorepo CI just stopped scanning 10,000 files on every PR.

- ⚡ `--changed-since origin/main` restricts scans to the files this branch adds on top of main
- 🎯 Three-dot diff semantics (`<ref>...HEAD`) — tracks the merge-base, matches PR-review conventions
- 🤝 Pairs with v10.1 baselines: baseline handles the legacy backlog, `--changed-since` handles review velocity
- 📦 GitHub Action input threads through: `changed-since: ${{ github.event.pull_request.base.sha }}`

From minutes to seconds on typical PRs. Rules unchanged at 295+; test suite 973 → 977.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
https://www.npmjs.com/package/caspian-security
