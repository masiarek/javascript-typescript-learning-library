# Cancellation — `AbortController` and `AbortSignal`

**Level:** 301 · for anyone who needs to stop a request or a wait early

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Calling `abort()` stops nothing by itself — it sets `signal.aborted` and fires one `abort` event — so code that never checks the signal runs to the end, while an API that listens, such as `fetch` or the `timers/promises` sleep, rejects with an `AbortError`.

**Keywords:** `AbortController`, `AbortSignal`, `AbortSignal.timeout`, `AbortSignal.any`, `AbortError`

## What the finished page will answer

- What changes when you call `controller.abort()` — `signal.aborted`, `signal.reason`, the `abort` event — and what keeps running?
- How does your own async function honour a signal: `signal.throwIfAborted()` between steps, or an `abort` listener?
- What does `AbortSignal.timeout(ms)` abort with, and how is that different from calling `abort()` yourself?
- Which signal does `AbortSignal.any([a, b])` follow, and which reason does it carry?
- What happens to a listener added after the abort, and to a second call to `abort()`?
- Which error comes back: a `DOMException` named `AbortError` from `fetch`, or Node's own `AbortError` with code `ABORT_ERR` from `timers/promises`?

## Examples it will need

- [ ] `cancellation_ignored_and_honoured_js.js` — a loop that ignores the signal finishing anyway, beside one that calls `throwIfAborted` and stops
- [ ] `cancellation_timeout_and_any_js.js` — the reasons from `AbortSignal.timeout` and `AbortSignal.any`, and the error each API rejects with

## See also

- [`all`, `allSettled`, `race` and `any`](../promise_combinators/README.md) — `race` stops waiting, but not the work
- [Timers](../timers/README.md) — timers that take a signal
- [HTTP](../../19_Node_Runtime/http_server_and_fetch/README.md) — aborting a `fetch` in flight
- [Custom errors and `cause`](../../12_Errors/custom_errors_and_cause/README.md) — the `cause` a timeout abort carries
- [Concurrency: How is a running task told to stop, and does it? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/cancelling_an_async_task/index.html) — how other runtimes tell a task to stop
- [Go: One `cancel` reaches every goroutine ↗](https://masiarek.github.io/go-learning-library/05_Context/cancel_reaches_every_goroutine/index.html) — the context cancel in Go, the closest relative

## Sources to start from

- [MDN — AbortController ↗](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- [MDN — AbortSignal ↗](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)
- [DOM Standard — Aborting ongoing activities ↗](https://dom.spec.whatwg.org/#aborting-ongoing-activities)
