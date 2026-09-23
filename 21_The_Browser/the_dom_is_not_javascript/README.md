# The DOM — the browser's API, not the language

**Level:** 101 · for anyone who has changed a web page with a script

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `document`, `window`, `setTimeout` and `console` are not JavaScript: ECMA-262 defines none of them. A browser supplies them from the DOM and HTML standards, and Node supplies its own set, where `typeof document` is `"undefined"` but `setTimeout` exists.

**Keywords:** `DOM`, `document`, `window`

## What the finished page will answer

- Which of `document`, `window`, `setTimeout`, `console`, `fetch` and `EventTarget` exist in Node, and which in a browser page?
- Which standard defines each of them: ECMA-262, the DOM Standard, the HTML Standard or the Console Standard?
- What does `document.querySelector` return when nothing matches, and what does a script in `<head>` get for an element further down?
- How do `window`, `globalThis` and `self` relate in a page and in a worker?

## Examples it will need

- [ ] `dom_is_not_javascript_node_globals_js.js` — `typeof` of document, window, setTimeout, console, fetch, EventTarget and navigator in Node
- [ ] `dom_is_not_javascript_page.html` — (browser — runner to be decided) the same list inside a page, then `document.title` read and changed

## See also

- [The language and the host](../../01_Running_JavaScript/the_language_and_the_host/README.md) — what ECMAScript defines and what a host adds
- [The global object](../../04_Variables_and_Scope/the_global_object/README.md) — `window`, `globalThis` and which declarations land there
- [DOM events](../events_bubbling_and_delegation/README.md) — the DOM's event model
- [`EventEmitter`](../../19_Node_Runtime/events_and_eventemitter/README.md) — the event API Node has instead
- [Rust: Rust in the browser ↗](https://masiarek.github.io/rust-learning-library/42_WebAssembly/rust_in_the_browser/index.html) — how Rust reaches the DOM: only through JavaScript glue

## Sources to start from

- [MDN — Document Object Model (DOM) ↗](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [DOM Standard ↗](https://dom.spec.whatwg.org/)
- [ECMA-262 — Host Layering Points ↗](https://tc39.es/ecma262/#sec-host-layering-points)
