# `this` — decided by how a function is called, not where it is written

**Level:** 201 · for anyone who has passed a method as a callback and lost `this`

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `this` is chosen by the call, not by where the function was written: `user.greet()` passes `user`, but `const g = user.greet; g()` passes `undefined` in a module and the global object in a sloppy CommonJS file.

**Keywords:** `this`

## What the finished page will answer

- What is `this` inside one function called as `obj.f()`, as `f()`, as `f.call(x)` and as `new f()`?
- Why is a detached method's `this` `undefined` in an `.mjs` file but `globalThis` in a `.cjs` file?
- What `this` does a function passed to `forEach` get, and to `setTimeout` in Node, and what are the three usual fixes (an arrow, `bind`, `forEach`'s `thisArg`)?
- Does an ordinary function nested inside a method see the method's `this`?
- What is `this` at the top level of an ES module, of a CommonJS module, and in `node -p`?

## Examples it will need

- [ ] `this_set_by_call_four_ways_js.js` — one function called as a method, as a plain call, through call and with new, and what this was each time
- [ ] `this_set_detached_method_sh.sh` — the same detached method call run as an .mjs and as a .cjs file: undefined in the module, globalThis in the script
- [ ] `this_set_in_callbacks_js.js` — a method passed to forEach and to setTimeout, the this each callback received, then the three fixes

## See also

- [Arrow functions](../arrow_functions_and_this/README.md) — the functions that take this from the code around them
- [`call`, `apply` and `bind`](../call_apply_and_bind/README.md) — choosing this explicitly instead of by the call's shape
- [Strict mode](../../01_Running_JavaScript/strict_mode/README.md) — why a lost this is undefined in one mode and global in the other
- [`this` in types](../../28_Classes_in_TypeScript/this_types/README.md) — the this parameter, which catches a detached method only when called directly
- [Rust: `impl` blocks ↗](https://masiarek.github.io/rust-learning-library/16_Structs/impl_blocks/index.html) — how Rust avoids the question: self is a parameter the method declares

## Sources to start from

- [MDN — this ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [ECMA-262 — OrdinaryCallBindThis ↗](https://tc39.es/ecma262/#sec-ordinarycallbindthis)
