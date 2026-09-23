# Deno and Bun — two other runtimes, and what differs

**Level:** 201 · for readers who use Node and have heard of Deno or Bun

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Deno, Bun and Node run the same language on different hosts: Deno refuses file, network and environment access until a flag grants it, a model Node offers only under `--permission`; and all three run a `.ts` file by dropping its types, not checking them.

**Keywords:** `Deno`, `Bun`, `--permission`, `--allow-read`

## What the finished page will answer

- What does reading `/etc/hosts` do under plain `node`, under `node --permission`, and with `--allow-fs-read=/etc/hosts`?
- Which flags does Deno need for a script that reads a file, calls `fetch` and reads an environment variable?
- What do `node file.ts`, `deno run file.ts` and `bun file.ts` do with a type error, and what do `tsc --noEmit` and `deno check` do?
- Which of `node:fs`, `Deno.readTextFile` and `Bun.file` runs in the other two runtimes?
- How do `node --test`, `deno test` and `bun test` differ in which files they find and whether they type-check?

## Examples it will need

- [ ] `deno_and_bun_node_permission_sh.sh` — reading /etc/hosts under plain node, under --permission (ERR_ACCESS_DENIED) and with --allow-fs-read
- [ ] `deno_and_bun_same_script_sh.sh` — one script's output under node, deno and bun where each is installed, with its version, and a skip line where not

## See also

- [The language and the host](../../01_Running_JavaScript/the_language_and_the_host/README.md) — the language is shared; the host differs
- [Running TypeScript](../../22_TypeScript_Basics/running_typescript/README.md) — the way Node itself runs `.ts`
- [The built-in test runner](../../19_Node_Runtime/the_built_in_test_runner/README.md) — `node --test`, beside `deno test` and `bun test`
- [Which features your Node has](../../01_Running_JavaScript/which_features_your_node_has/README.md) — checking a runtime before relying on a feature

## Sources to start from

- [Deno — Security and permissions ↗](https://docs.deno.com/runtime/fundamentals/security/)
- [Bun — Runtime ↗](https://bun.com/docs/runtime)
- [Node.js 24 — Permission Model ↗](https://nodejs.org/docs/latest-v24.x/api/permissions.html#permission-model)
