# Running TypeScript — Node strips the types, `tsc` checks them

**Level:** 101 · for anyone about to run their first .ts file

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `node server.ts` blanks out the types and runs, so a file that assigns `"8080"` to a `number` prints `80801` and exits 0; the check is a separate command, `tsc --noEmit`, which reports TS2322, writes nothing and exits 1.

**Keywords:** `--no-strip-types`, `process.features.typescript`, `noEmit`

## What the finished page will answer

- What does `node server.ts` print when `port: number` holds `"8080"`, and what do `tsc --noEmit` and its exit status say about the same file?
- Which Node versions strip types without a flag, what does `process.features.typescript` report, and what error does a typed file give under `--no-strip-types`?
- What exit status does `tsc` give when it finds errors under `--noEmit`, and when it writes JavaScript despite them?
- How does Node decide whether a `.ts` file is an ES module or CommonJS, and what do `.mts` and `.cts` change?
- Why must a relative import say `./util.ts`, and which `tsconfig.json` option lets `tsc` accept that?
- What does Node do with a `.ts` file inside `node_modules`, and what does `node --check app.ts` report?

## Examples it will need

- [ ] `running_typescript_both_commands_sh.sh` — Node's `80801` and exit status 0 for a file with a type error, then tsc's TS2322 and exit status 1 for the same file
- [ ] `running_typescript_features_sh.sh` — `process.features.typescript` with and without `--no-strip-types`, and the SyntaxError Node gives a typed file when stripping is off

## See also

- [Running a file with Node](../../01_Running_JavaScript/running_a_file_with_node/README.md) — the same command for a plain .js file
- [Erasable syntax](../erasable_syntax/README.md) — the TypeScript that Node refuses to run at all
- [`tsc` and `tsconfig.json`](../tsc_and_tsconfig/README.md) — configuring the check that Node does not do
- [Module resolution](../../29_Declaration_Files_and_Module_Resolution/module_resolution/README.md) — why an import names `./util.ts`, extension included
- [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md) — reading the exit statuses both commands return
- [Rust: Compiled, interpreted, or something between ↗](https://masiarek.github.io/rust-learning-library/20_Compilers/compiled_or_interpreted/index.html) — when a toolchain compiles, and what runs afterwards

## Sources to start from

- [Node.js 24 — Modules: TypeScript ↗](https://nodejs.org/docs/latest-v24.x/api/typescript.html)
- [Node.js 24 — process.features.typescript ↗](https://nodejs.org/docs/latest-v24.x/api/process.html#processfeaturestypescript)
- [TSConfig Reference — noEmit ↗](https://www.typescriptlang.org/tsconfig/#noEmit)
