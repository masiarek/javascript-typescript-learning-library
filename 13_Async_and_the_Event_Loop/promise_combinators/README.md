# `all`, `allSettled`, `race` and `any` — four ways to wait for many

**Level:** 201 · for anyone waiting on more than one promise

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `Promise.all` rejects at the first failure, `allSettled` never rejects, `race` takes whichever settles first even if it failed, and `any` takes the first success, rejecting with an `AggregateError` only when all fail — and none of them stops the others.

**Keywords:** `Promise.all`, `Promise.allSettled`, `Promise.race`, `Promise.any`, `AggregateError`

## What the finished page will answer

- What does each of the four settle with for the same mix of a slow success and a fast failure?
- What do they do with an empty array — why does `Promise.all([])` fulfil at once, while `await Promise.race([])` never settles and ends a module with exit status 13?
- After `Promise.all` has rejected, do the other operations stop, and does a second rejection among them count as unhandled?
- What is in the `errors` array of the `AggregateError` from `Promise.any`, and in which order?
- How do you build a timeout from `Promise.race` and a timer, and why does the losing timer keep the process alive unless you clear it?
- How does TypeScript type an `allSettled` result, and why must you check `status` before reading `value`?

## Examples it will need

- [ ] `promise_combinators_four_ways_js.js` — what `all`, `allSettled`, `race` and `any` settle with for the same inputs, including all-fail and empty arrays
- [ ] `promise_combinators_race_timeout_js.js` — a race between a slow job and a timeout, and whether the slow job still finished afterwards
- [ ] `promise_combinators_settled_tserror.ts` — tsc's TS2339 for reading `.value` on a `PromiseSettledResult` before checking `status`

## See also

- [Sequential or parallel](../sequential_or_parallel_awaits/README.md) — why starting everything first is faster
- [Cancellation](../cancellation_with_abortcontroller/README.md) — stopping the losers yourself
- [Built-in error types](../../12_Errors/error_types/README.md) — `AggregateError` beside the other built-in errors
- [Discriminated unions](../../24_Narrowing/discriminated_unions/README.md) — `status` is the tag that narrows an `allSettled` result
- [Go: The first error cancels the rest ↗](https://masiarek.github.io/go-learning-library/06_Patterns/first_error_cancels_the_rest/index.html) — the errgroup in Go cancels the rest; `Promise.all` does not
- [Concurrency: What happens to the work when an await times out? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/a_timeout_on_an_await/index.html) — what happens to the work when an await times out

## Sources to start from

- [MDN — Promise.allSettled() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
- [MDN — Promise.any() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)
- [ECMA-262 — Promise.any ↗](https://tc39.es/ecma262/#sec-promise.any)
