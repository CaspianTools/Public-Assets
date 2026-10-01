---
product: Caspian Office
title: "v1.186.0 — Formulas in the Excel editor now actually calculate"
date: 2026-08-18
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.186.0.png)

**Shipped v1.186.0** · 2026-08-18

The Excel editor has had a real grid since v1.146.0 — styles, merges, freeze panes, multiple sheets, undo/redo, a genuine `.xlsx` reader and writer. What it never had was the thing a spreadsheet is actually for: you could type `=SUM(A1:A2)` and the cell would just sit there, empty. That is fixed. Formulas now calculate as you type, and everything that depends on the cell you changed updates with it.

It runs on **co-formula**, a second first-party engine written for this release — no third-party formula code, no network, works offline and from the downloaded single file.

- **New — type a formula, get an answer.** Live evaluation with a proper dependency graph, so changing one cell instantly updates every formula downstream of it, across sheets included.
- **New — 200 functions.** SUM, AVERAGE, COUNT, IF, IFERROR, VLOOKUP, XLOOKUP, INDEX/MATCH, SUMIFS, COUNTIFS, TEXT, CONCAT, the date and time family, and the full statistical and financial sets. Real Excel behaviour down to the awkward parts: `=-2^2` is 4, `=IF(TRUE,1,1/0)` is 1, and a blank cell equals both `""` and `0`.
- **New — real error values and circular-reference detection.** `#DIV/0!`, `#VALUE!`, `#REF!`, `#NAME?`, `#NUM!`, `#N/A` and `#NULL!` behave and propagate as they do in Excel. A formula that refers back to its own cell is caught, named in the status bar, and never hangs the page.
- **New — it never invents a number.** If a formula uses one of the few functions the engine doesn't implement yet, the editor leaves the value that came out of your file exactly as it was and says so, then asks Excel to work it out when the file is opened there. A missing answer is an inconvenience; a wrong one saved to your disk is not.
- **Improved — a typo is caught as you type.** `=SUM(` used to be stored as-is and quietly broke the file. It's now refused, with an explanation, and you land back in the cell.
- **Fixed — copying a whole-column formula moved the wrong thing.** `=SUM(A:A)` copied one column right stayed pointing at column A. It now becomes `=SUM(B:B)`. The new rewriter reads the formula properly instead of pattern-matching it, so it can no longer mistake text inside quotes or a function name for a cell reference.
- **Improved — built to stay fast.** Big recalculations are spread across frames so the grid never freezes, `=SUM(A:A)` only walks the rows you've actually used rather than all 1,048,576, and a ten-thousand-deep chain of formulas calculates without trouble.

Backed by **253 automated tests**, including an `.xlsx` round trip that proves calculated values survive a real save-and-reopen — and that a value already in your file is never overwritten with a guess.

Still on the list for the Excel editor: right-click menus, the fill handle, a borders UI, sort and filter, find and replace, and rewriting formula references when you insert or delete rows.

🔗 Live: https://caspianoffice.io/tool/excel-editor/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 1d59c417
