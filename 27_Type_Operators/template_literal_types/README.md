# Template literal types — string patterns as types

**Level:** 301 · for anyone who has written a string literal type

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A template literal type multiplies its unions — `` `${Size}-${Tone}` `` with 2 and 3 members is 6 strings — and `` `${number}px` `` accepts any non-empty text that `Number()` reads as a finite number, so `"1e3px"`, `"0x1Fpx"` and `" 12px"` all pass.

**Keywords:** `template literal type`, `Uppercase`, `Lowercase`, `Capitalize`, `Uncapitalize`

## What the finished page will answer

- How many members does `` `${Size}-${Tone}` `` have when `Size` has 2 and `Tone` has 3, and what does tsc suggest for `"md-red"`?
- Which of `"1e3px"`, `"0x1Fpx"`, `" 12px"`, `"Infinitypx"`, `"1_000px"` and `"px"` does `` `${number}px` `` accept, and what rule decides?
- What do `Uppercase`, `Lowercase`, `Capitalize` and `Uncapitalize` do to a union?
- How does `infer` split a string type, and why does TypeScript 7 split `"😀abc"` into `"😀"` and `"abc"` when `"😀abc"[0]` in JavaScript is half a surrogate pair?
- What does TS2590 say when a cross product grows too large, as with five digits in a row?

## Examples it will need

- [ ] `template_literal_types_cross_product_tserror.ts` — the TS2820 error listing all six class names, with its did-you-mean
- [ ] `template_literal_types_number_pattern_tserror.ts` — errors for the px strings tsc rejects as `${number}px`, and silence for the ones it accepts
- [ ] `template_literal_types_code_points_sh.sh` — the Head type tsc infers for "😀abc" beside what JavaScript's [0] and [...s][0] give

## See also

- [Template literals](../../09_Strings_and_Unicode/template_literals/README.md) — the run-time template literals these types copy
- [Code points](../../09_Strings_and_Unicode/code_points_and_iteration/README.md) — code points versus code units, which TypeScript 7 changed here
- [Parsing numbers](../../10_Numbers_and_Math/parsing_numbers/README.md) — what Number() accepts, which decides ${number}
- [Mapped types](../mapped_types/README.md) — renaming keys with a template
- [Encodings: UTF-16 and surrogates ↗](https://masiarek.github.io/encodings-learning-library/03_Encodings/utf16_and_surrogates/index.html) — the surrogate pairs TypeScript 7 no longer splits during inference

## Sources to start from

- [TypeScript Handbook — Template literal types ↗](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
- [Announcing TypeScript 7.0 — Template literal types now preserve Unicode code points ↗](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#template-literal-types-now-preserve-unicode-code-points)
