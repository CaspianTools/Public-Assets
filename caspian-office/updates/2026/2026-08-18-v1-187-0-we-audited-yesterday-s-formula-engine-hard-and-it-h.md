---
product: Caspian Office
title: "v1.187.0 — We audited yesterday's formula engine hard, and it had real bugs"
date: 2026-08-18
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.187.0.png)

**Shipped v1.187.0** · 2026-08-18

Yesterday's release put a live formula engine in the Excel editor, and made a promise about it: that it would never write a number it couldn't justify. After shipping, we ran a hard adversarial audit against the released code — thirteen agents, one auditing each function family and an independent sceptic trying to refute every claim they made. The promise turned out to be broken in several places.

Everything below was reproduced before it was fixed, and every one now has a test.

**Wrong values getting written into your file**

- **Totals across sheets returned `#REF!`.** `=SUM(Data!A1:A3)` — the most ordinary thing in a multi-sheet workbook — failed, and the error was saved back into the file. A range names its sheet once, on the left of the colon, and the engine was only reading it there. Fixed for every form, quoted sheet names included, and edits on the referenced sheet now update the total immediately.
- **A cross-sheet row reference read the wrong sheet entirely.** `=SUM(Data!1:1)` totalled row 1 of whichever sheet you happened to be on. No error, just a confident wrong number.
- **29 real Excel functions destroyed the value already in your file.** AVERAGEA, MAXA, MINA, NORMSDIST and others were neither implemented nor on the known list, so they fell through to `#NAME?` and overwrote the number Excel had last calculated — exactly the data loss the design was meant to prevent. The whole **…A** family is now properly implemented, not aliased to its plain sibling.

**Silently wrong numbers**

- **Money lost a penny.** `=TRUNC(19.99,2)` gave 19.98; `=FLOOR(19.99,0.01)` did the same. `=ROUND` was wrong for every two-decimal value above ten billion, and `=ROUNDUP(1000000000000,0)` returned a *smaller* number than it started with. One shortcut in one helper caused all of it; it now uses the 15-significant-digit rule Excel actually uses.
- **An error could vanish into a total.** `=SUMPRODUCT` scored an error cell as zero and returned a plausible number, while `=SUM` over the same cells correctly showed `#DIV/0!`. Meanwhile `=COUNT` returned 0 for an entire column if any one cell held an error.
- **Conditional totals counted the wrong rows.** `=COUNTIF(A1:A4,">0")` also matched text and TRUE, so a numeric column with a text header or a stray "n/a" inflated every SUMIF and COUNTIF — and a column imported as text never matched a numeric criterion at all.
- **`XLOOKUP`'s "next larger" mode returned the next *smaller* match** — a wrong rate on every tier or bracket table.
- Also: `=COUNTBLANK` always returned 0 · `=INDEX(A1:E1,3)` was `#REF!` · `=RATE` couldn't solve a 0% instalment plan · `=LOG10(1000)` returned 2.9999999999999996 · `dddd` printed the day number instead of "Tuesday", so files using Excel's Long Date rendered as "04, January 04, 2026" · numbers turned into text kept only 10 significant digits instead of 15.

**Why the tests missed all of this**

The v1.186.0 suite had 253 assertions and they all passed — because the fixture they ran against was single-sheet, fully populated, all-numeric and small-magnitude. Not one of those properties holds for a real workbook. The fixture now has a second sheet, ranges reaching past the last filled row, an error cell inside a total, text in a numeric column, and values large enough for rounding to matter. **253 → 314 assertions**, and the grid now shares the engine's number-format renderer so the two can't drift apart again.

🔗 Live: https://caspianoffice.io/tool/excel-editor/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 02a6c8b6
