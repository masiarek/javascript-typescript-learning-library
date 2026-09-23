# 19 — The Node.js runtime

**One line:** Node is the language plus an operating-system process, and most of its surprises are the operating system showing through: arguments and environment as strings, files as bytes, pipes that buffer, and exit statuses.

This chapter covers what Node adds around the language. It starts with the process itself — arguments, environment, exit codes — then files, paths and file URLs, and standard input and output. Bytes come next with `Buffer`, then streams, which move bytes in pieces and push back when the reader is slow. `EventEmitter` follows, because streams and servers are built on it, then an HTTP server with `fetch` as its client, and last the test runner that ships with Node.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [`process`](process_argv_env_and_exit_codes/README.md) | 101 | A script's first argument is `process.argv[2]`, after the Node binary and the script path; every `process.env` value is a string, so `process.env.DEBUG = false` stores `"false"`; and `process.exitCode = 3` exits with 3 only after pending work finishes. | stub |
| [Files](reading_and_writing_files/README.md) | 101 | `readFile` returns a `Buffer` unless you name an encoding, and with `"utf8"` it neither strips a byte order mark nor reports bad bytes: `EF BB BF` stays as `U+FEFF` at the start of the string, and a stray `FF` becomes `U+FFFD`. | stub |
| [Paths and file URLs](paths_and_file_urls/README.md) | 101 | A relative path is resolved against `process.cwd()`, not the module's folder; `import.meta.dirname` names that folder, and `new URL(import.meta.url).pathname` is not a usable path: a space in it stays `%20` until `fileURLToPath` decodes it. | stub |
| [stdin, stdout and pipes](stdin_stdout_and_pipes/README.md) | 201 | When stdout is a pipe, `process.stdout.isTTY` is `undefined`, not `false`, and writes are asynchronous: `process.exit()` right after writing 4 MiB lets only a fraction through (64 to 128 KiB in these runs), while setting `process.exitCode` delivers all of it. | stub |
| [`Buffer`](buffers/README.md) | 201 | `Buffer` is a `Uint8Array` subclass that breaks two of its habits: `buf.slice()` shares memory where `Uint8Array`'s `slice` copies, and `Buffer.from("hello").buffer` is a shared pool of `Buffer.poolSize` bytes, not five. | stub |
| [Streams](streams_and_backpressure/README.md) | 301 | `write()` returning `false` is backpressure: the writable's buffer has reached its `highWaterMark`, 64 KiB by default (16 KiB on Windows). Nothing stops you writing anyway — memory just grows — unless you wait for `drain` or let `pipeline` wait for you. | stub |
| [`EventEmitter`](events_and_eventemitter/README.md) | 201 | `emit` runs every listener synchronously, in the order added, before it returns; and an `'error'` event with no listener is not ignored like other events: `emit` throws it, and if nothing catches it the process exits with status 1. | stub |
| [HTTP](http_server_and_fetch/README.md) | 201 | `fetch` rejects only when no response arrives: a `404` from the server resolves normally with `response.ok` set to `false`, while a refused connection rejects with `TypeError: fetch failed`, the real reason kept in `error.cause`. | stub |
| [The built-in test runner](the_built_in_test_runner/README.md) | 201 | `node --test` needs no package: it finds `*.test.mjs`, `*.test.ts` and anything under `test/`, runs each file in its own child process, and exits with status 1 when one test fails — here `assert.equal(0.1 + 0.2, 0.3)`. | stub |
<!-- /lessons -->

## Boundaries

Workers, child processes and shared memory are in Workers and parallelism; the event loop and timers are in Async and the event loop; `import.meta` and module loading are in Modules.
