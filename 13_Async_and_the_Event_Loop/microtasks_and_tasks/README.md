# Microtasks and tasks — why a resolved promise beats `setTimeout(0)`

**Level:** 201 · for anyone surprised by the order their output lines come out in

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Promise callbacks, `queueMicrotask` and `process.nextTick` all run before the next timer or I/O callback, so a promise chain that keeps queueing more starves `setTimeout(0)`; and `nextTick` beats promise callbacks in CommonJS but not at the top level of an ES module.

**Keywords:** `queueMicrotask`, `process.nextTick`, `microtask`

## What the finished page will answer

- In what order do `console.log`, a resolved promise's `then`, `queueMicrotask`, `process.nextTick` and `setTimeout(0)` print — in a CommonJS file, and in an ES module?
- Why does the ES module order differ only at the top level, and what order do the same calls give inside a timer callback?
- How many promise callbacks can run before a waiting `setTimeout(0)` gets its turn, and can a `process.nextTick` that queues itself freeze the process?
- Why does code after an `await` run before a `setTimeout(0)` that was scheduled first?
- When is `queueMicrotask` the right choice over `process.nextTick` or `setImmediate`?

## Examples it will need

- [ ] `microtasks_and_tasks_order_sh.sh` — the same calls run as an ES module and as CommonJS, one print order each
- [ ] `microtasks_and_tasks_starvation_js.js` — how many promise callbacks ran before a waiting `setTimeout(0)`
- [ ] `microtasks_and_tasks_inside_a_timer_js.js` — `process.nextTick` and a promise queued at the top level and again inside a timer callback, in the order they run

## See also

- [The event loop](../the_event_loop/README.md) — the loop that runs the tasks
- [Promises](../promises/README.md) — `then` callbacks are microtasks
- [`async` and `await`](../async_and_await/README.md) — code after `await` resumes as a microtask
- [ES modules and CommonJS](../../14_Modules/esm_and_commonjs/README.md) — the two module systems, which order `nextTick` differently
- [Concurrency: Starvation ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/hazards/starvation/index.html) — starvation: work that never gets its turn
- [Concurrency: Event loop ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/scheduling/event_loop/index.html) — the event loop as a scheduling idea

## Sources to start from

- [MDN — Using microtasks in JavaScript with queueMicrotask() ↗](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Node.js 24 — process.nextTick() ↗](https://nodejs.org/docs/latest-v24.x/api/process.html#processnexttickcallback-args)
- [ECMA-262 — HostEnqueuePromiseJob ↗](https://tc39.es/ecma262/#sec-hostenqueuepromisejob)
