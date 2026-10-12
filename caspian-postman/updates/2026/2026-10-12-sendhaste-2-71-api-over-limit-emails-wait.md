---
product: SendHaste
title: "SendHaste 2.71.0 — Emails over the daily limit wait instead of being lost"
date: 2026-10-12
type: release
social: false
draft: false
---

Until now, an email your website sent through the sending API after your domain or mailbox had reached its daily limit was refused and lost. Now it is accepted, held until midnight UTC and counted against the next day: the API answers 202 with status "queued" and deliverAfter, the time it goes out. Only when the next day's limit is used up too does the API still answer 429 daily_limit, now with a Retry-After header saying how long to wait. Treat a 202 as sent and don't send the email again, or it goes out twice. In SendHaste itself, an email you Send later now counts against the day it goes out, so a full day no longer stops one scheduled for tomorrow. Each domain's page in Settings → Domains shows Emails today against its limit, how many are waiting for midnight, and Warming up or Full limit. Details are in Help, under Sending API: https://sendhaste.com/en/help/api
