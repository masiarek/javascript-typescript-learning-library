# 09 — Strings and Unicode

**One line:** A JavaScript string is a list of UTF-16 code units, so length, iteration, comparison, case and bytes each have a code-unit answer that differs from what a reader would call a character.

The chapter builds the model first. A string is UTF-16 code units; above them sit code points, which `for...of` walks; above those, graphemes, which only `Intl.Segmenter` finds; and normalization decides whether two spellings of one text are equal. The everyday tools follow in the light of that model: template literals, comparing and sorting, converting to and from bytes, the common string methods, and case conversion last, because it needs every earlier page.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Strings are UTF-16](strings_are_utf16/README.md) | 101 | A string is a sequence of 16-bit code units and `length` counts them: `"é"` is 1 or 2 long depending on whether the accent is its own code point, `"😀".length` is 2, and `"😀"[0]` is half an emoji, the lone surrogate `0xD83D`. | stub |
| [Code points](code_points_and_iteration/README.md) | 201 | `for...of`, spread and `Array.from` walk a string by code point, so `[..."a😀"]` has 2 items where `length` and `split("")` count 3; indexes still count code units, and `codePointAt(2)` on the same string returns the lone low surrogate `0xde00` without complaint. | stub |
| [Graphemes](graphemes_and_intl_segmenter/README.md) | 201 | What a reader sees as one character can be several code points: a flag is 2, a family emoji 5 (and 8 code units); only `Intl.Segmenter` with `granularity: "grapheme"` counts each as 1, using the Unicode rules of the ICU that Node ships. | stub |
| [Normalization](normalization/README.md) | 201 | `"\u{E9}"` and `"e\u{301}"` both show as é, yet `===` is `false`, their lengths are 1 and 2, and a `Set` keeps both; `normalize("NFC")` on each side makes them equal, while `localeCompare` already returns `0` for the pair. | stub |
| [Template literals](template_literals/README.md) | 101 | `${x}` converts with the string hint and `"" + x` with the default hint, so an object whose `valueOf` returns `1` and `toString` returns `"two"` gives `"two"` in a template and `"1"` after `+`; a symbol makes a template throw where `String(symbol)` works. | stub |
| [Comparing and sorting strings](comparing_and_sorting_strings/README.md) | 201 | `<` and a bare `sort()` compare UTF-16 code units, so `"Z" < "a"`, `"Éclair"` sorts after `"zebra"`, and `"😀" < "\u{FF61}"` though U+1F600 is the larger code point; `localeCompare` and `Intl.Collator` follow a locale's alphabet, and `numeric: true` puts `item9` before `item10`. | stub |
| [Strings and bytes](strings_and_bytes/README.md) | 201 | `TextEncoder` only writes UTF-8 and silently turns a lone surrogate into `ef bf bd`, the bytes of U+FFFD, so an ill-formed string does not survive the trip to bytes; `TextDecoder` also swaps bad bytes for U+FFFD unless `fatal: true` makes it throw a `TypeError`. | stub |
| [String methods](string_methods/README.md) | 101 | `"hello".slice(-3)` is `"llo"` but `substring(-3)` is the whole string, because `substring` treats negatives as 0 and swaps reversed ends; and a replacement string still has special patterns: `"a.b".replaceAll(".", "$&$&")` is `"a..b"`, since `$&` means the matched text. | stub |
| [Case conversion](case_conversion/README.md) | 201 | Case mapping follows Unicode's full rules, so it can change `length`: `"straße".toUpperCase()` is `"STRASSE"` and `"İ".toLowerCase()` is two code units; lowercasing both sides therefore misses that `"straße"` and `"STRASSE"` match, which `localeCompare` with `sensitivity: "base"` finds. | stub |
<!-- /lessons -->

## Boundaries

Regular expressions, including the `u` and `v` flags, have their own chapter; Node's `Buffer` and reading files with an encoding are in The Node.js runtime; tag functions are in Metaprogramming.
