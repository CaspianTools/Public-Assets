---
product: Caspian Office
title: "v1.172.0 — Motor Full-Load Current, and the two currents the code says are not the same"
date: 2026-08-12
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.172.0.png)

**Shipped v1.172.0** · 2026-08-12

**[Motor Full-Load Current](https://caspianoffice.io/tool/motor-current-calculator/)** — nameplate current for DC, single- and three-phase motors, the kW/kVA/hp chain, and NEC starting and protection sizing.

- **New — full-load current from the nameplate.** Rated power in kW, hp or metric hp, voltage, efficiency and power factor, giving the current plus electrical input power, apparent and reactive power, and the losses in the motor.
- **New — the NEC table value shown right beside it.** This is the point of the tool. NEC 430.6 names **two different currents**: branch-circuit protection and conductors must be sized from the table value in 430.248/430.250 — explicitly *"instead of the actual current rating marked on the motor nameplate"* — while overload protection must use the nameplate. A 25 hp 460 V motor can be 29.3 A on the plate and 34 A in the table. So the protection tab takes them as **two separate fields** and will not let one stand in for the other.
- **New — starting current and protection.** Locked-rotor current from the NEMA code letter as a *band* (the letter states a range, not a number), star-delta and autotransformer starting, and NEC 430.32 overload, the four 430.52 device maxima and 430.22 conductor sizing — each from its own legal basis, with the next standard fuse or breaker size where the code permits rounding up.

**Where it refuses instead of guessing.** 400 V and 415 V are not NEC table columns, so it reports "not tabulated" rather than interpolating a value the code doesn't publish. DC and synchronous motors use tables that aren't carried here, so device sizing is withheld with an explanation rather than computed from a basis the code doesn't allow. One table cell that two independent reviews could not corroborate — 350 hp at 575 V — is deliberately reported as not tabulated. And the instantaneous-trip breaker gets no round-up, because an adjustable setting isn't a standard rating to round to.

Every NEC table was **generated into the module from the reviewed specification by a script**, so no table value was retyped by hand. Both reviewers independently flagged the same thing as the likeliest source of a non-compliant answer — a single shared current field — which is why splitting it is the central design decision here.

🔗 Live: https://caspianoffice.io/tool/motor-current-calculator/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: cde3696
