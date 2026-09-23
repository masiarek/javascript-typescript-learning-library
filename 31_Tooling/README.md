# 31 — Tooling

**One line:** Each tool around a JavaScript project answers one question the others never check — which versions, which binary, which types, which mistakes, which layout, which syntax, which line runs next — and each can be swapped without touching the language.

The chapter follows a project from its first file to its first bug. It starts with npm: `package.json`, version ranges and the lockfile, then running tools through `npm run` and `npx`. The editor comes next, with the language server behind its red squiggles, then ESLint for mistakes that type-check, Prettier for layout, and bundlers and transpilers for what ships. Debugging with the inspector follows, and last Deno and Bun, two runtimes that run the same language on a different host.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [npm](npm_and_package_json/README.md) | 101 | The caret in `"^1.2.3"` accepts any `1.x.y` from 1.2.3 up, but `"^0.2.3"` stops before 0.3.0 — below 1.0 the caret locks the minor version — and neither admits a prerelease such as `1.3.0-beta.1`; the lockfile records what was actually installed. | stub |
| [`npm run` and `npx`](npm_scripts_and_npx/README.md) | 101 | `npm run` puts `node_modules/.bin` first on `PATH` — the package's own and every parent folder's — so a script can call `tsc` by name; `npx tsc` outside a TypeScript project would fetch the package named `tsc`, a deprecated 2.0.4 release, which `npx --no` refuses. | stub |
| [Editor setup](editor_setup/README.md) | 101 | The red squiggles come from a language server, not from `tsc`: TypeScript 7 builds one into `tsc` itself (`tsc --lsp --stdio` answers as `typescript-go`), but VS Code and Zed start their own `tsserver`-based server by default, which can check with a different TypeScript. | stub |
| [ESLint](linting_with_eslint/README.md) | 201 | `tsc --strict` exits 0 on a promise nobody awaits, an assignment inside `if`, a `map` callback that returns nothing and a variable never read — all type-correct — and ESLint rules such as `no-floating-promises` and `no-cond-assign` exist to reject exactly these. | stub |
| [Prettier](formatting_with_prettier/README.md) | 101 | Prettier throws your layout away and reprints the code from its syntax tree, with two exceptions it keeps on purpose: blank lines, several collapsing into one, and an object with a line break after `{`, which it never joins back onto one line. | stub |
| [Bundlers and transpilers](bundlers_and_transpilers/README.md) | 201 | A transpiler rewrites syntax for older engines — `tsc --target es2019` turns `env.PORT ?? "8080"` into a `!== null && !== void 0` test — and a bundler joins the modules an entry imports into one file; esbuild and Vite do both, without checking types. | stub |
| [Debugging Node](debugging_node/README.md) | 201 | `debugger;` is a breakpoint only while a debugger is attached — otherwise Node runs straight past it; `node --inspect` opens one on `ws://127.0.0.1:9229` and keeps running, and `--inspect-brk` waits there before the first line. | stub |
| [Deno and Bun](deno_and_bun/README.md) | 201 | Deno, Bun and Node run the same language on different hosts: Deno refuses file, network and environment access until a flag grants it, a model Node offers only under `--permission`; and all three run a `.ts` file by dropping its types, not checking them. | stub |
<!-- /lessons -->

## Boundaries

`tsc` and `tsconfig.json` are in TypeScript basics; the `type` and `exports` fields of `package.json`, which Node reads, are in Modules; the built-in test runner is in The Node.js runtime.
