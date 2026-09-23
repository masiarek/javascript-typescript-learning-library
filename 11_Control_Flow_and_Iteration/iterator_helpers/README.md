# Iterator helpers — `map`, `filter` and `take` on a lazy sequence

**Level:** 201 · for anyone who has chained map and filter on arrays

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `map`, `filter`, `take` and the other methods on `Iterator.prototype` do nothing until a value is asked for, so `naturals().map(square).take(3)` works on an endless generator and calls `square` exactly three times.

**Keywords:** `Iterator`, `Iterator.from`, `take`, `drop`, `toArray`

## What the finished page will answer

- How many times has the `map` callback run in `naturals().map(f).take(3)` before `toArray()`, and how many times after?
- What is the difference between `[1, 2, 3].map(f)` and `[1, 2, 3].values().map(f)` — what comes back, and when does `f` run?
- Which helpers return a new iterator (`map`, `filter`, `take`, `drop`, `flatMap`) and which use it up (`toArray`, `reduce`, `some`, `every`, `find`, `forEach`)?
- Why does a helper chain give nothing the second time you spread it?
- What does `Iterator.from` add to a hand-written object that has only a `next()` method?
- Which Node versions have the helpers, and is `Iterator.concat`, already in the draft spec, one of them?

## Examples it will need

- [ ] `iterator_helpers_lazy_js.js` — a count of `map` calls before and after `toArray` on an endless generator, beside the eager array `map`
- [ ] `iterator_helpers_from_js.js` — `Iterator.from` wrapping a bare `next()` object, then `drop`, `take` and `toArray` on it

## See also

- [`map`, `filter`, `reduce` and friends](../../08_Arrays_and_Collections/map_filter_reduce/README.md) — the eager array methods with the same names
- [Generators](../generators/README.md) — endless sequences to take from
- [The iteration protocol](../the_iteration_protocol/README.md) — the `next()` every helper calls
- [`Map` and `Set`](../../08_Arrays_and_Collections/map_and_set/README.md) — a Map's `keys()` and `values()` return iterators with helpers
- [Rust: Iterators are lazy ↗](https://masiarek.github.io/rust-learning-library/24_Iterators/iterators_are_lazy/index.html) — the Rust iterator adapters, lazy in the same way
- [Rust: Adapters by job ↗](https://masiarek.github.io/rust-learning-library/24_Iterators/adapters_by_job/index.html) — the Rust adapters, grouped by what each is for

## Sources to start from

- [MDN — Iterator ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)
- [ECMA-262 — Iterator.prototype.take ↗](https://tc39.es/ecma262/#sec-iterator.prototype.take)
- [TC39 — Iterator helpers proposal ↗](https://github.com/tc39/proposal-iterator-helpers)
