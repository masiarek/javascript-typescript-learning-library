# 05 — Functions

**One line:** A function is an object like any other, stored, passed and given properties, and for every function except an arrow, `this` is chosen by the call rather than by the place the function was written.

The pages follow the questions a function raises, in the order you meet them. How do you write one? The three forms, and hoisting. What is `this` inside it? Whatever the call chose, unless it is an arrow or `call`, `apply` or `bind` chose for you. What does it take? Defaults, rest and `arguments`. What is it as a value? An object with properties, passed to and returned from other functions. What does a call cost? A stack frame, and Node stops a recursion that uses too many.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Declarations, expressions and arrows](three_ways_to_write_a_function/README.md) | 101 | Only a function declaration is hoisted with its body, so `declared()` works on the line above `function declared() {}`; the same early call throws a `TypeError` for a `var` function expression and a `ReferenceError` for an arrow in a `const`. | stub |
| [`this`](this_is_set_by_the_call/README.md) | 201 | `this` is chosen by the call, not by where the function was written: `user.greet()` passes `user`, but `const g = user.greet; g()` passes `undefined` in a module and the global object in a sloppy CommonJS file. | stub |
| [Arrow functions](arrow_functions_and_this/README.md) | 201 | An arrow function has no `this` of its own — it uses the `this` of the code around it, and `call`, `apply` and `bind` cannot change that — and it has no `arguments` and no `prototype`, so `new` on it throws a `TypeError`. | stub |
| [`call`, `apply` and `bind`](call_apply_and_bind/README.md) | 201 | `call` and `apply` choose `this` for one call; `bind` returns a new function whose `this` no later `call` or `bind` can change — yet `new` on a bound function still builds a fresh object and ignores the bound `this`. | stub |
| [Parameters](parameters_defaults_and_rest/README.md) | 101 | A default parameter is evaluated again at every call that passes `undefined` — not `null` — so `(item, list = [])` gives each call a fresh array, where Python's `lst=[]` is built once and shared; a rest parameter is a real array, `arguments` is not. | stub |
| [Functions are objects](functions_are_objects/README.md) | 101 | A function is an object: it takes new properties, and its own `length` stops counting at the first default parameter — `(a, b = 1, c) => {}` has length `1` — while `name` is inferred from the variable an anonymous function is assigned to. | stub |
| [Higher-order functions](higher_order_functions/README.md) | 101 | A function that takes a callback decides what arguments the callback gets: `["1", "2", "3"].map(parseInt)` is `[1, NaN, NaN]` because `map` also passes each index, which `parseInt` reads as a radix — and `tsc` accepts the call without a word. | stub |
| [Recursion and the call stack](recursion_and_the_call_stack/README.md) | 201 | In Node 25 a one-line recursive function overflows after about 12,000 calls with a catchable `RangeError`; `--stack-size` moves that limit, but past the operating system's stack the process dies with a segfault, and the spec's proper tail calls never shipped in V8. | stub |
<!-- /lessons -->

## Boundaries

Closures and scope are in Variables and scope; callbacks called later, `async` functions and promises are in Async and the event loop; types for parameters and return values are in Everyday types.
