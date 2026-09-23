# `postMessage` — messages are copied, and transfers move ownership

**Level:** 201 · for readers who have sent data to a worker

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `postMessage` sends a structured clone, not the object: a `Point` arrives as a plain `{ x: 3, y: 4 }` without its methods, a function throws `DataCloneError`, and an `ArrayBuffer` in the transfer list moves — the sender's copy drops to `byteLength` 0.

**Keywords:** `postMessage`, `MessageChannel`, `transfer list`, `DataCloneError`

## What the finished page will answer

- What arrives for a class instance, a `Date`, a `Map`, an `Error` and an object with a cycle, and which keep their type?
- What does sending a function or a symbol throw, and at which end: the sender or the receiver?
- What are `byteLength` and `detached` on an `ArrayBuffer` after it is transferred, and what does an old view over it read?
- How long does posting a 100 MB `ArrayBuffer` take when it is copied, and when it is transferred?
- Why does a `SharedArrayBuffer` in a message arrive shared rather than copied?

## Examples it will need

- [ ] `message_passing_clone_rules_js.js` — what arrives through a MessageChannel for a class instance, a Date, a Map, an Error, a cycle and a function
- [ ] `message_passing_transfer_detaches_js.js` — `byteLength` and `detached` before and after transferring an ArrayBuffer, and the time to post 100 MB copied versus transferred

## See also

- [Copying objects](../../06_Objects/copying_objects/README.md) — `structuredClone`, the same algorithm without a worker
- [The prototype chain](../../07_Prototypes_and_Classes/the_prototype_chain/README.md) — the chain a clone leaves behind
- [Typed arrays and `ArrayBuffer`](../../08_Arrays_and_Collections/typed_arrays/README.md) — the `ArrayBuffer` a transfer moves
- [`SharedArrayBuffer` and `Atomics`](../sharedarraybuffer_and_atomics/README.md) — the one buffer that is shared, not copied
- [Concurrency: Who owns a value after it has been sent? ↗](https://masiarek.github.io/concurrency-learning-library/05_Message_Passing/sending_a_value_moves_it/index.html) — who owns a value after it has been sent
- [Concurrency: What may be handed to another thread? ↗](https://masiarek.github.io/concurrency-learning-library/02_Shared_State/what_may_cross_a_thread_boundary/index.html) — what may be handed to another thread, across languages
- [Rust: Ownership and moves ↗](https://masiarek.github.io/rust-learning-library/18_Ownership/ownership_and_moves/index.html) — a move in Rust, checked at compile time instead

## Sources to start from

- [MDN — The structured clone algorithm ↗](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [MDN — Transferable objects ↗](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects)
- [Node.js 24 — worker.postMessage ↗](https://nodejs.org/docs/latest-v24.x/api/worker_threads.html#workerpostmessagevalue-transferlist)
