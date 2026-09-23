# The rendering loop — `requestAnimationFrame`, and why a long task freezes the page

**Level:** 201 · for readers who have animated something on a page

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** The page repaints only between tasks: text changed 1,000 times inside one loop is painted once, and while a 3-second loop runs no click is handled and nothing the script changes appears; `requestAnimationFrame` runs a callback just before the next paint.

**Keywords:** `requestAnimationFrame`, `long task`, `cancelAnimationFrame`

## What the finished page will answer

- How many times is a counter that a loop changes 1,000 times painted, and how many frames pass meanwhile?
- What happens to a click made during a 3-second loop: is it lost, or handled after the loop ends?
- How many `requestAnimationFrame` callbacks run in one second in a visible tab, and how many in a background tab?
- Where do microtasks run relative to painting, and can a long chain of promises hold off a paint?
- What does a `PerformanceObserver` for `longtask` report for a 200 ms click handler?

## Examples it will need

- [ ] `rendering_loop_long_task_page.html` — (browser — runner to be decided) a counter updated 1,000 times inside one loop, the frames painted meanwhile, and a click made during a 3-second loop
- [ ] `rendering_loop_raf_rate_page.html` — (browser — runner to be decided) requestAnimationFrame callbacks counted for one second, visible and in a background tab

## See also

- [Blocking the event loop](../../13_Async_and_the_Event_Loop/blocking_the_event_loop/README.md) — the same freeze in Node, where timers stop
- [Microtasks and tasks](../../13_Async_and_the_Event_Loop/microtasks_and_tasks/README.md) — tasks, microtasks, and where painting fits
- [The event loop](../../13_Async_and_the_Event_Loop/the_event_loop/README.md) — the loop in Node, which has no rendering step
- [Worker threads](../../20_Workers_and_Parallelism/worker_threads/README.md) — moving long work off the main thread
- [Concurrency: Why may only one thread touch the user interface? ↗](https://masiarek.github.io/concurrency-learning-library/06_Async/the_ui_thread/index.html) — why only one thread may touch the user interface
- [Concurrency: UI thread ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/units_of_execution/ui_thread/index.html) — the UI thread as a concept

## Sources to start from

- [HTML Standard — Event loop processing model ↗](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model)
- [MDN — Window: requestAnimationFrame() method ↗](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)
- [MDN — PerformanceLongTaskTiming ↗](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming)
