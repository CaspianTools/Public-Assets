---
product: Caspian Office
title: "v1.191.0 — A family tree maker: two parents joined by a labelled marriage line, with the children merged beneath it"
date: 2026-08-23
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.191.0.png)

**Shipped v1.191.0** · 2026-08-23

A new **Family tree maker** joins the Diagrams section. It is not an org chart with different labels: the unit here is the **union**. Two parents sit side by side joined by a marriage line, and their children hang from a **single merged drop** off the middle of that line — the thing that makes a family tree read as a family tree, and the one thing a reporting chart cannot do.

- **New — Family tree maker.** Cards carry a name, a free-text life-dates line and a short note, so "1948 – 2011", "b. 1975" and a full date all work in any calendar or language. The tree lays itself out as you build it; pan, zoom, fit-to-view and full screen come from the shared canvas chrome.
- **New — every line carries a label you can edit.** Click the label on a marriage line for _Married_, _Engaged_, _Divorced_; click the one on a child's line for _Son_, _Daughter_, _Adopted_, _Step-son_. The usual words are suggested as you type, and you can enter anything else. An unlabelled line shows a faint dashed tag chip, so there is always something to click — and those chips never reach an export.
- **New — second and third marriages, drawn unambiguously.** Add a marriage and another partner appears further along the row, joined by a line routed **above** the row rather than through the spouse in between. Each marriage keeps its own children and its own **+** button. People can be set to male, female or unspecified and take the matching chart-wide tint; any single card can still override its own accent and border.
- **New — download as SVG, PNG, PDF or JSON, and upload the JSON back.** Drag a card onto another to move that person with all of their descendants. Undo/redo throughout, saved on your device, works offline and from `file://`.
- **Improved — shipped in all 12 languages**, interface strings and the in-app guide included, Arabic RTL included.

🔗 Live: https://caspianoffice.io/tool/family-tree/
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: a7e3e5f2
