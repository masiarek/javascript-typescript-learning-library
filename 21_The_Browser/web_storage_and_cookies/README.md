# Storage — `localStorage`, `sessionStorage`, cookies and IndexedDB

**Level:** 201 · for readers who have kept something between page loads

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `localStorage` keeps only strings — `setItem("n", 1)` reads back `"1"` and an object becomes `"[object Object]"` — and it is synchronous; cookies ride along with every request to their site, and an `HttpOnly` one is invisible to `document.cookie`.

**Keywords:** `localStorage`, `sessionStorage`, `document.cookie`, `IndexedDB`, `HttpOnly`

## What the finished page will answer

- What does `getItem` return after `setItem` of `1`, `true`, `null` and `{ a: 1 }`, and after `JSON.stringify`?
- Why do `http://example.com` and `https://example.com` see different `localStorage`, and what does `sessionStorage` add on top of the origin?
- What does `document.cookie` show next to the `Cookie` header the server receives, for a plain cookie and an `HttpOnly` one?
- What can IndexedDB store that `localStorage` cannot, and why is its API asynchronous?
- What happens when `setItem` goes past the storage quota?

## Examples it will need

- [ ] `web_storage_strings_only_page.html` — (browser — runner to be decided) getItem after setItem of 1, true, null and an object, then the same values through JSON.stringify and JSON.parse
- [ ] `web_storage_httponly_cookie_page.html` — (browser — runner to be decided) document.cookie beside the Cookie header a local server logs, for a plain and an HttpOnly cookie

## See also

- [JSON](../../06_Objects/json/README.md) — `JSON.stringify`, the usual step before `setItem`
- [Converting on purpose](../../03_Equality_and_Coercion/explicit_conversion/README.md) — `String(value)`, the conversion `setItem` applies
- [`postMessage`](../../20_Workers_and_Parallelism/message_passing_and_structured_clone/README.md) — the structured clone rules IndexedDB also uses
- [`fetch` and CORS](../fetch_and_cors/README.md) — when cookies go with a cross-origin request

## Sources to start from

- [MDN — Window: localStorage property ↗](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN — Using HTTP cookies ↗](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies)
- [HTML Standard — Web storage ↗](https://html.spec.whatwg.org/multipage/webstorage.html)
