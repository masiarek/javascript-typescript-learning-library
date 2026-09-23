# `fetch` and CORS — the response the browser will not show you

**Level:** 201 · for readers who have called an API from a web page

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** CORS is enforced by the browser, not the server: a simple cross-origin `GET` still reaches the server and runs, but without `Access-Control-Allow-Origin` in the reply the page's `fetch` rejects with a bare `TypeError`, while the same request from Node succeeds.

**Keywords:** `CORS`, `Access-Control-Allow-Origin`, `preflight`, `same-origin policy`

## What the finished page will answer

- What does the server log, and what does the page's `catch` see, for a cross-origin `GET` answered without `Access-Control-Allow-Origin`?
- Which requests make the browser send an `OPTIONS` preflight first — a `PUT`, a JSON body, a custom header — and which go straight out?
- What do `status`, `type` and the body look like for a `mode: "no-cors"` response?
- When do cookies go with a cross-origin `fetch`, and what must the server add for `credentials: "include"`?
- Why does the same request succeed from Node's `fetch` and from `curl`?

## Examples it will need

- [ ] `fetch_and_cors_node_ignores_cors_js.js` — a local server that sends no Access-Control-Allow-Origin, read by Node's fetch without complaint
- [ ] `fetch_and_cors_page.html` — (browser — runner to be decided) the same request from a page on another port: the server log, the page's TypeError, then success once the header is added
- [ ] `fetch_and_cors_preflight_page.html` — (browser — runner to be decided) the OPTIONS request a server logs before a PUT with a JSON body

## See also

- [HTTP](../../19_Node_Runtime/http_server_and_fetch/README.md) — the same `fetch` in Node, with no CORS
- [Promises](../../13_Async_and_the_Event_Loop/promises/README.md) — the rejected promise the page sees
- [Storage](../web_storage_and_cookies/README.md) — the cookies a credentialed request carries
- [Loading scripts](../script_loading/README.md) — module scripts are fetched under CORS too
- [Rust: An HTTP request ↗](https://masiarek.github.io/rust-learning-library/07_Clients/http_with_reqwest/index.html) — an HTTP client outside the browser, where CORS never applies

## Sources to start from

- [MDN — Cross-Origin Resource Sharing (CORS) ↗](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS)
- [Fetch Standard — CORS protocol ↗](https://fetch.spec.whatwg.org/#http-cors-protocol)
- [MDN — Window: fetch() method ↗](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
