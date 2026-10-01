---
product: Caspian Office
title: "v1.169.0 — Electrical calculators: Ohm's law & power, voltage drop, wire size & ampacity, circuit load & breaker sizing, and energy cost"
date: 2026-08-11
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.169.0.png)

**Shipped v1.169.0** · 2026-08-11

Caspian Office now has an **Electrical** category — the first wave of calculators for electricians, engineers and installers. Five tools, all 100% client-side and offline, each with a metric (mm² / IEC 60228 / BS 7671) ⇄ imperial (AWG-kcmil / NEC) toggle.

- **New — [Ohm's Law & Power](https://caspianoffice.io/tool/ohms-law-calculator/).** The V·I·R·P wheel: type any two of voltage, current, resistance and power and the other two appear, with the formula used. Plus DC, single-phase and three-phase AC power (kW, kVA, kVAr, phase angle) and the current a known load will draw.
- **New — [Voltage Drop](https://caspianoffice.io/tool/voltage-drop-calculator/).** Volts lost over a run, the drop as a percentage, the voltage left at the load, and a clear pass or fail against a 3% or 5% limit — with the smallest conductor that would meet it and the power wasted as heat. Resistance is corrected to the conductor's working temperature, because a hot cable drops noticeably more than a cold one.
- **New — [Wire Size & Ampacity](https://caspianoffice.io/tool/wire-size-calculator/).** Convert AWG/kcmil ⇄ mm², then apply the two corrections that get forgotten most — ambient temperature and conductor grouping — or work backwards to the smallest cable that carries your design current.
- **New — [Circuit Load & Breaker Size](https://caspianoffice.io/tool/electrical-load-calculator/).** Build a load schedule with quantities and demand factors and get the connected and demand load, the design current, the current on each line with the phase imbalance, the next standard breaker or fuse rating, and a starting cable size.
- **New — [Energy Cost](https://caspianoffice.io/tool/energy-cost-calculator/).** What an appliance really costs to run: from its rating and hours of use, from two meter readings, or comparing two options to see the yearly saving and the payback time.
- **Improved — an Electrical offline pack.** The five tools ship as their own downloadable collection, and the drilling calculators' menu group is now labelled **Drilling & Well Control** to sit alongside them.

**On the numbers.** These figures inform real work, so none of them are guessed. Every module cites its source in the header — NEC Chapter 9 Table 8, Table 310.16, 310.15(B)(1)/(C)(1), 240.6(A), IEC 60228 and BS 7671 Table 4D2A — and every formula is asserted in `verify:logic` against the published value, not against the implementation. The ampacity base figures are **editable fields**, so you can type the value from the edition you work to and still get the derating arithmetic right. Each tool carries a standing note that results are for planning and that installation work must follow the rules in force where you are.

Waves 2 and 3 will add motors, transformers, power-factor correction, conduit fill and lighting, then the bench set — resistor colour codes, LED series resistors, series/parallel R·C·L and battery sizing.

🔗 Live: https://caspianoffice.io
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 00ed664
