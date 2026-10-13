---
product: SendHaste
title: "SendHaste 2.72.0 — Set each mailbox's daily limit, and see refused and held emails"
date: 2026-10-13
type: release
social: false
draft: false
---

An Org Super Admin can now choose how many people each mailbox may email a day: open Settings → Domains → the domain → Sending limits and set People each mailbox may email a day, up to the domain's own daily limit (which is also where it starts). The domain's page now shows Refused today and Held for tomorrow next to Emails today. Settings → Usage adds Refused and Held columns per mailbox and per day, and Settings → Activity lists every email a daily limit stopped or held. For the sending API, an email that went out is always answered 200 or 202, even when the answer was slow, and an email stopped by a daily limit is always answered 429 daily_limit with Retry-After, so your app can queue it and try again. Details are in Help, under Sending API: https://sendhaste.com/en/help/api
