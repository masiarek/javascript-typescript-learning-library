# Generators — functions that pause at `yield`

**Level:** 201 · for anyone who has written an iterator by hand

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Calling a generator function runs none of its body: each `next()` runs it to the following `yield`, the argument of `next(x)` becomes that `yield`'s value, and the generator object can be walked only once.

**Keywords:** `function*`, `yield`, `yield*`, `Generator`

## What the finished page will answer

- What runs when you call a generator function, and what runs on each `next()`?
- Where does the value passed to `next(x)` go, and why is the argument of the first `next()` lost?
- Why does `[...gen()]` drop the value of a `return` statement that `next()` reports as `{ value, done: true }`?
- Why is a generator object its own iterator, so that a second `for...of` over it finds nothing?
- What do `g.return(v)` and `g.throw(err)` do to a generator paused inside `try...finally`?
- How does `yield*` hand over to another iterable, and what does the `yield*` expression evaluate to?

## Examples it will need

- [ ] `generators_step_by_step_js.js` — a log line from the body and from the caller for every `next()` call, with the value passed in and the result object
- [ ] `generators_return_and_throw_js.js` — what `return()` and `throw()` do to a generator paused in `try...finally`, and what `yield*` evaluates to
- [ ] `generators_next_type_tserror.ts` — tsc's TS2345 for passing a string to `next()` on a `Generator<number, string, boolean>`

## See also

- [The iteration protocol](../the_iteration_protocol/README.md) — the protocol a generator implements for you
- [Iterator helpers](../iterator_helpers/README.md) — lazy `map` and `take` over an endless generator
- [Async iteration](../async_iteration/README.md) — async generators, which may `await` between yields
- [`finally`](../../12_Errors/finally/README.md) — a paused generator's `finally` waits for `return()`
- [Concurrency: Coroutine ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/units_of_execution/coroutine/index.html) — a generator is a coroutine that yields values to its caller
- [Concurrency: Async functions as state machines ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/async/async_state_machine/index.html) — the same pause-and-resume machinery under `async` functions

## Sources to start from

- [MDN — function* ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [MDN — Generator ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
- [ECMA-262 — Generator Objects ↗](https://tc39.es/ecma262/#sec-generator-objects)
