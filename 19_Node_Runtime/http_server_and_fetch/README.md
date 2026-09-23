# HTTP — a server with `node:http`, a client with `fetch`

**Level:** 201 · for readers who have called an HTTP API from a script

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `fetch` rejects only when no response arrives: a `404` from the server resolves normally with `response.ok` set to `false`, while a refused connection rejects with `TypeError: fetch failed`, the real reason kept in `error.cause`.

**Keywords:** `node:http`, `createServer`, `fetch`, `response.ok`

## What the finished page will answer

- What do `status`, `ok` and the body look like for a `200`, a `404` and a `500` from a local server?
- What does `fetch` throw for a closed port, and where do `ECONNREFUSED` and the port number appear?
- What method, URL and headers does a `node:http` server receive for a `fetch` that posts JSON?
- What does the client see when a handler never calls `res.end()`?
- How does `AbortSignal.timeout(100)` stop a `fetch` to a server that never answers, and what is the error's `name`?

## Examples it will need

- [ ] `http_server_and_fetch_status_js.js` — status, ok and body for 200, 404 and 500 answers from a server on port 0, then the rejection for a closed port with `cause.code`
- [ ] `http_server_sees_the_request_js.js` — the method, URL, headers and parsed body a server receives from a `fetch` that posts JSON, and the JSON it sends back
- [ ] `http_fetch_timeout_js.js` — a `fetch` to a server that never answers, stopped by `AbortSignal.timeout(100)`, with the error's name and the time taken

## See also

- [`fetch` and CORS](../../21_The_Browser/fetch_and_cors/README.md) — the same `fetch` in a browser, where CORS applies
- [Cancellation](../../13_Async_and_the_Event_Loop/cancellation_with_abortcontroller/README.md) — the signal that times out a `fetch`
- [Custom errors and `cause`](../../12_Errors/custom_errors_and_cause/README.md) — `error.cause`, where fetch keeps the reason
- [Streams](../streams_and_backpressure/README.md) — request and response bodies are streams
- [Rust: An HTTP request ↗](https://masiarek.github.io/rust-learning-library/07_Clients/http_with_reqwest/index.html) — the same request from Rust
- [Rust: Mocking a server ↗](https://masiarek.github.io/rust-learning-library/07_Clients/mocking_a_server/index.html) — a local server standing in for the real one

## Sources to start from

- [Node.js 24 — http.createServer ↗](https://nodejs.org/docs/latest-v24.x/api/http.html#httpcreateserveroptions-requestlistener)
- [Node.js 24 — fetch ↗](https://nodejs.org/docs/latest-v24.x/api/globals.html#fetch)
- [MDN — Window: fetch() method ↗](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
