# The event loop — how Node chooses what runs next

**Level:** 201 · for anyone who knows callbacks run later and wants to know when

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Node's loop visits its queues in a fixed cycle — expired timers, then I/O callbacks, then `setImmediate` callbacks, then close handlers — draining `process.nextTick` and promise callbacks after each callback, so inside an I/O callback `setImmediate` always runs before `setTimeout(0)`.

**Keywords:** `event loop`, `libuv`

## What the finished page will answer

- What are the phases of one turn of Node's loop, and which kind of callback runs in each?
- Inside an I/O callback, why does `setImmediate` always run before `setTimeout(0)`, while from the main module the order changes from run to run?
- When does Node empty the `process.nextTick` queue and the promise queue — after every callback, or once per phase?
- What keeps the loop alive, and why does a process whose only work is a pending promise exit?
- How does the loop wait when nothing is ready, and where does the thread pool behind `fs` and `crypto` come in?

## Examples it will need

- [ ] `the_event_loop_phases_js.js` — `process.nextTick`, `setImmediate` and `setTimeout(0)` queued inside an I/O callback, in the order they run
- [ ] `the_event_loop_microtasks_between_js.js` — a promise queued by the first of two timers running before the second timer
- [ ] `the_event_loop_keeps_alive_sh.sh` — output and exit status for a process holding a pending timer, an unref'd timer, and only a pending promise

## See also

- [Run to completion](../run_to_completion/README.md) — each callback the loop starts runs to the end
- [Microtasks and tasks](../microtasks_and_tasks/README.md) — the queues drained between callbacks
- [Timers](../timers/README.md) — the timers phase and `setImmediate`'s check phase
- [The rendering loop](../../21_The_Browser/the_rendering_loop/README.md) — the browser's loop, which also paints
- [Concurrency: What does an event loop do all day? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/what_an_event_loop_does/index.html) — an event loop written out in thirty lines
- [Concurrency: How does one thread watch a thousand sockets? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/io_multiplexing_under_the_loop/index.html) — how one thread waits on a thousand sockets
- [Concurrency: Event loop ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/scheduling/event_loop/index.html) — the event loop as a scheduling idea

## Sources to start from

- [Node.js — The Node.js Event Loop ↗](https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick)
- [Node.js 24 — timers: setImmediate ↗](https://nodejs.org/docs/latest-v24.x/api/timers.html#setimmediatecallback-args)
