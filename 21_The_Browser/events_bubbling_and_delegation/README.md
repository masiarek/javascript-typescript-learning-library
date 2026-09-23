# DOM events — capture, bubbling and delegation

**Level:** 201 · for readers who have written addEventListener

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A click is dispatched along a path through the tree — down from `window` in the capture phase, at the target, then back up in the bubble phase — so one listener on a `<ul>` hears clicks on every `<li>`, even items added later.

**Keywords:** `addEventListener`, `stopPropagation`, `event.target`, `event.currentTarget`, `event delegation`

## What the finished page will answer

- In what order do capture and bubble listeners on `window`, `document`, a `<ul>` and an `<li>` run for one click, and what is `eventPhase` in each?
- What are `event.target` and `event.currentTarget` in a listener on the `<ul>` when an `<li>` is clicked?
- What does `stopPropagation` stop, and what does `stopImmediatePropagation` stop as well?
- Which events do not bubble, such as `focus`, and what do `focusin` and delegation do about it?
- What happens when a Node `EventTarget` dispatches an `Event` created with `bubbles: true`?

## Examples it will need

- [ ] `events_bubbling_phases_page.html` — (browser — runner to be decided) the listener log for one click through window, document, ul and li, capture and bubble, with eventPhase
- [ ] `events_delegation_page.html` — (browser — runner to be decided) a click on an li added after the listener: event.target and event.currentTarget
- [ ] `events_bubbling_eventtarget_in_node_js.js` — a Node EventTarget dispatching an Event with bubbles: true, where only its own listeners run because there is no tree

## See also

- [The DOM](../the_dom_is_not_javascript/README.md) — where `addEventListener` comes from
- [`EventEmitter`](../../19_Node_Runtime/events_and_eventemitter/README.md) — the emitter in Node, which has no tree to travel
- [`this`](../../05_Functions/this_is_set_by_the_call/README.md) — `this` inside a listener
- [Arrow functions](../../05_Functions/arrow_functions_and_this/README.md) — why an arrow listener's `this` is not the element
- [Concurrency: How does one event reach every subscriber? ↗](https://masiarek.github.io/concurrency-learning-library/05_Message_Passing/publish_and_subscribe/index.html) — one event reaching many listeners, in other languages

## Sources to start from

- [DOM Standard — Dispatching events ↗](https://dom.spec.whatwg.org/#dispatching-events)
- [MDN — Event bubbling ↗](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [MDN — Event: currentTarget property ↗](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)
