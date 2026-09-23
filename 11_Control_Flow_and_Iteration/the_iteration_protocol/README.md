# The iteration protocol — `Symbol.iterator`, `next()` and `done`

**Level:** 201 · for anyone who wants to make their own objects loopable

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Any object whose `[Symbol.iterator]()` returns something with a `next()` method works with `for...of`, spread and destructuring — and when a `break` or a short destructuring stops early, JavaScript calls the iterator's `return()` so it can clean up.

**Keywords:** `Symbol.iterator`, `iterable`, `next`, `done`

## What the finished page will answer

- What are the two objects in the protocol — the iterable and the iterator — and which one has `next()`?
- Which features call `[Symbol.iterator]()`: `for...of`, spread, array destructuring, `Array.from`, `new Map(...)`, `Promise.all` — and does object spread?
- When is `return()` called — after `break`, after a `throw` inside the loop, after destructuring fewer values than there are — and why not after a loop that runs to the end?
- What happens when `next()` returns something that is not an object?
- Why can an array be walked twice while an iterator is used up after one pass?

## Examples it will need

- [ ] `the_iteration_protocol_range_js.js` — a hand-written range used by `for...of`, spread, destructuring and `Array.from`, with a log line for each `next()` call
- [ ] `the_iteration_protocol_return_js.js` — when `return()` is called: after `break`, after a throw, after short destructuring, and not after a full loop

## See also

- [Generators](../generators/README.md) — the short way to write an iterator
- [`for...in` and `for...of`](../for_in_and_for_of/README.md) — the loop that drives the protocol
- [Destructuring](../../04_Variables_and_Scope/destructuring/README.md) — array destructuring pulls its values through `next()`
- [Well-known symbols](../../17_Metaprogramming/well_known_symbols/README.md) — `Symbol.iterator` among the other well-known symbols
- [Iterator helpers](../iterator_helpers/README.md) — methods every built-in iterator inherits
- [Rust: Implementing `Iterator` ↗](https://masiarek.github.io/rust-learning-library/24_Iterators/implementing_iterator/index.html) — the Rust protocol: one `next` returning an `Option`

## Sources to start from

- [MDN — Iteration protocols ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [ECMA-262 — Iteration ↗](https://tc39.es/ecma262/#sec-iteration)
- [ECMA-262 — IteratorClose ↗](https://tc39.es/ecma262/#sec-iteratorclose)
