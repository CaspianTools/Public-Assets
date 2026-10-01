# Public-Assets

Publicly hosted images, release notes and other static files for CaspianTools projects.

Several CaspianTools repositories are private. Anything they need to show publicly lives here instead, because GitHub returns 404 to anonymous visitors for files in a private repo. That covers Marketplace / Open VSX README images, release notes and store-page media.

## Layout

```
Public-Assets/
├── README.md                     ← this file: conventions for every repo folder
├── _templates/                   ← shared templates (start every new file from these)
│   └── release-note.md
└── <repo-name>/                  ← one folder per repository, named exactly like the repo
    ├── README.md                 ← what's in this folder and how it is linked
    ├── screenshots/              ← images linked from the repo's README / store listing
    └── release-notes/
        ├── README.md             ← index of every release, newest first
        └── <major>.<minor>/      ← one folder per minor line, e.g. 1.31/
            └── <X.Y.Z>.md        ← one file per released version, e.g. 1.31.2.md
```

A repo folder only needs the subfolders it actually uses.

## Projects

| Folder | Project |
|---|---|
| [`caspian-taskmaster/`](caspian-taskmaster/) | Caspian Taskmaster, a VS Code extension: README screenshots and release notes |

## Conventions

- **Folder names** are lowercase-kebab-case. Release-note files are named by bare version (`1.31.2.md`, without a `v` prefix) and sit inside their `<major>.<minor>/` folder.
- **Release notes** start from [`_templates/release-note.md`](_templates/release-note.md). Each release gets its own file, and that release's row goes at the top of the repo's `release-notes/README.md` index.
- **Linking:** reference files by their raw URL on `main`:
  ```
  https://raw.githubusercontent.com/CaspianTools/Public-Assets/main/<repo-name>/<path>
  ```
- **Don't move or rename linked files.** Published listings, including already-released versions, keep pointing at the old URL. Add a new file rather than replacing a path that's in use.
- **Public by definition:** never commit secrets, internal-only notes or links into private repos that readers can't open.
