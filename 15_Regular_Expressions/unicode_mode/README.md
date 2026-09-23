# Unicode mode — `u`, `v`, and what `.` matches in an emoji

**Level:** 301 · for anyone matching text that is not plain ASCII

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** Without `u`, `.` matches one UTF-16 code unit, so `/^.$/.test("😀")` is `false` and `/^..$/` is `true`; `u` makes `.` a code point, yet `👨‍👩‍👧` still takes five dots, and `v` adds `\p{RGI_Emoji}`, which matches it as one.

**Keywords:** `unicodeSets`, `\p{…}`, `\p{RGI_Emoji}`

## What the finished page will answer

- What do `/^.$/`, `/^..$/` and `/^.$/u` say about `"😀"`, and why?
- How many `.` does `👨‍👩‍👧` take under `u`, and what matches it as one unit under `v`?
- What does `\p{L}` mean without `u`, and what does it match with `u`?
- What do the `v` flag's set operations do, such as `[\p{L}--[a-z]]` and `&&`?
- Which escapes that pass without `u` become a `SyntaxError` with it, such as `\a`?
- How does `i` treat the Kelvin sign (U+212A) against `k`, with and without `u`?

## Examples it will need

- [ ] `unicode_mode_dot_and_emoji_js.js` — what ., .. and \p{RGI_Emoji} match in 😀 and 👨‍👩‍👧 with no flag, with u and with v
- [ ] `unicode_mode_v_sets_js.js` — the v flag's set difference and intersection tested on a handful of letters

## See also

- [Strings are UTF-16](../../09_Strings_and_Unicode/strings_are_utf16/README.md) — why . without u sees half an emoji
- [Code points](../../09_Strings_and_Unicode/code_points_and_iteration/README.md) — code points, the unit that u makes . match
- [Graphemes](../../09_Strings_and_Unicode/graphemes_and_intl_segmenter/README.md) — what a reader calls one character, which even v cannot match in general
- [Regex literals and flags](../regex_literals_and_flags/README.md) — the other six flags
- [Regex: `.` — any character, except the ones it is not ↗](https://masiarek.github.io/regex-learning-library/10_Keywords/dot/index.html) — what . matches in eight engines, emoji included
- [Regex: `\p{…}` — a character by what it is, not what it looks like ↗](https://masiarek.github.io/regex-learning-library/10_Keywords/unicode_property/index.html) — \p{…} across engines, and JavaScript without u
- [Encodings: UTF-16 and surrogates ↗](https://masiarek.github.io/encodings-learning-library/03_Encodings/utf16_and_surrogates/index.html) — the surrogate pairs that . splits without u

## Sources to start from

- [MDN — RegExp.prototype.unicodeSets ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
- [MDN — RegExp.prototype.unicode ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
- [v8.dev — RegExp v flag with set notation and properties of strings ↗](https://v8.dev/features/regexp-v-flag)
