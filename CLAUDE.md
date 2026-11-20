# CLAUDE.md

## Owner actions live in GitHub issues, linked to the session that asked

**Rule (owner, 20 Nov 2026).** Anything the owner has to do, decide or check
is a GitHub issue **in this repository**, opened in the same turn it comes
up — never only in the chat. The chat disappears when the session ends; the
issue does not. Link the issue in the reply. Search the open issues first and
add to an existing one rather than opening a duplicate.

### Mark who it is for, twice

| For | Label | Title starts with |
| --- | --- | --- |
| The owner — something to do or check | `for: owner` | `[YOU]` |
| The owner — a choice to make | `for: owner` + `decision` | `[YOU · DECIDE]` |
| Claude — development work to pick up | `for: claude` | `[CLAUDE]` |

Create the labels if the repository does not have them yet. When an issue
changes hands, change both markers.

### The shape of a `[YOU]` issue: steps first, reasons last

```
## Do this

1. One action, naming the site, repository or console it happens in.
   A command, or a Claude for Chrome script for anything done in a
   browser, goes in its own block under the step.

2. Next action.

## Why

Two sentences at most: what is wrong and what doing the steps changes.

**Urgency:** one word, with a half-sentence if it needs one.

## Sessions

**Changed by:** https://claude.ai/code/session_… (pull request owner/repo#N)

**Asked by:** https://claude.ai/code/session_… (go back here with the result)

<details>
<summary>Background</summary>

- Everything else: how it was found, what Claude could not do and why,
  the exact names of projects, services and settings involved.

</details>
```

- **Steps are the issue**: one imperative action each, a blank line between
  every block, under about 120 words above `<details>`. Explanation goes
  inside `<details>`, collapsed. One issue, one thing to do.
- **The owner is not a developer.** Write in plain words what happens to
  the business, the site or the customer; literal text only in a command.
- `[YOU · DECIDE]` uses the same frame with `## Decide` (the options as a
  numbered list, the recommendation marked) in place of `## Do this`.
- **Anything in a browser is a Claude for Chrome script** inside the step,
  never a list of clicks: numbered steps, one action each, the address in
  every step that navigates, the exact on-screen words to expect, stop at
  the first step that misbehaves, nothing it must not touch, and a check of
  the deploy first when the step depends on one. It ends: "Give me step,
  pass or fail, and the exact wording of anything that failed. If every
  step passed, comment the results on <issue link> and close it; otherwise
  comment the failing step and leave it open. End the comment with: Report
  this back to <Asked by session link>."
- **A changed script is a new comment**, never an edit: headed
  `Updated script (<date>) — use this one`, holding the whole script. A
  "run it again" is a new comment too.
- **Commands for the owner** run on Windows in PowerShell and Command
  Prompt alike: full paths, no shell variables, no `&&`, no pipes.

### Link the session that asked

An issue alone does not say which conversation wants the answer, so every
one carries the session's link, and the owner can go back to that session
and report what was done.

- **Where the link comes from:** the `Claude-Session:` line of the commit
  attribution (`https://claude.ai/code/session_…`); if it is missing,
  `get_session` with no id gives the session id.
- **Every `[YOU]` and `[YOU · DECIDE]` issue has the `## Sessions` section**:
  **Changed by** (the session that made the change being checked, with its
  pull request) and **Asked by** (the session waiting for the result). When
  they are the same, one line: `**Session:** <link> (made the change and is
  waiting for the result)`.
- **Every comment that asks the owner to run a script** starts with
  `**Asked by:** <link>`; the newest comment's session is the one to go back
  to. A `[CLAUDE]` issue names the session that opened it the same way.
- A session that finds a result on an issue acts on it there, even when
  another session asked: the link is for the owner, not a lock.

### Close what is finished

Close an issue once the evidence is in (the owner's report, a script's
comment, output they pasted), with a one-line comment saying what proves
it; `not planned` when nothing was done. Never close on an assumption.
End every issue and comment with the Claude Code attribution footer.
