# 30 — Where types lie

**One line:** A program that tsc accepts under `strict` can still crash with a `TypeError`: five pages here show a way it happens, the clean type check beside the crash, and one shows the fix.

TypeScript is unsound by design: some checks are traded away for convenience and some claims are taken on trust. Each page shows a program that type-checks cleanly and then fails in Node. It starts with `any`, which switches checking off wherever it flows, then `as` assertions, then index access typed as always present. `JSON.parse` shows the door where most unchecked data comes in, and run-time validation is the fix at that door. It ends with array covariance, the unsoundness the language chose on purpose.

## The pages

<!-- lessons -->
| Page | Level | In one line | Status |
|---|---|---|---|
| [`any` is contagious](any_is_contagious/README.md) | 201 | `any` passes itself on: `config.port` read from an `any` is `any`, so `const next: number = port + 1` type-checks while holding the string `"80801"`, and `next.toFixed(2)` then throws `TypeError` with no word from tsc. | stub |
| [Type assertions](type_assertions_are_unchecked/README.md) | 201 | `{} as User` compiles and `user.name.toUpperCase()` then throws `TypeError`: `as` changes what tsc believes, not the value. tsc refuses only types with no overlap, like `"42" as number`, and `as unknown as number` gets past even that. | stub |
| [Index access](index_access_and_nouncheckedindexedaccess/README.md) | 201 | `prices[99]` on a `number[]` is typed `number`, so `prices[99].toFixed(2)` passes tsc under `strict` and throws `TypeError` in Node; `noUncheckedIndexedAccess`, which `strict` leaves off, adds `undefined` to every index read and catches it. | stub |
| [External data](json_parse_and_external_data/README.md) | 201 | `JSON.parse` is declared to return `any`, so `const order: Order = JSON.parse(text)` compiles whatever the text holds — with `total` sent as `"99"`, `order.total + 1` prints `991`. Under Node's own types `response.json()` returns `unknown` instead, and tsc demands a check. | stub |
| [Run-time validation](runtime_validation/README.md) | 201 | Types are gone at run time, so the check has to be code: a `parseOrder(data: unknown): Order` that tests each field with `typeof` and `in` satisfies tsc and turns `{"total": "99"}` into a `TypeError` at the border instead of a wrong `991` later. | stub |
| [Array covariance](array_covariance_is_unsound/README.md) | 301 | tsc lets a `Dog[]` be used as an `Animal[]`, so pushing a plain `Animal` through that alias type-checks and the next `d.bark()` on the original array throws `TypeError`; typing the alias `readonly Animal[]` closes the hole by removing `push`. | stub |
<!-- /lessons -->

## Boundaries

The compatibility rules themselves, variance included, are in Type compatibility; `any`, `unknown` and `never` are introduced in Everyday types.
