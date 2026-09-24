// What `const b = a` copies: whatever a holds. For an object that is a
// reference, so a write through b lands on the one object a names too.
// A string has no part that can be written, so no change made through one
// name can reach the other.
const show = (label, value) => console.log(`  ${label.padEnd(10)}${value}`);

console.log("const a = { count: 1 }; const b = a; b.count = 2;");
const a = { count: 1 };
const b = a;
b.count = 2;
show("a.count", a.count);
show("b.count", b.count);
show("a === b", a === b);

console.log("let c = a; c = { count: 9 };");
let c = a;
c = { count: 9 };
show("a.count", a.count);
show("c.count", c.count);
show("a === c", a === c);

console.log('const s = "milk"; const t = s; t[0] = "M";');
const s = "milk";
const t = s;
try {
  t[0] = "M"; // an ES module is strict mode code, so this throws
} catch (error) {
  show("throws", `${error.name}: ${error.message}`);
}
show("s", JSON.stringify(s));

console.log('let u = s; u += "!";');
let u = s;
u += "!";
show("s", JSON.stringify(s));
show("u", JSON.stringify(u));
