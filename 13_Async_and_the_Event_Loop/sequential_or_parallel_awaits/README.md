# Sequential or parallel — `await` in a loop versus `Promise.all`

**Level:** 201 · for anyone whose async code is slower than it should be

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Three 100 ms waits awaited one by one in a loop take about 300 ms; started together and handed to `Promise.all`, they take about 100 ms — each operation starts when its promise is created, not when it is awaited.

**Keywords:** `Promise.all`, `no-await-in-loop`

## What the finished page will answer

- How long do three 100 ms sleeps take awaited one by one in a `for...of` loop, and passed together to `Promise.all`?
- Why does `const a = f(); const b = g(); await a; await b;` already run `f` and `g` at the same time?
- Why does `array.forEach(async (x) => { await ... })` return before any of the work has finished, and what do `for...of` with `await` and `Promise.all(array.map(...))` do instead?
- When must the awaits stay one at a time — each step needs the previous result, or a server limits how many requests you may send?
- How do you run 20 jobs with at most 5 in flight at once?
- What does TypeScript infer for `await Promise.all([numberPromise, stringPromise])`?

## Examples it will need

- [ ] `sequential_or_parallel_timing_js.js` — the elapsed time, rounded to 100 ms, for three sleeps awaited in a loop and through `Promise.all`
- [ ] `sequential_or_parallel_foreach_js.js` — how many async `forEach` callbacks had finished when `forEach` returned, and 50 ms later
- [ ] `sequential_or_parallel_limit_js.js` — the most jobs in flight at once when 20 jobs run through a pool of 5

## See also

- [`async` and `await`](../async_and_await/README.md) — what one `await` does
- [`all`, `allSettled`, `race` and `any`](../promise_combinators/README.md) — `all`, `allSettled`, `race` and `any` compared
- [`map`, `filter`, `reduce` and friends](../../08_Arrays_and_Collections/map_filter_reduce/README.md) — `map` keeps the promises; `forEach` throws them away
- [One thread per agent](../../20_Workers_and_Parallelism/one_thread_per_agent/README.md) — waiting in parallel is not computing in parallel
- [Concurrency: Join ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/async/join/index.html) — join: waiting for several tasks at once
- [Concurrency: I/O-bound and CPU-bound work ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/foundations/io_bound_and_cpu_bound/index.html) — why overlapping waits helps only I/O-bound work

## Sources to start from

- [MDN — Promise.all() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [ESLint — no-await-in-loop ↗](https://eslint.org/docs/latest/rules/no-await-in-loop)
