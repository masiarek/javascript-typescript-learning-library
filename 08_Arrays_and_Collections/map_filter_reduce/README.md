# `map`, `filter`, `reduce` and friends — the iteration methods

**Level:** 101 · for anyone who has written a for loop over an array

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Every callback gets the element, its index and the whole array, so `["1", "2", "3"].map(parseInt)` hands each index to `parseInt` as a radix and returns `[1, NaN, NaN]`; `reduce` with no initial value throws a `TypeError` on an empty array, where `reduce(fn, 0)` returns `0`.

**Keywords:** `map`, `filter`, `reduce`, `forEach`, `find`, `some`

## What the finished page will answer

- What three arguments does every callback receive, and why does `["1", "2", "3"].map(parseInt)` return `[1, NaN, NaN]`?
- Why does `[].reduce((a, b) => a + b)` throw, and what does `[5].reduce(fn)` return without ever calling `fn`?
- How do you stop a `forEach` early, and which methods (`some`, `every`, `find`) stop on their own?
- What do `find`, `findIndex` and `filter` return when nothing matches?
- If a callback pushes onto the array it is iterating, does `map` visit the new elements?
- Why does TypeScript accept `["1", "2", "3"].map(parseInt)` without a complaint?

## Examples it will need

- [ ] `map_filter_reduce_callback_args_js.js` — the three arguments each callback receives, then `["1", "2", "3"]` mapped with `parseInt`, `Number` and `(s) => parseInt(s, 10)`
- [ ] `map_filter_reduce_reduce_js.js` — `reduce` summing, finding a maximum and building an object, then an empty array with and without an initial value (the `TypeError` caught and printed)
- [ ] `map_filter_reduce_parseint_ts.ts` — the `map(parseInt)` line type-checked cleanly and run, printing `[ 1, NaN, NaN ]`: the index-as-radix mistake is invisible to the types

## See also

- [Higher-order functions](../../05_Functions/higher_order_functions/README.md) — functions that take functions, which is what these methods are
- [Parsing numbers](../../10_Numbers_and_Math/parsing_numbers/README.md) — what `parseInt` does with a radix it did not expect
- [Iterator helpers](../../11_Control_Flow_and_Iteration/iterator_helpers/README.md) — lazy `map` and `filter` on iterators instead of arrays
- [Holes](../holes_and_sparse_arrays/README.md) — which callbacks skip empty slots
- [Sequential or parallel](../../13_Async_and_the_Event_Loop/sequential_or_parallel_awaits/README.md) — why an `async` callback in `forEach` is never awaited
- [Rust: Iterators are lazy ↗](https://masiarek.github.io/rust-learning-library/24_Iterators/iterators_are_lazy/index.html) — in Rust, `map` computes nothing until consumed; an array's `map` runs at once
- [Rust: `fold` and `reduce` ↗](https://masiarek.github.io/rust-learning-library/24_Iterators/fold_and_reduce/index.html) — in Rust, `fold` takes the initial value and `reduce` returns an `Option`

## Sources to start from

- [MDN — Array.prototype.map() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN — Array.prototype.reduce() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [ECMA-262 — Array.prototype.reduce ↗](https://tc39.es/ecma262/#sec-array.prototype.reduce)
