---
product: Caspian Office
title: "v1.114.0 — Heat Stress Calculator: wind, the NWS chart, and workplace WBGT & TWL"
date: 2026-07-04
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.114.0.png)

**Shipped v1.114.0** · 2026-07-04

The Heat Index tool grows into a tabbed **Heat Stress Calculator** — everyday "feels-like" on one tab, workplace occupational indices on another. Everything runs client-side and works offline, as always.

- **New — wind & the NWS chart.** The heat-index tab now takes an optional **wind speed** and shows the wind-adjusted "feels like" (Bureau of Meteorology apparent temperature), plus the full colour-coded **NWS reference chart**, generated from the tool's own formula with your current reading ringed on it.
- **New — occupational heat stress.** A second tab adds a **WBGT** calculator (ISO 7243 — sun/shade, from meter readings or estimated from humidity) and a **TWL** interpreter that turns your calibrated heat-stress monitor's W/m² reading into its Brake & Bates risk zone. TWL isn't re-computed — its validated model isn't publicly reproducible, so we interpret your instrument's value to stay accurate and safe.

🔗 Live: https://caspianoffice.io/tool/heat-index/  ·  workplace tab: https://caspianoffice.io/tool/heat-index/?view=occupational
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 6cfcefb
