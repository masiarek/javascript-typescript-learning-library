# Files — `fs/promises`, encodings, and sync versus async

**Level:** 101 · for anyone who has read a file in another language

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `readFile` returns a `Buffer` unless you name an encoding, and with `"utf8"` it neither strips a byte order mark nor reports bad bytes: `EF BB BF` stays as `U+FEFF` at the start of the string, and a stray `FF` becomes `U+FFFD`.

**Keywords:** `fs/promises`, `readFile`, `writeFile`, `readFileSync`

## What the finished page will answer

- What does `await readFile(path)` return without an encoding, and what with `"utf8"`?
- Where does a UTF-8 byte order mark end up after `readFile(path, "utf8")`, and how do you remove it?
- What does an invalid byte such as `0xFF` become when read as `"utf8"`, and what does `new TextDecoder("utf-8", { fatal: true })` do with it instead?
- How late does a 0 ms `setTimeout` fire while `readFileSync` reads a 200 MB file, and while `await readFile` reads the same file?
- What error `code` does reading a missing file give, and what does writing with flag `"wx"` do to a file that already exists?

## Examples it will need

- [ ] `reading_files_buffer_or_string_js.js` — `readFile` with no encoding and with "utf8" on a file holding a BOM and a stray 0xFF byte: the Buffer, then each code point of the string
- [ ] `reading_files_sync_blocks_timers_js.js` — when a 0 ms timer fires during `readFileSync` of a large file and during `await readFile` of the same file
- [ ] `writing_files_flags_and_errors_js.js` — the error codes for reading a missing file and for writing with flag "wx" over an existing one

## See also

- [`Buffer`](../buffers/README.md) — the `Buffer` that `readFile` returns without an encoding
- [Strings and bytes](../../09_Strings_and_Unicode/strings_and_bytes/README.md) — `TextDecoder`, and the fatal mode that rejects bad bytes
- [Blocking the event loop](../../13_Async_and_the_Event_Loop/blocking_the_event_loop/README.md) — why `readFileSync` delays every timer
- [Paths and file URLs](../paths_and_file_urls/README.md) — what a relative path is relative to
- [Ruby text: The BOM is kept unless you ask ↗](https://masiarek.github.io/ruby-text-learning-library/02_Reading_and_Writing/the_bom_is_kept/index.html) — the byte order mark kept by Ruby too, unless asked
- [Java text: The BOM is not stripped ↗](https://masiarek.github.io/java-text-learning-library/02_Encodings/the_bom_is_not_stripped/index.html) — the same mark kept by a Java reader
- [Python: Opening a file ↗](https://masiarek.github.io/python-learning-library/01_Text_and_Bytes/opening_a_file/index.html) — the same choice between text and bytes in Python

## Sources to start from

- [Node.js 24 — fsPromises.readFile ↗](https://nodejs.org/docs/latest-v24.x/api/fs.html#fspromisesreadfilepath-options)
- [Node.js 24 — fs.readFileSync ↗](https://nodejs.org/docs/latest-v24.x/api/fs.html#fsreadfilesyncpath-options)
- [Node.js 24 — File system flags ↗](https://nodejs.org/docs/latest-v24.x/api/fs.html#file-system-flags)
