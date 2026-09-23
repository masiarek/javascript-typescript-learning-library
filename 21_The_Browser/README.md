# 21 — The browser

**One line:** Everything a page does beyond computing — its document, events, painting, network rules and storage — comes from the browser, not from JavaScript, and each part has rules that Node never enforces.

This chapter is about the host, not the language. It starts with the DOM as an API the browser provides, then how events travel through the document tree. Next comes the rendering loop, which paints only between tasks, then `fetch` under the browser's cross-origin rules, then the places a page can keep data, and last how `<script>` tags load code. Node cannot run these pages' browser examples; where Node offers a contrast, a second example runs it.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [The DOM](the_dom_is_not_javascript/README.md) | 101 | `document`, `window`, `setTimeout` and `console` are not JavaScript: ECMA-262 defines none of them. A browser supplies them from the DOM and HTML standards, and Node supplies its own set, where `typeof document` is `"undefined"` but `setTimeout` exists. | stub |
| [DOM events](events_bubbling_and_delegation/README.md) | 201 | A click is dispatched along a path through the tree — down from `window` in the capture phase, at the target, then back up in the bubble phase — so one listener on a `<ul>` hears clicks on every `<li>`, even items added later. | stub |
| [The rendering loop](the_rendering_loop/README.md) | 201 | The page repaints only between tasks: text changed 1,000 times inside one loop is painted once, and while a 3-second loop runs no click is handled and nothing the script changes appears; `requestAnimationFrame` runs a callback just before the next paint. | stub |
| [`fetch` and CORS](fetch_and_cors/README.md) | 201 | CORS is enforced by the browser, not the server: a simple cross-origin `GET` still reaches the server and runs, but without `Access-Control-Allow-Origin` in the reply the page's `fetch` rejects with a bare `TypeError`, while the same request from Node succeeds. | stub |
| [Storage](web_storage_and_cookies/README.md) | 201 | `localStorage` keeps only strings — `setItem("n", 1)` reads back `"1"` and an object becomes `"[object Object]"` — and it is synchronous; cookies ride along with every request to their site, and an `HttpOnly` one is invisible to `document.cookie`. | stub |
| [Loading scripts](script_loading/README.md) | 201 | A plain `<script src>` stops the HTML parser until it has downloaded and run; `defer` runs scripts after parsing in document order, `async` runs each the moment it arrives in any order, and `type="module"` behaves like `defer` without being asked. | stub |
<!-- /lessons -->

## Boundaries

The event loop itself is in Async and the event loop; `fetch` in Node, where no CORS applies, is in The Node.js runtime; ES modules as a language feature are in Modules.
