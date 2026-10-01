# Public-Assets

Publicly hosted images and other static assets for CaspianTools projects.

Some CaspianTools repositories are private, so images referenced from their
READMEs (VS Code Marketplace / Open VSX listings, store pages, docs) cannot be
served from the repo itself — GitHub returns 404 for anonymous requests. Those
assets live here instead.

## Layout

One top-level folder per repository, named exactly like the repo:

```
<repo-name>/
  screenshots/
  ...
```

| Folder | Used by |
|---|---|
| [`caspian-taskmaster/`](caspian-taskmaster/) | README screenshots for the Caspian Taskmaster VS Code extension |

## Linking

Reference files by their raw URL on `main`:

```
https://raw.githubusercontent.com/CaspianTools/Public-Assets/main/<repo-name>/<path>
```

Renaming or deleting a file here breaks every published listing that links to
it, including already-released versions — add new files instead of replacing
paths that are in use.
