---
product: Caspian Office
title: "v1.180.0 — Dark mode had text you couldn't read. Every colour now works in both themes"
date: 2026-08-14
type: release
social: false
draft: false
---

![](https://caspianoffice.io/release/v1.180.0.png)

**Shipped v1.180.0** · 2026-08-14

Dark mode shipped as a shell-only theme back in Phase 6a, and nothing has ever checked its colours. An audit found text that was effectively invisible — and some of it was invisible in light mode too. Every colour in the app frame now has a value for each theme and clears the WCAG AA 4.5:1 contrast standard, with a new build gate to keep it that way.

- **fix — Three places rendered white text on a white button.** On **About**, "Visit CaspianTools.com" and the whole panel around it disappeared in dark mode, as did the prompt shown for a tool that isn't built yet. Same cause each time: a panel deliberately painted as the *opposite* of the page, written so it only inverts one way round.
- **fix — Category colours in the menu were close to unreadable in dark.** "Edit PDF", "Generators", "Diagrams", "PDF security" and six more were drawn in colours picked for a white background — some as low as **1.80:1**. All twenty-four categories now have a second colour for dark mode: same hue, enough contrast.
- **fix — Four of them were just as weak in *light* mode.** **Electrical** was the worst at **1.88:1**, a pale gold on an almost-white page. Eleven light values have been deepened.
- **fix — 521 daylight-coloured badges on a near-black changelog.** Every New / Improved / Fixed badge kept its pale pastel in dark mode, as did the "New" pill beside recently-added tools. The FIXED label was also too faint *in light* (2.66:1).
- **fix — The brand red was doing two jobs and failing both in dark.** The same red filled buttons *and* coloured text: 4.19:1 under a white button label, 4.03:1 as text. There are now two — a deeper red for fills, a lighter one for text. Light mode is untouched; one red clears both jobs there.
- **imp — Small grey text is readable.** The muted grey for dates, counts and captions measured **2.72:1**. It drove the date on all 260 changelog entries, the tool counts on the home page, the Settings descriptions and the privacy page body.
- **new — A proper page for broken links.** A mistyped address used to land on the hosting provider's stock error page, which ignored your theme entirely.
- **new — A build check so this cannot quietly return.** `npm run verify:contrast` measures 135 colour pairs against both themes and fails the build on any that miss — including the specific mistake behind most of this list: a colour defined for one theme and forgotten in the other.

Tool workspaces are still deliberately kept light in dark mode; that's a separate, tracked piece of work. Nineteen hardcoded whites inside them were converted to the shared theme value as groundwork, and the twelve that must stay white whatever the theme — a rendered PDF page, an exported canvas, the signature pad, a camera shutter — are now marked as deliberate.

🔗 Live: https://caspianoffice.io
📝 Changelog: https://caspianoffice.io/changelog
🔖 Commit: 85700a98
