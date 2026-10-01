---
product: Caspian Office
title: "v1.181.0 — Offline PDF tools work again, and the engine is on its latest secure release"
date: 2026-08-15
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.181.0.png)

**Shipped v1.181.0** · 2026-08-15

A security update to the PDF engine that turned into something more useful: the new test written to verify the update found that every PDF tool in the **offline single-file download** had been broken for some time. That is fixed here too.

- 🐞 **Fixed — PDF tools work in the downloaded single file again.** Opening Caspian Office from disk and picking a PDF failed in *every* PDF tool. pdf.js starts its background worker as a *module* worker, and browsers block that from a `blob:` URL on a `file://` origin; pdf.js then fell back to its "fake worker", which cannot load our classic IIFE bundle, and died with `Setting up fake worker failed`. The app now constructs the worker itself as a classic worker and hands pdf.js the live port via `GlobalWorkerOptions.workerPort`. The website and installed PWA were never affected.
- ✨ **New — `npm run verify:pdf`.** A Playwright harness that synthesises a PDF with `PDFLib`, then renders a page to a canvas and reads its text back through the *vendored* `pdfjsLib` — run against the dev server **and** the `file://` build, because the two wire the worker differently. This is what caught the bug above. It rebuilds the offline bundle by default — `app.js` is inlined into it, so reusing a stale bundle would verify stale code; the test was proven to go red on the broken wiring and green on the fix. Future engine bumps verify themselves.
- 🔒 **Fixed — pdf.js 6.1.200 → 6.2.108** ([GHSA-hq66-cqwq-w95j](https://github.com/advisories/GHSA-hq66-cqwq-w95j), arbitrary JS execution on opening a malicious PDF). Caspian Office was **not exposed** — the advisory requires `enableScripting`, and the app only ever uses the low-level `getDocument` / `render` / `getTextContent` API. Re-vendored regardless.
- 🔧 **Improved — build toolchain refreshed.** `esbuild` 0.28.2, `playwright` 1.62.1, and `undici` 7.29.0 (transitive under `jsdom`, clearing five advisories). All dev-only; none ship to users. `npm audit` is now clean. CI's pinned Node moved 20 → 24.
- 🐞 **Fixed — the About page credited pdf.js 6.0.227**, two engine versions behind what actually shipped.

🔗 Live: https://caspianoffice.io
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: `1fc856b5` · `12186ec6`
