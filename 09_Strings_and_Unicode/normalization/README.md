# Normalization — two spellings of `é` that `===` calls different

**Level:** 201 · for anyone comparing text that came from somewhere else

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `"\u{E9}"` and `"e\u{301}"` both show as é, yet `===` is `false`, their lengths are 1 and 2, and a `Set` keeps both; `normalize("NFC")` on each side makes them equal, while `localeCompare` already returns `0` for the pair.

**Keywords:** `normalize`, `NFC`, `NFD`, `NFKC`, `NFKD`

## What the finished page will answer

- Why is `"\u{E9}" === "e\u{301}"` `false`, and what are the two lengths?
- What do NFC, NFD, NFKC and NFKD turn `é`, `ﬁ`, `①` and the Angstrom sign U+212B into?
- Why does `localeCompare` return `0` for the two spellings when `===`, `Set` and `Map` treat them as different?
- Where should a program normalize: on input, before comparing, or before using a string as a key?
- How do you strip accents with `normalize("NFD")` and a `\p{M}` regex, and why does `ø` come through unchanged?

## Examples it will need

- [ ] `normalization_forms_js.js` — `é`, `ﬁ`, `①` and U+212B through NFC, NFD, NFKC and NFKD, with the code points of each result
- [ ] `normalization_lookup_js.js` — a `Map` keyed by the composed `café` missing the decomposed one, finding it once both are normalized, and `localeCompare` returning `0` without normalizing

## See also

- [Comparing and sorting strings](../comparing_and_sorting_strings/README.md) — `localeCompare`, which already treats the two spellings as equal
- [Graphemes](../graphemes_and_intl_segmenter/README.md) — one visible character made of several code points
- [`===` and `==`](../../03_Equality_and_Coercion/strict_and_loose_equality/README.md) — what `===` compares when both sides are strings
- [`Map` and `Set`](../../08_Arrays_and_Collections/map_and_set/README.md) — why a `Set` keeps both spellings as different members
- [Encodings: Normalization ↗](https://masiarek.github.io/encodings-learning-library/04_Python/normalization/index.html) — the four forms, run in Python
- [Java text: Normalization and equality ↗](https://masiarek.github.io/java-text-learning-library/03_Locale/normalization_and_equality/index.html) — in Java, `equals` has the same blind spot
- [Encodings: The check that ran too early ↗](https://masiarek.github.io/encodings-learning-library/12_Adversarial/canonicalize_then_check/index.html) — the security bug of checking a string before normalizing it

## Sources to start from

- [MDN — String.prototype.normalize() ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
- [Unicode UAX #15 — Unicode Normalization Forms ↗](https://www.unicode.org/reports/tr15/)
- [ECMA-262 — String.prototype.normalize ↗](https://tc39.es/ecma262/#sec-string.prototype.normalize)
