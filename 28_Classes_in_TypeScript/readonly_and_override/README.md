# `readonly` and `override` — what each modifier catches, and what slips past it

**Level:** 201 · for anyone who has written a class in TypeScript

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `readonly` blocks `this.port = 0` inside the class but not a write through a `{ port: number }` alias of the same object; `override` catches a misspelt method, but leaving it off is an error only under `noImplicitOverride`, which `strict` leaves out.

**Keywords:** `override`, `noImplicitOverride`

## What the finished page will answer

- Where may a `readonly` field be assigned — in its declaration, in the constructor, in another method?
- Why does assigning a `Config` to a `{ port: number }` variable let you change `port` with no error?
- What does `Object.freeze` stop that `readonly` cannot, and what does a write to a frozen object do in an ES module?
- What does `override` on a misspelt method report, and what does `noImplicitOverride` add for a method that overrides without saying so?
- Which flags does `strict` turn on in TypeScript 7, and is `noImplicitOverride` one of them?

## Examples it will need

- [ ] `readonly_and_override_errors_sh.sh` — the TS4117 did-you-mean for a misspelt override and the TS2540 readonly error, then TS4114 once --noImplicitOverride is on
- [ ] `readonly_and_override_alias_ts.ts` — a readonly port changed to 9999 through a mutable alias, then the TypeError a frozen object throws for the same write

## See also

- [`freeze`, `seal` and `preventExtensions`](../../06_Objects/freeze_seal_and_prevent_extensions/README.md) — the run-time lock that readonly is not
- [Object types](../../23_Everyday_Types/object_types/README.md) — readonly on object type properties
- [`strict`](../../22_TypeScript_Basics/strict_mode_in_typescript/README.md) — what strict turns on, which excludes noImplicitOverride
- [`extends` and `super`](../../07_Prototypes_and_Classes/inheritance_and_super/README.md) — the methods override refers to
- [Rust: Borrowing: `&T`, `&mut T`, and where a borrow ends ↗](https://masiarek.github.io/rust-learning-library/18_Ownership/borrowing/index.html) — a Rust shared borrow forbids writes through every path, not one name

## Sources to start from

- [TypeScript Handbook — readonly ↗](https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly)
- [TSConfig reference — noImplicitOverride ↗](https://www.typescriptlang.org/tsconfig/#noImplicitOverride)
- [TypeScript 4.3 release notes — override and noImplicitOverride ↗](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html#override-and-the---noimplicitoverride-flag)
