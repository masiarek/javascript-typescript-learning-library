# 15 — Regular expressions

**One line:** A JavaScript regex carries state as well as a pattern: its flags change what `.` and `\p{…}` mean, and with `g` the same call can answer differently the second time.

The chapter begins with the literal and its eight flags, then the state that `g` and `y` keep in `lastIndex`, which explains most surprises in the three search methods that follow. Named groups and the replacement mini-language come next, then Unicode mode, where `u` and `v` change what `.` matches. It ends where JavaScript differs from other engines: lookbehind of any length, and `RegExp.escape`. The Regex library asks the same questions across eight engines.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [Regex literals and flags](regex_literals_and_flags/README.md) | 101 | A regex has eight flags, and `.flags` reports them in one fixed order whatever order you typed — `/a/yigd.flags` is `"dgiy"` — while `u` with `v`, a repeated flag or an unknown letter is a `SyntaxError`. | stub |
| [The `g` flag and `lastIndex`](the_g_flag_and_lastindex/README.md) | 201 | A regex with `g` or `y` remembers where its last match ended in `lastIndex`, so three `test("a")` calls on one `/a/g` answer `true`, `false`, `true`, and a shared `/c/g` filtering `["cat", "car", "cow"]` drops `"car"`. | stub |
| [`match`, `matchAll` and `exec`](match_matchall_and_exec/README.md) | 201 | `"a1 b2".match(/([a-z])(\d)/g)` returns only `["a1", "b2"]` — with `g`, `match` drops the groups — while `matchAll` keeps them but throws a `TypeError` without `g`, and a failed `match` returns `null`, not an empty array. | stub |
| [Named groups and replacements](named_groups_and_replacements/README.md) | 201 | The replacement string is a small language of its own: `"$<d>.$<m>.$<y>"` reorders named groups and `$&` inserts the whole match, so user text `"$& off"` turns `"price"` into `"price off"`, while a replacer function's return value goes in literally. | stub |
| [Unicode mode](unicode_mode/README.md) | 301 | Without `u`, `.` matches one UTF-16 code unit, so `/^.$/.test("😀")` is `false` and `/^..$/` is `true`; `u` makes `.` a code point, yet `👨‍👩‍👧` still takes five dots, and `v` adds `\p{RGI_Emoji}`, which matches it as one. | stub |
| [Lookbehind](lookbehind_in_javascript/README.md) | 201 | JavaScript accepts a lookbehind of any length — `(?<=\$\d*)\d` finds every digit of a price — and matches it right to left, so `/(?<=(\d+)(\d+))$/.exec("1053")` captures `"1"` and `"053"`, while the same groups matched forwards give `"105"` and `"3"`. | stub |
| [`RegExp.escape`](regexp_escape/README.md) | 201 | `RegExp.escape` (ES2025, in Node 24) turns text into a pattern that matches only itself — `new RegExp("1.5")` matches `"125"`, the escaped one does not — and it escapes more than punctuation: `RegExp.escape("1.5")` is `\x31\.5`. | stub |
<!-- /lessons -->

## Boundaries

Pattern syntax shared by every engine — quantifiers, classes, backtracking — is covered in the Regex library, which has a JavaScript column on most pages.
