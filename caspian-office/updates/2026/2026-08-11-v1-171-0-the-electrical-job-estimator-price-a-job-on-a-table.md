---
product: Caspian Office
title: "v1.171.0 — The Electrical Job Estimator: price a job on a tablet, at the site visit"
date: 2026-08-11
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.171.0.png)

**Shipped v1.171.0** · 2026-08-11

**[Electrical Job Estimator](https://caspianoffice.io/tool/electrical-estimator/)** — a split-screen, tablet-first pricing sheet for a site visit.

- **New — quantity takeoff and a live receipt.** Cable runs, sockets, switches, fixtures, distribution panels and junction boxes on the left, each with your own material cost and labour hours; an itemised breakdown on the right that updates as you type — materials, markup, labour, routing uplift, risk uplift, margin and tax.
- **New — the routing environment drives the labour.** Exposed work is the baseline; surface trunking, suspended ceiling, drywall, concrete chasing and buried runs each carry a labour multiplier **printed on the option itself**, and you can override it when your experience differs.
- **New — HSE risk surcharges you cannot miss.** High-contrast switches for confined space entry, live working, work at height, out-of-hours and permit-to-work. Switching one on turns it red and raises a banner naming the risks, the combined percentage, and the extra hours and money. Surcharges **add** rather than compound — 35% and 25% is 60%, not 68.75%, because that is how a rate card is read.
- **New — proposal document.** One tap produces a PDF with the itemised takeoff, the adjustments, your margin and tax, and a validity date.

**On what it is, and isn't.** Every rate and multiplier is a starting default you edit — the tool has no price list, no supplier feed and no knowledge of your market, so it multiplies exactly what you give it. That makes the output an **estimate with a validity date, not a binding quote**, and it says so on screen and on the proposal itself. Equally there is no backend and no accounts, so nothing is access-controlled — what it *is* is genuinely private: every figure stays in `localStorage` on that tablet, and it runs from the offline Electrical pack with no signal at all.

One small thing worth calling out: switching between metres and feet deliberately does **not** rescale your cable rate. A silently converted price is exactly how a quote goes wrong, so the tool changes the label and tells you to check the row instead.

- **Fix — transformer fault current now uses the right standard's tolerance.** The worst-case row applied the IEEE C57.12.00 ±7.5% impedance tolerance to everybody; IEC 60076-1 allows ±10% below 10% impedance, so IEC users were seeing a worst case about 2.8% low — on a number that decides interrupting ratings. It now follows the selected size family and names the standard it invoked. The ANSI single-phase kVA list also stopped at 2500, making a real 3333 kVA rating report as "above the largest listed"; it now runs to the same 10 MVA ceiling as the three-phase list.

Both of those defects came out of an independent standards-and-arithmetic review of the specification, run before any code was written. That review is now part of how these tools get built.

🔗 Live: https://caspianoffice.io/tool/electrical-estimator/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 214ea9d
