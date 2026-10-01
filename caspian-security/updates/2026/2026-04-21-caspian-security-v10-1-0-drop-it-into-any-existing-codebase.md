---
product: Caspian Security
title: "Caspian Security v10.1.0 — drop it into any existing codebase without a big-bang fix"
date: 2026-04-21
type: release
social: false
draft: false
---

The #1 barrier to adopting any security scanner is "we already have 800 findings." v10.1 adds the standard answer: a baseline file that records current findings, then fails the build only on NEW ones.

- 📋 `caspian-scan --baseline .caspian-baseline.json --update-baseline` — snapshot current findings.
- 🔒 `caspian-scan --baseline .caspian-baseline.json --fail-on error` — only new findings gate CI.
- 🧹 Auto-tightens: fix one of three, next `--update-baseline` drops the count; adding a new one fails.
- 🌍 Path-normalised — baselines survive Windows ↔ Linux CI.
- 🧪 12 new unit tests covering every edge case.
- 📦 Also threaded through the reusable GitHub Action as a `baseline` input.

Counts-based, not fingerprinted — readable in diffs, stable across edits.

https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
