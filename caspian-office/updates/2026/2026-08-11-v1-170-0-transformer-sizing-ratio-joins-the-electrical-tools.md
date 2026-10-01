---
product: Caspian Office
title: "v1.170.0 — Transformer Sizing & Ratio joins the Electrical tools"
date: 2026-08-11
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.170.0.png)

**Shipped v1.170.0** · 2026-08-11

The second wave of Electrical tools begins with **[Transformer Sizing & Ratio](https://caspianoffice.io/tool/transformer-calculator/)**.

- **New — kVA & full-load current.** Enter a rating and the two voltages for the line current on each side, or work backwards from a measured voltage and current to see the apparent power actually flowing and how loaded the unit is.
- **New — the delta-star caveat most calculators skip.** A winding sees its own *phase* voltage, so on a delta-star pairing the per-phase turns ratio is **√3 away** from the line-voltage ratio — and √3 the other way on star-delta. Both ratios and both winding voltages are shown, and the 30° displacement is named rather than faked, because a scalar ratio cannot express it.
- **New — fault current from the nameplate impedance.** Available short-circuit current at the secondary terminals, the through-fault level, base and ohmic impedance, and the worst case allowed by the ANSI ±7.5% impedance tolerance. Sizing from a kW load rounds up to the next standard kVA in the IEC or ANSI family.

**Three deliberate safety choices.** The nameplate impedance is **never auto-filled** from a "typical" table — a guessed impedance quietly becomes a wrong fault current, and fault current decides interrupting ratings. A blank or zero %Z shows a dash instead of printing "Infinity A", while the values that don't depend on %Z survive. And sizing above the largest standard rating says so rather than handing back the biggest one, because silently returning 2500 kVA for a 4000 kVA requirement is an undersizing error dressed as an answer.

There's no metric/imperial switch, because volts, amps, kVA and ohms are the same everywhere — what differs by region is the list of standard kVA ratings, so the toggle picks a size family instead. The IEC R10 series is generated from its own definition rather than typed in, so it can't be mistyped.

**On the numbers.** This was built from a spec that was independently reviewed before any code was written. All 16 of its worked examples are asserted in `verify:logic` against hand-computed values rather than against the implementation.

🔗 Live: https://caspianoffice.io/tool/transformer-calculator/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 6c174c6
