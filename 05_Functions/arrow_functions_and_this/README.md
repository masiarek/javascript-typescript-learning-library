# Arrow functions — no `this`, no `arguments`, no `new`

**Level:** 201 · for anyone who writes callbacks as arrows

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** An arrow function has no `this` of its own — it uses the `this` of the code around it, and `call`, `apply` and `bind` cannot change that — and it has no `arguments` and no `prototype`, so `new` on it throws a `TypeError`.

**Keywords:** `=>`, `arrow function`

## What the finished page will answer

- What does an arrow used as an object-literal method see as `this`, and why is that `undefined` in an ES module?
- Why does an arrow inside a method see the method's `this`, and what did the same code need before arrows (`const self = this`)?
- What do `f.call(obj)`, `f.apply(obj)` and `f.bind(obj)()` return for an arrow `f` that returns `this`?
- What does `arguments` refer to inside an arrow: in a function, at the top of an ES module (`ReferenceError`), and at the top of a CommonJS file (the module wrapper's five arguments)?
- What does `new` on an arrow throw, and what does `'prototype' in arrow` print?

## Examples it will need

- [ ] `arrow_functions_this_js.js` — an arrow and a method on the same object, called directly, through call and through bind, with the this each one saw
- [ ] `arrow_functions_no_new_js.js` — new on an arrow and its TypeError, whether each form has a prototype, and arguments read inside an arrow nested in a function
- [ ] `arrow_functions_new_tserror.ts` — tsc's TS7009 error for new on an arrow function, whose target lacks a construct signature

## See also

- [`this`](../this_is_set_by_the_call/README.md) — the rule arrows opt out of
- [`call`, `apply` and `bind`](../call_apply_and_bind/README.md) — the three methods that cannot move an arrow's this
- [Parameters](../parameters_defaults_and_rest/README.md) — rest parameters, what an arrow uses instead of arguments
- [Closures](../../04_Variables_and_Scope/closures/README.md) — an arrow captures this the way a closure captures a variable
- [Rust: What a closure is ↗](https://masiarek.github.io/rust-learning-library/23_Closures/what_a_closure_is/index.html) — how a Rust closure captures what it sees where it was written

## Sources to start from

- [MDN — Arrow function expressions ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [ECMA-262 — Arrow Function Definitions ↗](https://tc39.es/ecma262/#sec-arrow-function-definitions)
