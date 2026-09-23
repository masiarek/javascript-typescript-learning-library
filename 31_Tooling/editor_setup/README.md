# Editor setup — the TypeScript language server in VS Code and Zed

**Level:** 101 · for anyone who writes TypeScript in an editor

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** The red squiggles come from a language server, not from `tsc`: TypeScript 7 builds one into `tsc` itself (`tsc --lsp --stdio` answers as `typescript-go`), but VS Code and Zed start their own `tsserver`-based server by default, which can check with a different TypeScript.

**Keywords:** `language server`, `LSP`, `tsc --lsp`, `VS Code`, `Zed`, `vtsls`

## What the finished page will answer

- What does `tsc --lsp --stdio` answer to an LSP `initialize` request, and which features does it list?
- Which TypeScript version does VS Code use for a project that pins 7.0.2, and how does the TypeScript 7 extension change that?
- Which language server does Zed start for `.ts` files, and how does `language_servers` in its settings change it?
- Why can the editor show an error that `tsc` does not, and how do you find out which TypeScript each one used?
- What does Zed run on save for a TypeScript file, and how do you turn format on save off for one language?

## Examples it will need

- [ ] `editor_setup_tsc_language_server_js.js` — the serverInfo and the hover, definition and rename capabilities TypeScript 7's `tsc --lsp --stdio` returns to an initialize request
- [ ] `editor_setup_hover_request_js.js` — a `textDocument/hover` for a variable in a small file, answered by the same server with its inferred type

## See also

- [TypeScript 7](../../22_TypeScript_Basics/typescript_7/README.md) — the Go compiler that also serves the editor
- [`tsc` and `tsconfig.json`](../../22_TypeScript_Basics/tsc_and_tsconfig/README.md) — the `tsconfig.json` the language server reads
- [Prettier](../formatting_with_prettier/README.md) — the formatter Zed runs on save
- [ESLint](../linting_with_eslint/README.md) — lint errors shown beside type errors
- [Debugging Node](../debugging_node/README.md) — the debugger both editors attach
- [Rust: Zed for Rust: one key to save and run, and three defaults in its way ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/zed_setup/index.html) — the same editor, set up for Rust
- [Rust: Choosing an editor for Rust ↗](https://masiarek.github.io/rust-learning-library/05_Tooling/editors/index.html) — choosing an editor for Rust

## Sources to start from

- [TypeScript blog — Announcing TypeScript 7.0 ↗](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)
- [VS Code docs — Using newer TypeScript versions ↗](https://code.visualstudio.com/docs/typescript/typescript-transpiling#_using-newer-typescript-versions)
- [Zed docs — TypeScript ↗](https://zed.dev/docs/languages/typescript)
