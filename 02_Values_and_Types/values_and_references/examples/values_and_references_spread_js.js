// `{ ...a }` makes a new object and copies a's properties into it, one level
// deep: a property that holds an array copies the reference to that array.
const show = (label, value) => console.log(`  ${label.padEnd(22)}${value}`);

console.log('const a = { owner: "ana", items: ["milk"] };');
const a = { owner: "ana", items: ["milk"] };
console.log('const c = { ...a }; c.owner = "ben"; c.items.push("eggs");');
const c = { ...a };
c.owner = "ben";
c.items.push("eggs");
show("c === a", c === a);
show("c.items === a.items", c.items === a.items);
show("a.owner", JSON.stringify(a.owner));
show("a.items", JSON.stringify(a.items));
