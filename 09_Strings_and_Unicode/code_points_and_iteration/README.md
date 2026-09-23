# Code points — `for...of` walks them, indexing does not

**Level:** 201 · once code units are clear

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `for...of`, spread and `Array.from` walk a string by code point, so `[..."a😀"]` has 2 items where `length` and `split("")` count 3; indexes still count code units, and `codePointAt(2)` on the same string returns the lone low surrogate `0xde00` without complaint.

**Keywords:** `code point`, `codePointAt`, `String.fromCodePoint`, `\u{...}`

## What the finished page will answer

- How many items do `for...of`, spread, `Array.from` and `split("")` produce for `"a😀"`, and how many positions does an index loop visit?
- What does `codePointAt(i)` return when `i` points at the first half of a surrogate pair, and at the second half?
- What do `String.fromCodePoint` and the `\u{...}` escape accept that `String.fromCharCode` and `\uXXXX` cannot, and what does `String.fromCodePoint(0x110000)` throw?
- Why does `"ab😀".split("").reverse().join("")` break the emoji while `[..."ab😀"].reverse().join("")` keeps it?
- Does walking by code point keep `e` plus a combining accent together?

## Examples it will need

- [ ] `code_points_and_iteration_walk_js.js` — `"a😀b"` walked four ways (index loop, `for...of`, spread, `Array.from`) with the code point of each piece in hex
- [ ] `code_points_and_iteration_reverse_js.js` — `"ab😀"` reversed with `split("")` and with spread, each result checked with `isWellFormed()`, and `String.fromCodePoint` rebuilding the string from numbers

## See also

- [Strings are UTF-16](../strings_are_utf16/README.md) — the code units that indexing still counts
- [Graphemes](../graphemes_and_intl_segmenter/README.md) — the unit above code points, for accents and emoji sequences
- [`for...in` and `for...of`](../../11_Control_Flow_and_Iteration/for_in_and_for_of/README.md) — `for...of` over strings, arrays and maps
- [The iteration protocol](../../11_Control_Flow_and_Iteration/the_iteration_protocol/README.md) — the string iterator behind spread and `for...of`
- [Unicode mode](../../15_Regular_Expressions/unicode_mode/README.md) — the `u` flag makes a regex count code points too
- [Java text: Length is three different numbers ↗](https://masiarek.github.io/java-text-learning-library/01_Char_and_String/length_is_three_numbers/index.html) — the three lengths in Java: code units, code points and graphemes
- [Rust: Walking a `String` ↗](https://masiarek.github.io/rust-learning-library/14_Strings/walking_a_string/index.html) — in Rust, a string is walked by `char`, which is a code point
- [Encodings: Unicode code points ↗](https://masiarek.github.io/encodings-learning-library/02_Characters/unicode_code_points/index.html) — reading a `U+` number as an address

## Sources to start from

- [MDN — String.prototype.codePointAt() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
- [MDN — String.prototype[Symbol.iterator]() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- [ECMA-262 — CodePointAt ↗](https://tc39.es/ecma262/#sec-codepointat)
