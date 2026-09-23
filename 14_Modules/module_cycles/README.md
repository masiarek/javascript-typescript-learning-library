# Module cycles — when two modules import each other

**Level:** 301 · for anyone whose two modules import each other

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** In a cycle one module runs before the other has finished: an ES module reading the other's `const` at top level throws `ReferenceError` (the binding is still in its temporal dead zone), while CommonJS hands over a half-filled `exports` and reads `undefined`.

**Keywords:** `circular import`, `ERR_REQUIRE_CYCLE_MODULE`

## What the finished page will answer

- When `a.mjs` and `b.mjs` import each other and `a.mjs` is the entry point, which body runs first?
- Why does reading the other module's `const` throw `ReferenceError`, while calling its exported function declaration works?
- What does CommonJS hand over in the same cycle, and what warning does Node print about it?
- What does `require()` throw when an ES module loads a CommonJS file that requires the ES module back?
- Which fixes break a cycle: moving the shared value to a third module, or reading it inside a function called later?

## Examples it will need

- [ ] `module_cycles_esm_and_cjs_sh.sh` — the same two-module cycle in ESM (ReferenceError) and in CommonJS (undefined, plus Node's warning with the PID removed)
- [ ] `module_cycles_hoisted_functions_sh.sh` — an ESM cycle whose modules call each other's exported function declarations, which works
- [ ] `module_cycles_require_cycle_sh.sh` — an ES module that requires a .cjs file that requires it back, and the ERR_REQUIRE_CYCLE_MODULE code

## See also

- [Hoisting and the temporal dead zone](../../04_Variables_and_Scope/hoisting_and_the_tdz/README.md) — the temporal dead zone behind the ReferenceError
- [Live bindings](../live_bindings/README.md) — why the ES module sees the value once it is set
- [`require` and ES modules](../require_and_esm_interop/README.md) — require() of an ES module that is still loading
- [Built-in error types](../../12_Errors/error_types/README.md) — when a ReferenceError appears, beside the other built-in errors

## Sources to start from

- [ECMA-262 — Cyclic Module Records ↗](https://tc39.es/ecma262/#sec-cyclic-module-records)
- [Node.js 24 — Modules: cycles ↗](https://nodejs.org/docs/latest-v24.x/api/modules.html#cycles)
