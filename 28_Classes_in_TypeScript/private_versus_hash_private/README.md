# `private` versus `#private` — a compile-time check versus a run-time wall

**Level:** 201 · for anyone who has written a class in TypeScript

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `private` is a compile-time check that Node erases: `acct["pin"]` type-checks and prints `1234`, and `JSON.stringify` and `Object.keys` both show the field. A `#balance` field is enforced by the JavaScript engine and shows up in neither.

**Keywords:** `private`, `protected`, `public`

## What the finished page will answer

- What does tsc say about `acct.pin` and about `acct["pin"]`, and why is the bracket form allowed?
- What do `JSON.stringify`, `Object.keys` and `console.log` show for an object with a `private` field and a `#` field?
- What happens when code outside the class writes `acct.#balance` — a tsc error, a Node `SyntaxError`, or both?
- Can a subclass read a `private` field, a `protected` one and a `#` one?
- Why can an object literal `{ pin: 1234 }` not stand in for a class with a `private pin`, when structural typing would otherwise allow it?

## Examples it will need

- [ ] `private_versus_hash_private_visible_sh.sh` — tsc's verdict on acct["pin"], then what Node prints for it, for JSON.stringify and for Object.keys
- [ ] `private_versus_hash_private_errors_tserror.ts` — tsc's errors for acct.pin, acct.#balance and a subclass reading each kind of field
- [ ] `private_versus_hash_private_nominal_tserror.ts` — the TS2322 error for an object literal passed where a class with a private field is expected

## See also

- [Private fields](../../07_Prototypes_and_Classes/private_fields/README.md) — #name, the privacy JavaScript itself enforces
- [Types are erased](../../22_TypeScript_Basics/types_are_erased/README.md) — why private leaves nothing behind
- [JSON](../../06_Objects/json/README.md) — what JSON.stringify includes
- [Parameter properties](../parameter_properties/README.md) — private on a constructor parameter, which Node cannot strip
- [Rust: Modules and visibility ↗](https://masiarek.github.io/rust-learning-library/27_Modules/modules_and_visibility/index.html) — privacy in Rust, also compile-time, but drawn around modules

## Sources to start from

- [TypeScript Handbook — Member visibility ↗](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)
- [MDN — Private elements ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
