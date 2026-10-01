---
product: Caspian Office
title: "v1.173.0 — Power Factor & Correction: the power triangle from any two knowns, capacitor banks in kVAr and microfarads, and the resonance check run against the bank you will actually fit"
date: 2026-08-12
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.173.0.png)

**Shipped v1.173.0** · 2026-08-12

Power Factor & Correction joins the Electrical set — the power triangle from any two knowns, capacitor banks sized in kVAr and microfarads, and the resonance check that decides whether a plain bank is safe to fit at all. It is the ninth electrical tool and the first of the three remaining in wave 2.

- **New — Power Factor & Correction.** Give the power triangle any two of kW, kVA, kVAr and power factor and it returns the other two, the phase angle, the lead or lag designation, a scale drawing, and a line naming which pair it solved from — because four of the six pairings need the lead/lag toggle for a unique answer.
- **New — capacitor banks in kVAr and in microfarads.** The rating comes from `Qc = P (tan φ1 − tan φ2)`, computed rather than read off a chart, so it reproduces the published multiplier exactly: 0.75 → 0.95 gives 0.553233 against a chart value of 0.553. Then the capacitance, at 50 or 60 Hz, for a single-phase capacitor and for three-phase delta and star.
- **New — delta and star are always shown together.** Star is *exactly* three times delta, because a star capacitor sees V/√3 and reactive power goes as the square of voltage. A lone microfarad figure cannot be told apart from the other one, so both are printed, each with the voltage it assumed and the words "per capacitor". Three-phase voltage is line-to-line and the label says so — feeding a line-to-neutral voltage into a line-to-line formula is out by that same factor of three, and it is the commonest defect in calculators of this kind. The bank line current is identical either way, which is the built-in cross-check.
- **New — the resonance check, run against the bank you will actually fit.** A bank and the supply inductance resonate at `h = √(S_sc / Qc)`, and a hit near the 3rd, 5th, 7th, 11th or 13th harmonic turns an ordinary harmonic current into a destructive voltage. Because banks are sold in steps, the tool rounds up to a real catalogue size and checks *that* one: on a 500 kVA 5 %Z supply the ideal 165.97 kVAr looks clear at 7.76, while the 175 kVAr actually bought lands on the 7th.
- **Improved — it refuses rather than guesses.** A target below the existing power factor returns nothing — never a negative kVAr, and never a negative "reduction" printed under a label that reads like a benefit. kVAr paired with a power factor of exactly 1 is doubly singular and says so instead of returning infinity. A zero transformer rating, a zero or negative impedance, and an impedance of 100 % or more are all refused. Motor-terminal capacitor sizing is left out entirely, because the NEMA MG-1 tables that make it safe could not be verified against a primary source. Both discharge rules are printed side by side — IEC 60831-1's 75 V in 3 minutes and NEC 460.6(A)'s stricter, mandatory 50 V in 1 minute — because a reader following only one of them may be following the wrong one.

Built from a specification that went through two independent adversarial reviews before any code existed. Between them they caught four defects in the specification itself — a missing kVAr → VAr factor of 1000 on every capacitor current, a fixture value derived by subtracting two already-rounded numbers, a %Z sanity band five times looser than its sibling tool's, and the one division with no named guard. The tool's own new tests then caught a fifth in the implementation: unity was tested for an exact zero, but `tan(acos(0.8))` is 0.7499999999999999, so a perfectly-sized bank reported LEADING on a residue of 3e-14 kVAr.

`verify:logic` is now 91 passing checks, 0 failing — 15 new ones covering all fourteen worked examples, the published multiplier chart, an EPCOS/TDK datasheet fixture, and the structural checks that prove the physics rather than a typed table. Plus 57 real-browser click-tests across every tab, both frequencies, both supply types, persistence across reload and Arabic for right-to-left.

🔗 Live: https://caspianoffice.io/tool/power-factor-calculator/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 22d1e91
