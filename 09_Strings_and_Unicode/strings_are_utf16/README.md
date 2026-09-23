# Strings are UTF-16 — `length` counts code units, not characters

**Level:** 101 · for anyone who has asked a string for its length

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A string is a sequence of 16-bit code units and `length` counts them: `"é"` is 1 or 2 long depending on whether the accent is its own code point, `"😀".length` is 2, and `"😀"[0]` is half an emoji, the lone surrogate `0xD83D`.

**Keywords:** `UTF-16`, `code unit`, `surrogate pair`, `charCodeAt`, `String.fromCharCode`, `length`

## What the finished page will answer

- What is the `length` of `"A"`, `"é"` written two ways, `"€"` and `"😀"`, and which code units make up each?
- What does `"😀"[0]` return, and how do `JSON.stringify` and `console.log` show it?
- What do `charAt(0)`, `slice(0, 1)` and `split("")` do to a surrogate pair?
- Why does `String.fromCharCode(0x1F600)` not give 😀, and what does it give instead?
- How are the high and low surrogates of U+1F600 computed from the code point, step by step?

## Examples it will need

- [ ] `strings_are_utf16_length_js.js` — `length` and the code units in hex for `"A"`, `"é"` in both spellings, `"€"` and `"😀"`, one row each
- [ ] `strings_are_utf16_halves_js.js` — `"😀"[0]`, `charAt(0)`, `slice(0, 1)` and `split("")` on an emoji, each through `JSON.stringify` so the lone surrogate shows, then the surrogate arithmetic for U+1F600 and `String.fromCharCode(0x1F600)` losing the top bits

## See also

- [Code points](../code_points_and_iteration/README.md) — the tools that step over a surrogate pair as one unit
- [Graphemes](../graphemes_and_intl_segmenter/README.md) — what a reader counts as one character
- [Strings and bytes](../strings_and_bytes/README.md) — what a lone surrogate turns into on the way to bytes
- [Primitives and wrappers](../../02_Values_and_Types/primitives_and_wrapper_objects/README.md) — why a primitive string has a `length` at all
- [Unicode mode](../../15_Regular_Expressions/unicode_mode/README.md) — what `.` matches in an emoji with and without `u`
- [Encodings: UTF-16 and surrogates ↗](https://masiarek.github.io/encodings-learning-library/03_Encodings/utf16_and_surrogates/index.html) — the surrogate arithmetic worked by hand, and why Unicode stops at U+10FFFF
- [Java text: A `char` is not a character ↗](https://masiarek.github.io/java-text-learning-library/01_Char_and_String/a_char_is_not_a_character/index.html) — in Java, `char` has the same 16-bit limit and the same half characters
- [Encodings: Why UTF-16 stayed ↗](https://masiarek.github.io/encodings-learning-library/09_History/why_utf16_stayed/index.html) — why JavaScript strings are UTF-16 at all

## Sources to start from

- [MDN — String: UTF-16 characters, Unicode code points, and grapheme clusters ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)
- [ECMA-262 — The String Type ↗](https://tc39.es/ecma262/#sec-ecmascript-language-types-string-type)
