# `any` is contagious — one `any` switches checking off downstream

**Level:** 201 · for anyone who has typed something as any

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `any` passes itself on: `config.port` read from an `any` is `any`, so `const next: number = port + 1` type-checks while holding the string `"80801"`, and `next.toFixed(2)` then throws `TypeError` with no word from tsc.

**Keywords:** `any`

## What the finished page will answer

- What type do `config.port`, `config.port + 1` and `config.anything()` have when `config` is `any`?
- Why is `const next: number = port + 1` accepted when the value is the string `"80801"`?
- Where does `any` come from when nobody wrote it — `JSON.parse`, `new Map()`, an untyped package declared with `declare module`?
- What does tsc say about the same lines when `config` is `unknown` instead?
- Why does `noImplicitAny` not stop any of this, and which typescript-eslint `no-unsafe-*` rules would?

## Examples it will need

- [ ] `any_is_contagious_port_sh.sh` — tsc's silence, then 80801 string, then the TypeError from toFixed
- [ ] `any_is_contagious_unknown_tserror.ts` — the TS18046 errors the same code gets when config is unknown instead of any
- [ ] `any_is_contagious_sources_sh.sh` — the declarations tsc emits for values from JSON.parse, new Map() and an untyped import, each any

## See also

- [`any`, `unknown` and `never`](../../23_Everyday_Types/any_unknown_and_never/README.md) — any and unknown side by side
- [`strict`](../../22_TypeScript_Basics/strict_mode_in_typescript/README.md) — noImplicitAny, which stops only the any nobody wrote
- [External data](../json_parse_and_external_data/README.md) — the most common source of any
- [Generic types](../../26_Generics/generic_types_and_defaults/README.md) — new Map(), an any nobody asked for
- [ESLint](../../31_Tooling/linting_with_eslint/README.md) — lint rules that follow any where tsc does not
- [Rust: What `unsafe` turns off ↗](https://masiarek.github.io/rust-learning-library/09_Advanced/what_unsafe_turns_off/index.html) — the Rust contrast: unsafe lifts five checks in one block; any spreads

## Sources to start from

- [TypeScript Handbook — any ↗](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)
- [TSConfig reference — noImplicitAny ↗](https://www.typescriptlang.org/tsconfig/#noImplicitAny)
