# `npm run` and `npx` — running tools without installing them globally

**Level:** 101 · for anyone who has run npm test

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `npm run` puts `node_modules/.bin` first on `PATH` — the package's own and every parent folder's — so a script can call `tsc` by name; `npx tsc` outside a TypeScript project would fetch the package named `tsc`, a deprecated 2.0.4 release, which `npx --no` refuses.

**Keywords:** `npm run`, `npx`, `node_modules/.bin`, `npm_lifecycle_event`

## What the finished page will answer

- Which folders does `npm run` put in front of `PATH`, and in what order?
- How does `npm run build -- --watch` pass `--watch` to the script, and what do `npm_lifecycle_event` and `npm_package_name` hold inside it?
- What does `npx tsc --version` print inside the repo, and what does `npx --no tsc` say in an empty folder?
- Where does `npx` keep a package it downloads, and what does `--package=typescript` change?
- Which script names run without `run`, such as `npm test`, and when do `pretest` and `posttest` run?

## Examples it will need

- [ ] `npm_scripts_path_sh.sh` — the first PATH entries inside `npm run` for a package two folders deep
- [ ] `npm_scripts_arguments_and_env_sh.sh` — `npm run` passing arguments after `--`, and the npm_lifecycle_event and npm_package_name a script sees
- [ ] `npx_inside_and_outside_a_project_sh.sh` — `npx --no tsc --version` in the repo (7.0.2), then in an empty folder with a fresh cache: the refusal naming tsc@2.0.4

## See also

- [npm](../npm_and_package_json/README.md) — where `scripts` and `devDependencies` are declared
- [`tsc` and `tsconfig.json`](../../22_TypeScript_Basics/tsc_and_tsconfig/README.md) — the `tsc` a script should find
- [The built-in test runner](../../19_Node_Runtime/the_built_in_test_runner/README.md) — `npm test` running `node --test`
- [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md) — the `npm_` variables arrive in `process.env`
- [Rust: Cargo subcommands worth knowing ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/cargo_subcommands/index.html) — subcommands in Cargo, the nearest thing to npm scripts

## Sources to start from

- [npm Docs — npm run ↗](https://docs.npmjs.com/cli/v11/commands/npm-run/)
- [npm Docs — npx ↗](https://docs.npmjs.com/cli/v11/commands/npx/)
- [npm Docs — scripts ↗](https://docs.npmjs.com/cli/v11/using-npm/scripts/)
