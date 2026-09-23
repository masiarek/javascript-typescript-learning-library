# `Proxy` and `Reflect` — intercepting property access

**Level:** 301 · for anyone who wants to log, check or fake property access

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** A `Proxy` sees only the operations you trap — `"a" in p` never reaches a `get` trap, because `in` is the `has` trap — and it cannot lie about a frozen target: returning `0` for a frozen `answer: 42` throws a `TypeError`.

**Keywords:** `Proxy`, `Reflect`, `Proxy.revocable`

## What the finished page will answer

- Which operations does a `get` trap see: does `"a" in p`, `Object.keys(p)` or `p.missing` go through it?
- Why does a trap that returns `0` for a frozen `answer: 42` throw a `TypeError`, and which other invariants does the engine check?
- What does `Reflect.get(target, key, receiver)` do that `target[key]` does not, when the target has a getter?
- Why does `Reflect` have exactly 13 functions?
- What does a revoked proxy from `Proxy.revocable` throw, and can a program tell a proxy from its target?

## Examples it will need

- [ ] `proxy_and_reflect_trap_log_js.js` — a log of which traps fire for a read, in, Object.keys, an assignment and delete on one proxy
- [ ] `proxy_and_reflect_invariants_js.js` — the TypeError from a get trap that lies about a frozen property, and the error from a revoked proxy

## See also

- [Property descriptors](../../06_Objects/property_descriptors/README.md) — the non-writable, non-configurable properties a proxy cannot lie about
- [`freeze`, `seal` and `preventExtensions`](../../06_Objects/freeze_seal_and_prevent_extensions/README.md) — the frozen targets whose invariants every trap must keep
- [Getters and setters](../../06_Objects/getters_and_setters/README.md) — the receiver that Reflect.get passes on
- [Well-known symbols](../well_known_symbols/README.md) — the other way to hook what the language does to an object

## Sources to start from

- [MDN — Proxy ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [MDN — Reflect ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
- [ECMA-262 — Proxy [[Get]] ( propertyKey, receiver ) ↗](https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver)
