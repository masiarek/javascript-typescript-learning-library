# 20 — Workers and parallelism

**One line:** One JavaScript agent never runs two things at once; parallelism in Node needs a second agent, a worker or a process, and data crosses between them by copy, by transfer, or through shared memory that needs `Atomics`.

The chapter starts from the rule the rest of the library relies on: one agent runs one piece of JavaScript at a time. Worker threads add a second agent and real parallelism. Their messages are copied by structured clone or moved by transfer, and the third page shows which is which. Shared memory comes next, with the lost update it allows and the `Atomics` that prevent it. Child processes close the chapter: a separate program with its own exit status and signals.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [One thread per agent](one_thread_per_agent/README.md) | 101 | Inside one agent, JavaScript never runs two things at once: two `async` tasks interleave only at `await` (`a1 b1 a2 b2 a3 b3`), and two 200 ms loops started together under `Promise.all` still take 400 ms. | stub |
| [Worker threads](worker_threads/README.md) | 201 | A `Worker` is a second agent with its own thread, event loop and globals — a worker that sets `globalThis.counter` leaves the main thread's copy at 0 — so four 500 ms loops on four workers finish in about the time of one. | stub |
| [`postMessage`](message_passing_and_structured_clone/README.md) | 201 | `postMessage` sends a structured clone, not the object: a `Point` arrives as a plain `{ x: 3, y: 4 }` without its methods, a function throws `DataCloneError`, and an `ArrayBuffer` in the transfer list moves — the sender's copy drops to `byteLength` 0. | stub |
| [`SharedArrayBuffer` and `Atomics`](sharedarraybuffer_and_atomics/README.md) | 301 | Two workers each doing `shared[0]++` ten million times on one `SharedArrayBuffer` lose updates — the total falls short of 20,000,000 — because `++` is a read, an add and a write; `Atomics.add` does all three as one step and lands exactly. | stub |
| [Child processes](child_processes/README.md) | 201 | `exec` hands its string to `/bin/sh`, so `$((6 * 7))` becomes `42`; `spawn` runs the program directly and passes the text through untouched; and a child killed by a signal reports `code` `null` and `signal` `'SIGTERM'`, where a shell would say 143. | stub |
<!-- /lessons -->

## Boundaries

The event loop inside one agent is in Async and the event loop; `Buffer` and streams are in The Node.js runtime; `ArrayBuffer` and typed arrays are in Arrays and collections.
