# Live bindings — a named import sees the exporter's variable, not a copy

**Level:** 201 · for anyone who exports a variable that changes

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** An imported name is a read-only view of the exporter's variable: after the exporter runs `count += 1` the importer reads 1, assigning to the import throws a `TypeError`, and a CommonJS destructured copy still reads 0.

**Keywords:** `live binding`

## What the finished page will answer

- What does the importer read after the exporter's `increment()` changes `count`, and what does a CommonJS `const { count } = require(...)` read?
- Why does assigning to an imported `let` throw `TypeError: Assignment to constant variable.` when the exporter declared it with `let`?
- Does `export default count` follow later changes to `count`, and how does a named export of the same variable differ?
- How can an importer change an exported value, if not by assigning to it?
- Does a change to a property of an exported object show up in CommonJS too, and why is that not a live binding?

## Examples it will need

- [ ] `live_bindings_counter_sh.sh` — the importer's count after increment(), the TypeError from assigning to it, and the CommonJS copy that stays 0
- [ ] `live_bindings_default_export_sh.sh` — export default count beside a named export of the same variable, after the exporter changes count

## See also

- [`import` and `export`](../import_and_export/README.md) — the import forms whose bindings this page follows
- [Module cycles](../module_cycles/README.md) — reading a live binding before the exporter has set it
- [Values and references](../../02_Values_and_Types/values_and_references/README.md) — what ordinary assignment copies, for contrast
- [`const` is not frozen](../../04_Variables_and_Scope/const_is_not_frozen/README.md) — a binding you cannot reassign, whose object can still change

## Sources to start from

- [MDN — export ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [ECMA-262 — Module Environment Records ↗](https://tc39.es/ecma262/#sec-module-environment-records)
- [MDN — import ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
