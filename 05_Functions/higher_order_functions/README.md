# Higher-order functions — functions that take and return functions

**Level:** 101 · for anyone who has passed a function to `map` or `sort`

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A function that takes a callback decides what arguments the callback gets: `["1", "2", "3"].map(parseInt)` is `[1, NaN, NaN]` because `map` also passes each index, which `parseInt` reads as a radix — and `tsc` accepts the call without a word.

**Keywords:** `higher-order function`

## What the finished page will answer

- What does `["1", "2", "3"].map(parseInt)` return, which three arguments does `map` pass on each call, and how do `map((s) => parseInt(s, 10))` and `map(Number)` fix it?
- Why does `tsc --strict` accept `map(parseInt)`: how does `parseInt`'s optional `radix` line up with `map`'s `index`?
- How do you write a function that returns a function (`twice`, `once`, `memoize`), and what does each keep between calls?
- In what order do `compose(f, g)` and `pipe(f, g)` run their functions, and what does each return for `x = 1`?

## Examples it will need

- [ ] `higher_order_map_parseint_js.js` — map(parseInt) beside the three fixes, with the arguments map passes logged on each call
- [ ] `higher_order_returning_functions_js.js` — twice, once, memoize, compose and pipe built from closures, with a counter showing which calls ran the wrapped function
- [ ] `higher_order_parseint_typechecks_ts.ts` — the same map(parseInt) call, which passes tsc --strict and still prints [ 1, NaN, NaN ]

## See also

- [`map`, `filter`, `reduce` and friends](../../08_Arrays_and_Collections/map_filter_reduce/README.md) — the higher-order methods every array already has
- [Closures](../../04_Variables_and_Scope/closures/README.md) — why a returned function still sees its maker's variables
- [Parsing numbers](../../10_Numbers_and_Math/parsing_numbers/README.md) — what parseInt does with the radix map hands it
- [Callbacks](../../13_Async_and_the_Event_Loop/callbacks/README.md) — functions passed now and called later
- [Rust: Iterators are lazy ↗](https://masiarek.github.io/rust-learning-library/24_Iterators/iterators_are_lazy/index.html) — how Rust's map differs: a lazy adapter, where an array's map runs at once
- [Concurrency: Where does a callback keep its state? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/a_callback_and_its_state/index.html) — where a callback keeps the state it needs, across languages

## Sources to start from

- [MDN — Array.prototype.map() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN — First-class function ↗](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
- [ECMA-262 — parseInt ↗](https://tc39.es/ecma262/#sec-parseint-string-radix)
