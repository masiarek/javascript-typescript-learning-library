# npm — `package.json`, semver ranges and the lockfile

**Level:** 101 · for anyone who has typed npm install

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** The caret in `"^1.2.3"` accepts any `1.x.y` from 1.2.3 up, but `"^0.2.3"` stops before 0.3.0 — below 1.0 the caret locks the minor version — and neither admits a prerelease such as `1.3.0-beta.1`; the lockfile records what was actually installed.

**Keywords:** `package.json`, `package-lock.json`, `semver`, `npm ci`, `npm install`

## What the finished page will answer

- Which versions do `^1.2.3`, `^0.2.3`, `^0.0.3` and `~1.2.3` accept, checked with the `semver` module npm uses?
- What do `version`, `resolved` and `integrity` record for the repo's `typescript` entry in `package-lock.json`?
- What does `npm ci` do when `package.json` names a dependency the lockfile lacks, and what does `npm install` do instead?
- What goes in `dependencies` and what in `devDependencies`, and which does `npm ci --omit=dev` skip?
- Why does this repo pin `"typescript": "7.0.2"` with no caret at all?

## Examples it will need

- [ ] `npm_caret_and_tilde_ranges_sh.sh` — true or false for versions against ^1.2.3, ^0.2.3, ^0.0.3 and ~1.2.3, using the semver module inside npm
- [ ] `npm_ci_refuses_a_stale_lockfile_sh.sh` — `npm ci --offline`'s EUSAGE error and exit status 1 when package.json names a `file:` dependency the lockfile lacks
- [ ] `npm_lockfile_records_sh.sh` — the version, resolved URL and integrity the repo's package-lock.json records for typescript

## See also

- [`package.json`](../../14_Modules/package_json_type_and_exports/README.md) — `type` and `exports`, the fields Node itself reads
- [`npm run` and `npx`](../npm_scripts_and_npx/README.md) — the `scripts` field, and running what `devDependencies` installed
- [Types for packages](../../29_Declaration_Files_and_Module_Resolution/types_for_packages/README.md) — `@types` packages, and why they are dev dependencies
- [Rust: Adding a dependency: `search`, `info`, `add` ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/cargo_dependencies/index.html) — the caret in Cargo, which follows the same rule below 1.0
- [Rust: `Cargo.lock`: what it records, who reads it, and the command that ignores it ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/cargo_lock/index.html) — the lockfile in Cargo, and the command that ignores it
- [Python: `pyproject.toml` ↗](https://masiarek.github.io/python-learning-library/02_Projects_and_Environments/pyproject_toml/index.html) — the project file in Python

## Sources to start from

- [npm Docs — package.json: dependencies ↗](https://docs.npmjs.com/cli/v11/configuring-npm/package-json/#dependencies)
- [npm Docs — semver: caret ranges ↗](https://docs.npmjs.com/cli/v6/using-npm/semver/#caret-ranges-123-025-004)
- [npm Docs — npm ci ↗](https://docs.npmjs.com/cli/v11/commands/npm-ci/)
