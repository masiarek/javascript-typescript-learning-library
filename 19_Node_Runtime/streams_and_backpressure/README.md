# Streams — reading a big file in pieces, and backpressure

**Level:** 301 · for readers who have copied a file too big to read at once

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `write()` returning `false` is backpressure: the writable's buffer has reached its `highWaterMark`, 64 KiB by default (16 KiB on Windows). Nothing stops you writing anyway — memory just grows — unless you wait for `drain` or let `pipeline` wait for you.

**Keywords:** `stream.pipeline`, `highWaterMark`, `drain`, `createReadStream`, `Writable`

## What the finished page will answer

- After how many 1 KiB writes to a slow `Writable` does `write()` return `false`, and what does it return if you keep writing?
- What is `writableLength` after ignoring `false` and writing 1 MiB more, and when does `drain` fire?
- What chunk sizes does `createReadStream` deliver for a 200 KiB file, and how does its `highWaterMark` option change them?
- How does peak `rss` compare when copying a large file with an unchecked `write` loop and with `pipeline`?
- What does `pipeline` do with an error in the middle stage, and what happens to the other two streams?

## Examples it will need

- [ ] `streams_write_returns_false_js.js` — the write at which a slow Writable first returns false, its `writableLength` after writing on regardless, and when `drain` fires
- [ ] `streams_read_chunk_sizes_js.js` — the chunk sizes `createReadStream` yields for a 200 KiB file at the default and at a 16 KiB `highWaterMark`
- [ ] `streams_pipeline_memory_js.js` — peak `rss` copying a large generated file with an unchecked write loop and with `pipeline`

## See also

- [Files](../reading_and_writing_files/README.md) — `readFile`, which loads the whole file at once
- [stdin, stdout and pipes](../stdin_stdout_and_pipes/README.md) — stdout is a writable stream too
- [`EventEmitter`](../events_and_eventemitter/README.md) — `data`, `drain` and `error` are emitter events
- [Async iteration](../../11_Control_Flow_and_Iteration/async_iteration/README.md) — `for await` over a readable stream
- [Concurrency: Backpressure ↗](https://masiarek.github.io/concurrency-learning-library/11_Concepts/communication/backpressure/index.html) — backpressure as a concept, across languages
- [Concurrency: What stops a fast producer from filling memory? ↗](https://masiarek.github.io/concurrency-learning-library/05_Message_Passing/a_bounded_queue_pushes_back/index.html) — a bounded queue pushing back on a fast producer
- [Rust: Backpressure ↗](https://masiarek.github.io/rust-learning-library/35_Async/building_minidb/backpressure/index.html) — backpressure in a Tokio server

## Sources to start from

- [Node.js 24 — Streams: buffering ↗](https://nodejs.org/docs/latest-v24.x/api/stream.html#buffering)
- [Node.js 24 — stream.getDefaultHighWaterMark ↗](https://nodejs.org/docs/latest-v24.x/api/stream.html#streamgetdefaulthighwatermarkobjectmode)
- [Node.js 24 — Event: 'drain' ↗](https://nodejs.org/docs/latest-v24.x/api/stream.html#event-drain)
