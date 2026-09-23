# `call`, `apply` and `bind` — choosing `this` yourself

**Level:** 201 · for anyone who has seen `.bind(this)` and wondered what it fixes

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `call` and `apply` choose `this` for one call; `bind` returns a new function whose `this` no later `call` or `bind` can change — yet `new` on a bound function still builds a fresh object and ignores the bound `this`.

**Keywords:** `call`, `apply`, `bind`

## What the finished page will answer

- What is the one difference between `call` and `apply`, and what does `f.apply(obj, args)` do that `f(...args)` cannot?
- What does a bound function return when you `call` it with another `this`, or `bind` it a second time?
- Which arguments does `bind` fix in advance, and what are the bound function's `name` and `length`?
- What happens to the bound `this`, and to the bound arguments, when a bound function is called with `new`?
- What does `typeof this` print after `f.call(5)` in a module, and in a sloppy script?

## Examples it will need

- [ ] `call_apply_bind_compared_js.js` — one function run through call, apply and bind, then the bound version called with another this, bound again, and constructed with new
- [ ] `call_apply_bind_primitive_this_sh.sh` — typeof this after f.call(5) and this after f.call(null), run as a module and as a sloppy .cjs script
- [ ] `call_apply_bind_checked_tserror.ts` — tsc's errors for a missing argument to call (TS2554), a wrong type in apply's array (TS2322) and a wrong type passed to a bound function (TS2345)

## See also

- [`this`](../this_is_set_by_the_call/README.md) — the default these three methods override
- [Arrow functions](../arrow_functions_and_this/README.md) — the functions whose this none of the three can change
- [`new`](../../07_Prototypes_and_Classes/constructors_and_new/README.md) — why new ignores a bound this
- [`strict`](../../22_TypeScript_Basics/strict_mode_in_typescript/README.md) — strictBindCallApply, the flag that type-checks these calls
- [Rust: `impl` blocks ↗](https://masiarek.github.io/rust-learning-library/16_Structs/impl_blocks/index.html) — how Rust treats a method: an associated function whose first parameter is self

## Sources to start from

- [MDN — Function.prototype.call() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [MDN — Function.prototype.bind() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [ECMA-262 — Bound Function Exotic Objects ↗](https://tc39.es/ecma262/#sec-bound-function-exotic-objects)
