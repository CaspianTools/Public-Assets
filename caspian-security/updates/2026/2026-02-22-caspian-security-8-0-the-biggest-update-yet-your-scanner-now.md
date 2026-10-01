---
product: Caspian Security
title: "Caspian Security 8.0 — the biggest update yet: your scanner now learns and gets smarter"
date: 2026-02-22
type: release
social: false
draft: false
---

Caspian Security 8.0 just dropped — this is the biggest update we've shipped. The extension now learns from every scan, fix, and false positive you make, and gets smarter over time.

Here's everything new today:

## Learning Intelligence System (v8.0.0)

- **Adaptive Confidence** — confidence scores now update based on your actual usage. Rules with high false positive rates automatically get downgraded; rules you act on get boosted
- **Fix Pattern Memory** — successful AI fixes are remembered and replayed instantly for similar issues, no API call needed. Up to 500 patterns cached
- **Codebase Profile** — learns which sanitizer functions neutralize which rules (e.g. DOMPurify.sanitize suppresses XSS findings). Tracks hot zones, security posture trends, and detects regressions
- **Scan Insights** — actionable intelligence after every scan: trend analysis, noisy rule detection, regression alerts, and category completion celebrations
- **Learning Dashboard** — new webview panel with rule effectiveness tables, fix pattern library, hot zones, and trend visualization
- **Opt-in Telemetry** — anonymized rule stats to help us improve the extension. Off by default, preview exactly what's shared before enabling

## Security Task Management (v7.3.0)

- 23 recurring security tasks across all 14 categories with configurable intervals
- Auto-completes tasks when you run scans or dependency checks
- Activity bar sidebar with tasks grouped by status (Overdue, Pending, Completed, Snoozed)
- Snooze options and per-task interval overrides

## New Commands

- Show Learning Dashboard
- Reset All Learning Data
- Export Learning Data
- Preview Telemetry Data
- Show Security Tasks

4 new commands, 7 new source files, 2,300+ lines of new code.

Install it now:
https://marketplace.visualstudio.com/items?itemName=CaspianTools.caspian-security
