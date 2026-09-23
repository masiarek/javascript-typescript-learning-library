# Loading scripts — `defer`, `async` and `type="module"`

**Level:** 201 · for readers who have added a script tag to a page

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A plain `<script src>` stops the HTML parser until it has downloaded and run; `defer` runs scripts after parsing in document order, `async` runs each the moment it arrives in any order, and `type="module"` behaves like `defer` without being asked.

**Keywords:** `defer`, `async attribute`, `DOMContentLoaded`, `<script type="module">`

## What the finished page will answer

- In what order do a plain, a `defer`, an `async` and a `type="module"` script run, and which of them run before `DOMContentLoaded`?
- What does a plain `<script>` in `<head>` get when it looks up an element further down the page?
- Why does a module script included twice run once, while a classic script runs twice?
- What happens to a module script served as `text/plain`, or opened from a `file://` URL?
- What do `defer` and `async` do on an inline script that has no `src`?

## Examples it will need

- [ ] `script_loading_order_page.html` — (browser — runner to be decided) the order in which a plain, a defer, an async and a module script log, against DOMContentLoaded
- [ ] `script_loading_module_once_page.html` — (browser — runner to be decided) a module script and a classic script, each included twice, with how often each ran

## See also

- [Scripts and modules](../../01_Running_JavaScript/scripts_and_modules/README.md) — the two sets of rules a script tag chooses between
- [Strict mode](../../01_Running_JavaScript/strict_mode/README.md) — module scripts are strict without asking
- [Dynamic `import()` and top-level `await`](../../14_Modules/dynamic_import_and_top_level_await/README.md) — loading more code later, from inside a module
- [The rendering loop](../the_rendering_loop/README.md) — why a blocking script delays the first paint
- [Rust: Shipping a wasm page ↗](https://masiarek.github.io/rust-learning-library/42_WebAssembly/shipping_a_wasm_page/index.html) — a module that also needs the right MIME type

## Sources to start from

- [MDN — <script>: The Script element ↗](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
- [HTML Standard — the defer attribute ↗](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-defer)
- [MDN — JavaScript modules ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
