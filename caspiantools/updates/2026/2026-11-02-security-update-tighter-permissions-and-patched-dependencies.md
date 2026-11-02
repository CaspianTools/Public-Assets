---
product: Caspian Tools Workspace
title: "Security update: tighter permissions and patched dependencies"
date: 2026-11-02
type: notice
social: false
draft: false
---

We ran a security pass on the Workspace and shipped the results today.
Every record now has to carry the name of the person who actually changed it, so one team member can no longer make an edit look like it came from someone else, and GitHub issues are only ever opened under the account that really made the change.
Workspace owners can no longer change their own plan or seat count outside billing, and project membership can only be widened by the project owner and only to people already in the workspace.
We also updated the framework and libraries the app is built on to versions with the latest security fixes.
Nothing changes in how you use the Workspace; if something that worked yesterday is refused today, tell us through Support.
