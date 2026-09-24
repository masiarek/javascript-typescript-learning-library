// `===` on two objects asks one question: are they the same object? It never
// looks inside, so two objects with the same contents are not ===.
import { isDeepStrictEqual } from "node:util";

const row = (code, value) => console.log(`${code.padEnd(34)}${value}`);

console.log("const a = { n: 1 }; const b = a;");
const a = { n: 1 };
const b = a;
row("{ n: 1 } === { n: 1 }", { n: 1 } === { n: 1 });
row("a === b", a === b);
row("[1, 2] === [1, 2]", [1, 2] === [1, 2]);
row("{ n: 1 } == { n: 1 }", { n: 1 } == { n: 1 });
row('"milk" === "mi" + "lk"', "milk" === "mi" + "lk");
row("[a].includes({ n: 1 })", [a].includes({ n: 1 }));
row("new Set([a, b, { n: 1 }]).size", new Set([a, b, { n: 1 }]).size);
row("isDeepStrictEqual(a, { n: 1 })", isDeepStrictEqual(a, { n: 1 }));
