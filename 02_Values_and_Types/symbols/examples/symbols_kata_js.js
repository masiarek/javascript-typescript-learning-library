// Kata solution: two taggers that both describe their key as "cache" never
// overwrite each other, because each one makes its own symbol.
function makeTagger(name) {
  const key = Symbol(name);
  return {
    tag(order, value) {
      order[key] = value;
    },
    read(order) {
      return order[key];
    },
  };
}

const first = makeTagger("cache");
const second = makeTagger("cache");
const order = { id: "A-1001" };
first.tag(order, "A");
second.tag(order, "B");

console.log(`first reads: ${first.read(order)}`);
console.log(`second reads: ${second.read(order)}`);
console.log(`JSON: ${JSON.stringify(order)}`);
console.log(`own keys: ${Reflect.ownKeys(order).map(String).join(", ")}`);
