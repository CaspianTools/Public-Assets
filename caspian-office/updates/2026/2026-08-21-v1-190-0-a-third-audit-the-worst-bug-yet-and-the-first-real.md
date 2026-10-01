---
product: Caspian Office
title: "v1.190.0 — A third audit, the worst bug yet, and the first real tests for the editor"
date: 2026-08-21
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.190.0.png)

**Shipped v1.190.0** · 2026-08-21

We audited the formula engine a third time — this pass aimed at v1.189.0, the release that fixed the first two audits. It found 39 things, including the worst bug of the whole series and several the previous release had introduced itself. All of them are fixed here.

**The worst one**

If **Report** held `=SUM(Data!A1:A3)` and you inserted a row **on Report**, the formula quietly became `=SUM(Data!A1:A4)` — absorbing a row that was never part of it. A total going from 60 to 1,059 with nothing on screen to say why.

A range names its sheet once, on the left of the colon (`Data!A1:A3`), and the other end was being judged as though it lived on the sheet you were editing. The same mistake meant that editing the sheet a range actually *points at* moved only one end of it — and on a row delete, moved neither.

**Undo could destroy data**

Undoing a sheet deletion stored a sheet's *position* rather than its identity, so once the deletion shifted everything along, undo wrote one sheet's formulas into another sheet's cells — replacing a plain number with a formula, permanently. Deleting a sheet also destroyed the stored result of any formula the editor can't recalculate. Undo now restores values as well as text.

**Things v1.189.0 broke**

`=IFS(test, value)` returned an error. So did `=VDB` with all seven arguments. Both would have overwritten a value Excel had already calculated, the moment you opened the file. `=SUBTOTAL` stopped counting at the first error cell. `=XLOOKUP`'s reverse search returned the wrong row. `=VLOOKUP` over a whole column froze the tab for a tenth of a second per formula when it found no match. Times past 24 hours (`"25:00"`) stopped being readable — which is how timesheet totals are entered, and the entire reason the `[h]` format exists.

**Negative numbers showing as "@"**

Excel writes formats like `#,##0.00;@` for its own built-in Number style. The trailing `@` marks the section used for *text*, and it was being read as the section for negatives — so a column looked correct until the first negative value, which rendered as the bare character `@`. Date formats had the same problem. Conditional formats (`[>=1000]`) were read and then ignored, so a "show thousands as K" format rendered 500 as "1K".

**Dates that don't exist**

A negative date — trivially produced by subtracting two dates the wrong way round — was flowing into WEEKDAY, EOMONTH, NETWORKDAYS and the rest and inventing 19th-century answers. Every date function now refuses it. `2026/08/18` with slashes now parses, which matters because every imported CSV goes through the same reader.

**And what your file was losing without telling you**

Conditional formatting, data validation, filters, hyperlinks, sheet protection and print settings all live *inside* a worksheet rather than in a separate part of the file, so the "this won't be saved" notice never mentioned them — they simply disappeared. Now they're listed.

**The lesson, which is the useful part**

The audit's sharpest observation wasn't a bug. It was that **no tests existed for the editor at all** — every suite tested the calculation engine in isolation. That is exactly why three rounds kept finding their worst defects in the same place: the editor's undo machinery, which no test could reach.

There are now **23 end-to-end checks** that type into the grid, use the menus, press Ctrl+Z and read what the cells actually say. Total across three suites: **475**, up from 410.

🔗 Live: https://caspianoffice.io/tool/excel-editor/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: f3f38148
