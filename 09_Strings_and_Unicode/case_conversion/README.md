# Case conversion — `toUpperCase` can change the length

**Level:** 201 · for anyone who compares strings without regard to case

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Case mapping follows Unicode's full rules, so it can change `length`: `"straße".toUpperCase()` is `"STRASSE"` and `"İ".toLowerCase()` is two code units; lowercasing both sides therefore misses that `"straße"` and `"STRASSE"` match, which `localeCompare` with `sensitivity: "base"` finds.

**Keywords:** `toUpperCase`, `toLowerCase`, `toLocaleUpperCase`, `toLocaleLowerCase`

## What the finished page will answer

- Which characters change a string's length under `toUpperCase` or `toLowerCase`: `ß`, `ﬁ`, `ŉ`, `İ`?
- What do `toLocaleUpperCase` and `toLocaleLowerCase` do to `i`, `I` and `İ` in `en`, `tr` and `lt`?
- Why does `"ΣΑΣ".toLowerCase()` end in `ς` rather than `σ`?
- Why is `a.toLowerCase() === b.toLowerCase()` not a case-insensitive comparison, and what do `localeCompare` with `sensitivity: "base"` and `"accent"` do instead?
- Does `"ß".toUpperCase().toLowerCase()` give back `ß`?

## Examples it will need

- [ ] `case_conversion_length_js.js` — strings whose length changes under `toUpperCase` or `toLowerCase` (`ß`, `ﬁ`, `ŉ`, `İ`), with the lengths and code points before and after
- [ ] `case_conversion_locale_js.js` — `toLocaleUpperCase` and `toLocaleLowerCase` of `i`, `I`, `İ` and `Ì` in `en`, `tr` and `lt`, then the Greek final sigma
- [ ] `case_conversion_compare_js.js` — case-insensitive comparison three ways (lowercasing both sides, `localeCompare` with `sensitivity: "base"`, and with `"accent"`) on `straße`/`STRASSE` and `résumé`/`RESUME`

## See also

- [Comparing and sorting strings](../comparing_and_sorting_strings/README.md) — `localeCompare` and its `sensitivity` option
- [Normalization](../normalization/README.md) — the combining dot that `İ` leaves, and what NFC does with it
- [Strings are UTF-16](../strings_are_utf16/README.md) — why a longer result shows up in `length`
- [Unicode mode](../../15_Regular_Expressions/unicode_mode/README.md) — how the `i` flag folds case with and without `u`
- [Encodings: Case is not a per-character operation ↗](https://masiarek.github.io/encodings-learning-library/02_Characters/case_is_not_per_character/index.html) — why case mapping cannot be done one letter at a time
- [Python: Lowercasing is not folding ↗](https://masiarek.github.io/python-learning-library/01_Text_and_Bytes/lowercasing_is_not_folding/index.html) — the `casefold` of Python, which JavaScript has no equivalent of
- [Java text: Case is locale-sensitive ↗](https://masiarek.github.io/java-text-learning-library/03_Locale/case_is_locale_sensitive/index.html) — the Turkish `i` problem in Java, from the default-locale side

## Sources to start from

- [MDN — String.prototype.toUpperCase() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [MDN — String.prototype.toLocaleUpperCase() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase)
- [Unicode — SpecialCasing.txt ↗](https://www.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt)
