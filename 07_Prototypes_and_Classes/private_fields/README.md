# Private fields — `#name` is enforced by the language

**Level:** 201 · for anyone who has used an underscore to mean private

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A `#name` field is not a property: `Object.keys`, `Reflect.ownKeys` and `JSON.stringify` never see it, code outside the class body that names it fails to parse, and reading it from an object that lacks it — even a `Proxy` of an instance — throws a `TypeError`.

**Keywords:** `#private`, `#private in obj`

## What the finished page will answer

- Which of `Object.keys`, `Reflect.ownKeys`, `JSON.stringify`, `structuredClone` and `console.log` show a `#field`?
- Why is `obj.#balance` outside the class a `SyntaxError` before the program runs, rather than an error when the line executes?
- What does reading `#balance` from an object that lacks it throw, and how does `#balance in obj` test for it without throwing?
- Why does calling a method through a `Proxy` of an instance throw when the method reads a `#field`?
- Can a method read the `#field` of another instance of the same class, and can a subclass read its parent's?

## Examples it will need

- [ ] `private_fields_invisible_js.js` — an instance with a #field passed to Object.keys, Reflect.ownKeys, JSON.stringify, structuredClone and console.log, none of which show it
- [ ] `private_fields_brand_check_js.js` — #balance in obj for an instance and a plain object, the TypeError from reading the field off the wrong object, and the same TypeError through a Proxy
- [ ] `private_fields_outside_class_sh.sh` — a file that names #balance outside the class body, rejected with a SyntaxError before its first line runs, and the exit status

## See also

- [`private` versus `#private`](../../28_Classes_in_TypeScript/private_versus_hash_private/README.md) — the private keyword, a check that vanishes at run time
- [`Proxy` and `Reflect`](../../17_Metaprogramming/proxy_and_reflect/README.md) — why a Proxy breaks methods that read #fields
- [`WeakMap` and `WeakSet`](../../08_Arrays_and_Collections/weakmap_and_weakset/README.md) — the WeakMap pattern #fields replaced
- [Property keys](../../06_Objects/property_keys/README.md) — the key listings a #field never appears in
- [Static members and static blocks](../static_members/README.md) — static #fields, private to the class itself
- [Rust: Modules and visibility ↗](https://masiarek.github.io/rust-learning-library/27_Modules/modules_and_visibility/index.html) — how Rust draws the privacy wall: around a module, not a class

## Sources to start from

- [MDN — Private elements ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
- [ECMA-262 — PrivateGet ↗](https://tc39.es/ecma262/#sec-privateget)
- [V8 — Private brand checks ↗](https://v8.dev/features/private-brand-checks)
