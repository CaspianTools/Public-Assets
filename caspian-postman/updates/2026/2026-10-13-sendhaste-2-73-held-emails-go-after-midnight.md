---
product: SendHaste
title: "SendHaste 2.73.0 — Emails over the daily limit reliably go out after midnight"
date: 2026-10-13
type: release
social: false
draft: false
---

When your website sends an email through the sending API after the day's limit is reached, SendHaste now keeps it itself and sends it after midnight UTC. The answer is still 202 with status "queued", and the email goes out as soon after midnight as the mail service takes it. Until then it is listed in the mailbox under Scheduled, in Held by the daily sending limit, and there is nothing you need to do. Details are in Help, under Sending API: https://sendhaste.com/en/help/api
