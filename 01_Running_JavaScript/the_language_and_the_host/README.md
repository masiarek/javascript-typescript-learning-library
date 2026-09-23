# The language and the host — what ECMAScript defines and what Node adds

**Level:** 101 · for anyone who has run JavaScript in a browser and in Node

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** ECMAScript defines `Array`, `JSON` and `Promise` but not `setTimeout`, `process` or `fetch`, which Node adds; a bare `node:vm` context has the first three and none of the others, and the `console` it does have prints nothing.

**Keywords:** `ECMAScript`, `host environment`

## What the finished page will answer

- Which of `Array`, `JSON`, `Promise`, `console`, `setTimeout`, `process`, `fetch` and `structuredClone` exist in a bare `node:vm` context, and which only in Node's own global scope?
- Why does a bare context have a `console` at all, and why does its `log` print nothing?
- How many own properties does `globalThis` have in a bare context, in Node 24 and in Node 25.2.1, and what are the extra ones?
- What does `setTimeout` return in Node, and why is that not the number a browser returns?
- Which browser globals has Node picked up (`navigator`, and in Node 25 `localStorage`), and which does it still lack (`window`, `document`)?

## Examples it will need

- [ ] `language_and_host_bare_context_js.js` — for each of nine globals, what typeof says in Node and in a bare node:vm context
- [ ] `language_and_host_node_extras_js.js` — the global names Node adds beyond a bare context, and what setTimeout returns

## See also

- [Which features your Node has](../which_features_your_node_has/README.md) — the V8 version under your Node, and what it ships
- [The global object](../../04_Variables_and_Scope/the_global_object/README.md) — where the language's globals and the host's live together
- [The DOM](../../21_The_Browser/the_dom_is_not_javascript/README.md) — the same split, seen from the browser
- [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md) — `process`, the host object you will use most
- [Rust: `core`, `alloc` and `std` ↗](https://masiarek.github.io/rust-learning-library/40_Without_std/core_alloc_and_std/index.html) — the same line drawn in Rust, between `core` and `std`

## Sources to start from

- [MDN — JavaScript technologies overview ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)
- [ECMA-262 — Hosts and Implementations ↗](https://tc39.es/ecma262/#sec-hosts-and-implementations)
- [Node.js 24 — vm ↗](https://nodejs.org/docs/latest-v24.x/api/vm.html)
