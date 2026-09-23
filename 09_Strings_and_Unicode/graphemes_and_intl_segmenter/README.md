# Graphemes — what a reader calls one character, found with `Intl.Segmenter`

**Level:** 201 · for anyone who has counted characters for a user

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** What a reader sees as one character can be several code points: a flag is 2, a family emoji 5 (and 8 code units); only `Intl.Segmenter` with `granularity: "grapheme"` counts each as 1, using the Unicode rules of the ICU that Node ships.

**Keywords:** `Intl.Segmenter`, `grapheme`

## What the finished page will answer

- How many code units, code points and graphemes are in `e` plus an accent, a thumbs-up with a skin tone, a flag and a family emoji?
- How do you cut a string to its first N graphemes without splitting an emoji, and what does `slice(0, N)` do instead?
- What does `Intl.Segmenter` with `granularity: "word"` return for an English and a Japanese sentence, and what does `isWordLike` mark?
- Is `"\r\n"` one grapheme or two?
- Which versions do `process.versions.unicode` and `process.versions.icu` report, and why can a grapheme count change between Node releases?

## Examples it will need

- [ ] `graphemes_and_intl_segmenter_count_js.js` — code units, code points and graphemes for an accented letter, a skin-tone emoji, a flag and a family emoji, one row each
- [ ] `graphemes_and_intl_segmenter_truncate_js.js` — a preview cut with `slice` beside one cut by graphemes, then the `isWordLike` segments of an English and a Japanese sentence

## See also

- [Code points](../code_points_and_iteration/README.md) — the code points a grapheme is made of
- [Normalization](../normalization/README.md) — `e` plus an accent: one grapheme with two spellings
- [String methods](../string_methods/README.md) — why `slice` can cut an emoji in half
- [Unicode mode](../../15_Regular_Expressions/unicode_mode/README.md) — what a regex can and cannot match as one character
- [Encodings: A code point is not a character ↗](https://masiarek.github.io/encodings-learning-library/02_Characters/a_code_point_is_not_a_character/index.html) — five rulers laid along one string, all correct
- [Python: Counting characters ↗](https://masiarek.github.io/python-learning-library/01_Text_and_Bytes/counting_characters/index.html) — the four answers Python gives to how long a string is
- [Regex: `\X` — one character as a person counts it ↗](https://masiarek.github.io/regex-learning-library/10_Keywords/grapheme_cluster/index.html) — `\X`, the regex token for one grapheme, which JavaScript lacks

## Sources to start from

- [MDN — Intl.Segmenter ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)
- [Unicode UAX #29 — Unicode Text Segmentation ↗](https://www.unicode.org/reports/tr29/)
