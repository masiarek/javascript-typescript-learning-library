# `EventEmitter` — listeners, `once`, and the `error` event that crashes

**Level:** 201 · for readers who have attached a listener with on

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `emit` runs every listener synchronously, in the order added, before it returns; and an `'error'` event with no listener is not ignored like other events: `emit` throws it, and if nothing catches it the process exits with status 1.

**Keywords:** `EventEmitter`, `emit`, `once`, `error event`, `setMaxListeners`

## What the finished page will answer

- In what order do a `console.log` before `emit`, two listeners and a `console.log` after `emit` run, and what does `emit` return with and without listeners?
- What happens when `emit("error", err)` has no listener, and what when the error is a string rather than an `Error`?
- What does a `once` listener do after its first call, and what does `await events.once(emitter, "ready")` return?
- What warning does Node print when an 11th listener is added for one event, and what is it guessing about?
- How does `EventEmitter` differ from the `EventTarget` Node also has, and which one do streams use?

## Examples it will need

- [ ] `events_emit_is_synchronous_js.js` — the log order around `emit`, and `emit`'s return value with and without listeners
- [ ] `events_error_without_listener_sh.sh` — stderr and the exit status when `error` is emitted with no listener, then with one, then with a string
- [ ] `events_max_listeners_warning_sh.sh` — the MaxListenersExceededWarning after an 11th listener, and a `once` listener's count before and after it fires

## See also

- [DOM events](../../21_The_Browser/events_bubbling_and_delegation/README.md) — the DOM's events, which travel through a tree
- [Unhandled errors](../../12_Errors/unhandled_errors_in_node/README.md) — what the thrown `error` event does next
- [Callbacks](../../13_Async_and_the_Event_Loop/callbacks/README.md) — listeners are callbacks, called synchronously here
- [Memory leaks](../../18_Memory_and_Garbage_Collection/memory_leaks/README.md) — the listener nobody removes
- [Concurrency: How does one event reach every subscriber? ↗](https://masiarek.github.io/concurrency-learning-library/05_Message_Passing/publish_and_subscribe/index.html) — one event reaching every subscriber, in other languages
- [Concurrency: Event-driven programming ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/async/event_driven_programming/index.html) — event-driven programming as a model

## Sources to start from

- [Node.js 24 — Events: asynchronous vs. synchronous ↗](https://nodejs.org/docs/latest-v24.x/api/events.html#asynchronous-vs-synchronous)
- [Node.js 24 — Events: error events ↗](https://nodejs.org/docs/latest-v24.x/api/events.html#error-events)
- [Node.js 24 — emitter.setMaxListeners ↗](https://nodejs.org/docs/latest-v24.x/api/events.html#emittersetmaxlistenersn)
