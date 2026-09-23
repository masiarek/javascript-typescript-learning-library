# Custom errors and `cause` — wrapping an error without losing the first one

**Level:** 201 · for anyone who has wrapped a low-level error in a friendlier one

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `new Error(message, { cause })` keeps the original error on `.cause`, so wrapping loses nothing; but a bare `class ConfigError extends Error {}` still calls itself `"Error"` — its `name` comes from `Error.prototype` until you set your own.

**Keywords:** `cause`, `extends Error`, `ErrorOptions`

## What the finished page will answer

- What do `String(err)` and `err.name` show for `class ConfigError extends Error {}`, and which one-line change makes them say `ConfigError`?
- Where does `cause` live — an own property, present only when the option is passed — and what does `{ cause: undefined }` create?
- How do Node's crash report and `console.log(err)` show a chain of causes?
- How does `catch` tell error classes apart — `instanceof`, `name` or a `code` like Node's `ENOENT` — and which of them survives `structuredClone`?
- In TypeScript, what type does `err.cause` have, and how does a subclass constructor accept `ErrorOptions`?

## Examples it will need

- [ ] `custom_errors_name_js.js` — `String(err)`, `err.name` and `instanceof` for a bare subclass, one with a `name` field, and one wrapping a cause
- [ ] `custom_errors_cause_chain_sh.sh` — Node's crash report for an error with a two-level cause chain, with the stack lines removed
- [ ] `custom_errors_cause_unknown_tserror.ts` — tsc's TS2322 for assigning `err.cause` to a `string`

## See also

- [Built-in error types](../error_types/README.md) — the built-in classes a custom error sits beside
- [`extends` and `super`](../../07_Prototypes_and_Classes/inheritance_and_super/README.md) — `extends Error` and the `super(message, options)` call
- [`instanceof`](../../07_Prototypes_and_Classes/instanceof/README.md) — how `catch` tells one error class from another
- [Unhandled errors](../unhandled_errors_in_node/README.md) — where Node prints the `[cause]` chain
- [Rust: `anyhow` and context ↗](https://masiarek.github.io/rust-learning-library/02_Errors/anyhow_and_context/index.html) — adding context to an error in Rust while keeping the source
- [Rust: `thiserror` vs `anyhow` ↗](https://masiarek.github.io/rust-learning-library/02_Errors/thiserror_vs_anyhow/index.html) — the two ways Rust defines and wraps error types

## Sources to start from

- [MDN — Error: cause ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
- [ECMA-262 — InstallErrorCause ↗](https://tc39.es/ecma262/#sec-installerrorcause)
- [TC39 — Error cause proposal ↗](https://github.com/tc39/proposal-error-cause)
