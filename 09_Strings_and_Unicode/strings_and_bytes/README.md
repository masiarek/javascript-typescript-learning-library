# Strings and bytes — `TextEncoder`, `TextDecoder` and lone surrogates

**Level:** 201 · for anyone who sends text to a file, a socket or a hash

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `TextEncoder` only writes UTF-8 and silently turns a lone surrogate into `ef bf bd`, the bytes of U+FFFD, so an ill-formed string does not survive the trip to bytes; `TextDecoder` also swaps bad bytes for U+FFFD unless `fatal: true` makes it throw a `TypeError`.

**Keywords:** `TextEncoder`, `TextDecoder`, `isWellFormed`, `toWellFormed`, `lone surrogate`

## What the finished page will answer

- What bytes does `TextEncoder` produce for `é`, `€`, `😀` and a lone surrogate, and which encodings can it write?
- What does `TextDecoder` do with an invalid byte by default, and with `fatal: true`?
- How do `isWellFormed` and `toWellFormed` find and repair lone surrogates, and what does `encodeURIComponent` do with one?
- Why does `TextDecoder` drop a leading BOM, and what does `ignoreBOM: true` change?
- How does `decode(chunk, { stream: true })` handle a multi-byte character split across two chunks?

## Examples it will need

- [ ] `strings_and_bytes_encode_js.js` — `TextEncoder` output in hex for ASCII, `é`, `€`, an emoji and a lone surrogate, with `isWellFormed` for each string
- [ ] `strings_and_bytes_decode_js.js` — `TextDecoder` on valid UTF-8, on a stray `0xff`, on a BOM with and without `ignoreBOM`, and on a split emoji with `stream: true`; `fatal: true` shown as a caught `TypeError`
- [ ] `strings_and_bytes_uri_js.js` — `encodeURIComponent` on a well-formed string, on a lone surrogate (the `URIError` caught and printed), and on the same string after `toWellFormed()`

## See also

- [Strings are UTF-16](../strings_are_utf16/README.md) — where lone surrogates come from
- [`Buffer`](../../19_Node_Runtime/buffers/README.md) — `Buffer.from(string)` and its encoding names
- [Typed arrays and `ArrayBuffer`](../../08_Arrays_and_Collections/typed_arrays/README.md) — the `Uint8Array` that holds the bytes
- [Files](../../19_Node_Runtime/reading_and_writing_files/README.md) — decoding happens again when a file is read as text
- [Encodings: Encode and decode are verbs ↗](https://masiarek.github.io/encodings-learning-library/03_Encodings/encode_and_decode_are_verbs/index.html) — which direction is encoding and which is decoding
- [Encodings: `OsStr`, `Path`, and WTF-8 ↗](https://masiarek.github.io/encodings-learning-library/05_Rust/osstr_path_and_wtf8/index.html) — the WTF-8 encoding, which does keep lone surrogates
- [Java text: Malformed input has two policies ↗](https://masiarek.github.io/java-text-learning-library/02_Encodings/malformed_input/index.html) — the two policies Java offers for bad input: replace or report

## Sources to start from

- [MDN — TextDecoder ↗](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder)
- [MDN — String.prototype.isWellFormed() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/isWellFormed)
- [WHATWG — Encoding Standard ↗](https://encoding.spec.whatwg.org/)
