---
product: Caspian Office
title: "v1.174.0 — Lighting: Lux & Lumens, the lumen method in three parts, and the two soft numbers that decide the answer"
date: 2026-08-12
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.174.0.png)

**Shipped v1.174.0** · 2026-08-12

Lighting — Lux & Lumens joins the Electrical set, the second of the three remaining wave-2 tools. The lumen method in three parts, in metric or imperial, with the two soft numbers handled honestly rather than filled in for you.

- **New — Lighting — Lux & Lumens.** *How many*: for a room and a target illuminance, the lumens needed from `Φ = E × A / (UF × MF)` and the luminaire count — then what the rounded-up whole number actually delivers, which is rarely the target exactly. *What you have*: for an installation that already exists, the maintained illuminance, the initial illuminance on day one before any depreciation, and the shortfall in lumens. *Where they go*: the height above the working plane, the room index, the widest spacing the spacing-to-height ratio allows, a grid with its wall offsets, and a pass or fail in each direction.
- **New — metric and imperial, on the exact constants.** 1 ft = 0.3048 m exactly, so 1 ft² = 0.09290304 m² and **1 fc = 10.76391041670972 lx** — the stored constant, never the rounded 10.764 and never the folklore "about ten". A unit switch converts lengths, areas and illuminances and **nothing else**: lumens, watts, the two factors, the room index, the spacing ratios and the luminaire counts are unit-invariant, and converting one of them would quietly corrupt what you typed.
- **New — room index computed, not looked up.** `RI = L·W / ((L + W)·Hm)` — twice the floor area over the wall area between the working plane and the luminaires. Computing it means it is right at any room shape, including outside the 0.75 to 5.00 span a table covers, where the tool says so rather than snapping to the nearest column. Alongside it, the installed power density per 100 lux: the figure that compares two schemes fairly, because raw watts per square metre rewards a scheme that simply under-lights the room.
- **New — the maintenance factor, worked out rather than picked.** CIE 97 breaks it into four losses — `MF = LLMF × LSF × LMF × RSMF` — and that breakdown is offered as an expander that writes its product into the maintenance-factor box. Beside the utilisation factor there is a flux-convention selector, because a classic CIBSE table is referenced to **lamp** lumens while a modern LED photometric file is referenced to **luminaire** lumens, and pairing the wrong two is worth twenty to forty per cent on the answer.
- **Improved — it says how firm its own numbers are.** This tool ships from a specification that has **not** been through the independent standards audit its sibling electrical calculators had, and it says so on screen rather than only in a commit message. Every table — illuminance by space type, maintenance factors, spacing-to-height ratios, utilisation factors — fills an **editable field** and is never applied on its own, and each illuminance row carries how well corroborated it is. Zero luminaires is a valid answer rather than an error; a blank dimension stays blank rather than becoming a zero; a factor typed as a percentage is refused with the fraction named rather than silently divided by a hundred; and a design that lands exactly on the spacing limit passes, because the comparison is ≤ and a strict one would fail a textbook-correct layout.

Two details worth recording. The grid search needs a stated tie-break to be deterministic: in a 2:1 room, 6×16 and 8×12 waste nothing and are exactly as square as each other, so fewest-rows breaks it. And the new click-tests caught a defect before it shipped — the room-index band used a strict comparison where its column scan used a tolerance, so a room index that is exactly 5 by hand arrived as 5.000000000000001 through the real subtraction, displayed as "5", and was then declared outside the table with a spurious extrapolation warning.

`verify:logic` is now **104 passing checks, 0 failing**, plus 69 real-browser click-tests across all three tabs, both unit systems and the conversion rules, persistence across reload and Arabic for right-to-left.

**Conduit Fill, the last wave-2 tool, stays blocked** and is marked so in the backlog. A wrong conduit internal area silently passes an overfilled conduit, so it waits for both adversarial reviews rather than shipping on a spec alone.

🔗 Live: https://caspianoffice.io/tool/lighting-calculator/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 40b240b
