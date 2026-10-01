---
product: Caspian Office
title: "v1.112.0 — 4 new tools + a big correctness & consistency pass"
date: 2026-07-01
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.112.0.png)

**Shipped v1.112.0** · 2026-07-01

Four new tools, plus a big correctness & consistency pass across the existing set — all verified with a full browser scan, adversarial code review, and functional interaction tests.

**🆕 New tools** (all 100% offline)
- **Stopwatch** — count-up timer with laps & splits, keyboard shortcuts, resumes after a refresh
- **Roman numeral converter** — both ways, 1–3999
- **Cron expression generator** — plain-English description + the next run times
- **Cooking measurement converter** — cups/spoons/ml/grams with ingredient densities

**🛠 Fixed**
- JSON formatter warns when very large integers would lose precision
- Date calculator respects a negative amount; savings-goal finish dates no longer drift a month
- EXIF strip keeps photos upright; image converter rasterises SVGs; BMI range, JWT "not-before", discount loss and the statistics box-plot all corrected

**⚡ Improved**
- Text comparer & CSV/JSON converter no longer freeze on very large pastes; long text-to-speech no longer cuts off after ~15s
- Ten tools moved to the standard `caspian_` storage keys with a seamless one-time migration (nothing lost)

🔗 Live: https://caspianoffice.io
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: c783f15
