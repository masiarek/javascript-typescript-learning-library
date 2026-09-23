# `tsc` and `tsconfig.json` — the options that matter

**Level:** 201 · for anyone setting up a TypeScript project

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `tsc` with no file names checks the project `tsconfig.json` describes; `tsc app.ts` beside that file stops with TS5112, because naming files means ignoring the config, and TypeScript 7 makes you say so with `--ignoreConfig`.

**Keywords:** `tsc`, `tsconfig.json`, `--showConfig`, `--ignoreConfig`

## What the finished page will answer

- What does `tsc app.ts` do when a `tsconfig.json` sits in the same folder, and what do `tsc` alone and `tsc --ignoreConfig app.ts` do instead?
- Which defaults changed in TypeScript 6 and 7, for `strict`, `target`, `module`, `types` and `rootDir`, and what does an empty `compilerOptions` check now?
- Why is `process` 'Cannot find name' (TS2591) until `types` lists `node`, even with `@types/node` installed?
- What does `--showConfig` print for a config that `extends` another, and why does it leave the defaults out?
- Which options does this library's `tsconfig.json` set, `noEmit`, `erasableSyntaxOnly`, `verbatimModuleSyntax` and `allowImportingTsExtensions`, and what mistake does each one catch?
- What do the removed options, such as `target: es5`, `baseUrl` and `moduleResolution: node`, report now?

## Examples it will need

- [ ] `tsc_and_tsconfig_file_or_project_sh.sh` — TS5112 for `tsc app.ts` beside a tsconfig.json, then the project check and the `--ignoreConfig` check, each with its exit status
- [ ] `tsc_and_tsconfig_defaults_sh.sh` — the errors TypeScript 7 gives a small file under an empty tsconfig.json (implicit any, `null`, unknown `process`), and how `"types": ["node"]` and `"strict": false` change them
- [ ] `tsc_and_tsconfig_show_config_sh.sh` — `tsc --showConfig` for a tsconfig that extends another, showing the merged options and no defaults

## See also

- [`strict`](../strict_mode_in_typescript/README.md) — the eight checks the default `strict` turns on
- [Running TypeScript](../running_typescript/README.md) — why `noEmit` is enough when Node runs the .ts file
- [Module resolution](../../29_Declaration_Files_and_Module_Resolution/module_resolution/README.md) — what `module` and `moduleResolution` decide
- [Types for packages](../../29_Declaration_Files_and_Module_Resolution/types_for_packages/README.md) — the `@types` packages that `types` now has to name
- [`npm run` and `npx`](../../31_Tooling/npm_scripts_and_npx/README.md) — running the pinned `tsc` from node_modules
- [Rust: What `cargo run -v` shows: the `rustc` line, flag by flag ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/from_rustc_to_cargo/what_cargo_passes_rustc/index.html) — a project file turned into compiler flags, printed by Cargo
- [Python: `pyproject.toml` ↗](https://masiarek.github.io/python-learning-library/02_Projects_and_Environments/pyproject_toml/index.html) — the Python project file that plays the same part

## Sources to start from

- [TypeScript Handbook — What is a tsconfig.json ↗](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [TSConfig Reference ↗](https://www.typescriptlang.org/tsconfig/)
- [TypeScript 6.0 release notes — Simple Default Changes ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html#simple-default-changes)
