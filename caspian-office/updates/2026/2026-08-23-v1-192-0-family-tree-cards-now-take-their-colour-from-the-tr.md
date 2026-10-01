---
product: Caspian Office
title: "v1.192.0 — Family tree cards now take their colour from the tree, not from each card"
date: 2026-08-23
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.192.0.png)

**Shipped v1.192.0** · 2026-08-23

A small correction to yesterday's **Family tree maker**: there were two ways to colour a card, and there should only ever have been one.

- **Improved — cards no longer carry their own colours.** A card's accent and border could be overridden one card at a time, on top of the male/female tints and the chart accent. Two ways to set the same thing is one too many: a tree built over several sittings drifted out of step with itself, and the only way back was to open every card that had been touched. Colour now comes from one place — the **Male**, **Female**, **Accent** and **Box fill** pickers above the canvas, plus each person's male / female / unspecified setting — so changing a colour restyles the whole tree at once and it exports consistently.
- **Improved — a shorter menu on every card.** Losing the two colour pickers and the "reset colours" button leaves a single row: edit the details, add a child, add a marriage, name the relationship, promote or reorder, set male or female, delete.
- **Fixed — trees saved with the old per-card colours are cleaned up on load**, and so is any JSON you import, so nothing keeps a setting the tool can no longer show you. Everything else about your tree is untouched.

The help text and the on-canvas hint were corrected in all 12 languages to match.

🔗 Live: https://caspianoffice.io/tool/family-tree/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 14ea1933
