# `Buffer` — bytes in Node, and how it relates to `Uint8Array`

**Level:** 201 · for readers who have met bytes in another language

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `Buffer` is a `Uint8Array` subclass that breaks two of its habits: `buf.slice()` shares memory where `Uint8Array`'s `slice` copies, and `Buffer.from("hello").buffer` is a shared pool of `Buffer.poolSize` bytes, not five.

**Keywords:** `Buffer`, `Buffer.from`, `Buffer.alloc`, `Buffer.allocUnsafe`, `Buffer.poolSize`

## What the finished page will answer

- What does writing through `buf.slice(0, 1)` do to `buf`, and what does the same write through `Uint8Array.prototype.slice` do?
- How long is `Buffer.from("héllo")`, and why does it differ from `"héllo".length`?
- What are `buf.byteOffset` and `buf.buffer.byteLength` for a five-byte buffer, and what else does `new Uint8Array(buf.buffer)` see?
- Why may `Buffer.allocUnsafe(10)` hold old bytes when `Buffer.alloc(10)` is all zeros?
- What does one string become through `toString` in `"utf8"`, `"latin1"`, `"base64"` and `"hex"`?

## Examples it will need

- [ ] `buffers_slice_shares_memory_js.js` — a byte written through `buf.slice()`, `buf.subarray()` and `Uint8Array.prototype.slice`, and whether the original changed each time
- [ ] `buffers_pool_and_byteoffset_js.js` — `Buffer.poolSize`, `byteOffset` and `buffer.byteLength` for a 5-byte and a 10 KiB buffer, and the length of `new Uint8Array(buf.buffer)`
- [ ] `buffers_encodings_js.js` — "héllo" through `Buffer.from` and `toString` in utf8, utf16le, latin1, base64 and hex, with each byte length

## See also

- [Typed arrays and `ArrayBuffer`](../../08_Arrays_and_Collections/typed_arrays/README.md) — `Uint8Array`, `ArrayBuffer` and views in the language itself
- [Strings and bytes](../../09_Strings_and_Unicode/strings_and_bytes/README.md) — `TextEncoder`, the standard way to get bytes
- [Files](../reading_and_writing_files/README.md) — where most buffers come from
- [`postMessage`](../../20_Workers_and_Parallelism/message_passing_and_structured_clone/README.md) — transferring the memory under a buffer to a worker
- [Python: `bytearray` is the mutable one ↗](https://masiarek.github.io/python-learning-library/01_Text_and_Bytes/bytearray_is_mutable/index.html) — the mutable byte type in Python, beside immutable `bytes`
- [Encodings: Encode and decode are verbs ↗](https://masiarek.github.io/encodings-learning-library/03_Encodings/encode_and_decode_are_verbs/index.html) — encode and decode, the two directions `Buffer` covers
- [Encodings: Binary to text ↗](https://masiarek.github.io/encodings-learning-library/03_Encodings/binary_to_text/index.html) — base64 and hex, which `toString` also writes

## Sources to start from

- [Node.js 24 — Buffers and TypedArrays ↗](https://nodejs.org/docs/latest-v24.x/api/buffer.html#buffers-and-typedarrays)
- [Node.js 24 — buf.slice ↗](https://nodejs.org/docs/latest-v24.x/api/buffer.html#bufslicestart-end)
- [Node.js 24 — Buffer.poolSize ↗](https://nodejs.org/docs/latest-v24.x/api/buffer.html#bufferpoolsize)
