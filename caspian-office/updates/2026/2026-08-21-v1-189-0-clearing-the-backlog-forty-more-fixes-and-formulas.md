---
product: Caspian Office
title: "v1.189.0 — Clearing the backlog: forty more fixes, and formulas that follow your edits"
date: 2026-08-21
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.189.0.png)

**Shipped v1.189.0** · 2026-08-18

Two rounds of auditing the formula engine turned up about forty findings that were real but judged lower-impact at the time, so they were written down and left. This release closes all of them — plus the one capability that was deliberately deferred when formulas first shipped.

**Formulas now follow you when the sheet changes**

Insert or delete rows and columns and every formula's references move with them: a range that spans the insertion point grows, one that's partly deleted shrinks, and only a reference whose target is genuinely gone becomes `#REF!`. Undo restores the original formulas exactly.

And **renaming a sheet no longer breaks every formula pointing at it**. Until now, renaming *Data* silently turned `=SUM(Data!A1:A3)` into `#REF!` — and saved that into your file.

**A regression we shipped, and missed**

A fix in v1.187.0 stripped everything in square brackets from a date format. That correctly removed colour hints like `[Red]`, but it also removed `[h]` — the marker for durations over 24 hours — and the `mm` after it then read as a *month*. So 1.5 days formatted as `[h]:mm` displayed `:12`. It now reads `36:00`.

**The number-format engine has been rebuilt**

It was one regular expression that had been patched five times. It's now a proper parser for Excel's format codes, which fixes an entire class at once: `#,##0,,"M"`, `0.00E+00`, `0.0 %`, `# ?/?` fractions, and the `_` and `*` padding that **Excel's own Accounting format is built from** — so accounting columns in a workbook you open now render correctly instead of showing a stray underscore. Checked byte-for-byte against 140 everyday formats first: zero difference, so nothing that already worked has changed.

**The rest**

- `=COUNTIFS`/`=SUMIFS` accepted a 3-row range against a 3-column one and answered anyway · an error inside a summed range vanished from the total while plain `=SUM` reported it
- `=SUBTOTAL` ignored hidden rows *and* double-counted nested subtotals — the two things it exists for
- `=SLOPE`/`=CORREL`/`=INTERCEPT` collected each column separately, so one gap paired the wrong numbers together
- `=DATEVALUE("2026-02-30")` silently returned 2 March · negative serials invented 19th-century dates · `=YEARFRAC` got a whole leap year wrong
- `=LOOKUP`'s two-column form returned what you searched for · `=XLOOKUP` could read outside the range you named · `=INDEX` now returns a reference, so `=SUM(A1:INDEX(A1:A10,3))` works · the union operator and multi-area named ranges work
- `=TRIM` ate non-breaking spaces (breaking the standard web-paste cleanup) · `=VALUE("$1,000")` failed · `=DOLLAR` didn't parenthesise negatives · `=EXP(1000)` put the word "Infinity" in a cell · `=VDB` never switched to straight-line, so an asset never fully depreciated
- **Every function now checks its arguments.** `=UPPER()` used to return the literal text "UNDEFINED". Argument counts are derived from each function's own signature, so all 206 got this in one change.

**410 automated checks**, up from 341. One older check was rewritten too: it asserted an output didn't contain "Infinity", which the buggy value happened to satisfy — so it passed while the bug was live. A test that can't fail isn't a test.

🔗 Live: https://caspianoffice.io/tool/excel-editor/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 4d849bee
