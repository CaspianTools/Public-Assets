---
product: Caspian Office
title: "v1.188.0 — We audited the fixes too. Four of them had broken something else"
date: 2026-08-18
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.188.0.png)

**Shipped v1.188.0** · 2026-08-18

Yesterday we audited the new formula engine and fixed what the audit found. Then we audited the fixes. Four of them had broken something else.

That is the entire content of this release: the collateral damage from v1.187.0, plus the parts of those fixes that only went half way. Every item was reproduced against the released code and compared side by side with the version before it, so we could tell a genuine repair from a trade.

**Fixes that broke something else**

- **Teaching ranges to inherit their sheet name flattened other formulas.** `=SUM(Data!A1:OFFSET(Data!A1,2,0))` became `#NAME?` — and saving wrote that over the value already in your file. Exactly the destruction the original fix existed to prevent.
- **`=SUMPRODUCT(A:A,B:B)` froze the grid.** A correctness change left it reading all 1,048,576 rows of every column you named: a third of a second per formula, several seconds with a few of them on a sheet. It now reads only the rows you have used — a few hundred times faster, same answer.
- **Big-number rounding started going the wrong way.** The change that made `=FLOOR(19.99,0.01)` correct made `=FLOOR(2876328478492.41,0.02)` come back *higher* than the number it was given. Both are right now. Measured across 14,000 samples: the version before yesterday never overshot but got only 3 of 8 everyday money cases right; yesterday's got all 8 and overshot 1,643 times; today gets all 8 and overshoots 7, at magnitudes where two-decimal money can't be represented exactly by any program.
- **Year fractions.** Repairing `=YEARFRAC` for whole years broke it for periods inside a leap year.

**Fixes that stopped half way**

- `=COUNT(A1:A3,"n/a",B1:B3)` returned 3 instead of 6 — it gave up at the first thing that wasn't a number. A plausible wrong total, which is worse than an obvious one.
- `=COUNTIF(A1:A4,">=1/1/2024")` and `=SUMIF(…,">10%")` returned 0, because the condition was being compared as text against numbers.
- `=MAX` over more than ~125,000 cells returned an empty cell — it hit an internal limit and gave up silently.
- `=TEXT(0,"#,###")` printed "0" where Excel prints nothing, and a format section made only of text (like Excel's built-in Accounting style for zero) printed the number instead of the text.
- Also: `=COUNTBLANK` over whole columns returned an error, `XLOOKUP`'s nearest-match modes on unsorted lists, and `=SEARCH` ignoring a `~` escape.

**On the process**

Two rounds of auditing found real defects in code that passed its own tests both times. The lesson we're taking is not "write more tests" but something narrower: a fix needs a test for the thing it broke as much as for the thing it fixed. Every repair in this release is now pinned from both sides, so the next one can't quietly trade one for the other.

**341 automated checks**, up from 314 yesterday and 253 the day before.

🔗 Live: https://caspianoffice.io/tool/excel-editor/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 01e19e43
