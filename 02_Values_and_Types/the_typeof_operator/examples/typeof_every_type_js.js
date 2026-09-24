// What typeof says about one value of each of the eight types, then about a
// function, an arrow function, an array, a class and an object the class built.
class Order {}

const samples = [
  ["undefined", undefined],
  ["null", null],
  ["true", true],
  ["42", 42],
  ["42n", 42n],
  ['"text"', "text"],
  ['Symbol("id")', Symbol("id")],
  ["{ id: 7 }", { id: 7 }],
  ["function total() {}", function total() {}],
  ["((price) => price)", (price) => price],
  ["[1999, 250]", [1999, 250]],
  ["Order", Order],
  ["new Order()", new Order()],
];

for (const [source, value] of samples) {
  console.log(`typeof ${source.padEnd(21)}${JSON.stringify(typeof value)}`);
}

const answers = [...new Set(samples.map(([, value]) => typeof value))];
console.log(`${answers.length} different answers: ${answers.join(", ")}`);
