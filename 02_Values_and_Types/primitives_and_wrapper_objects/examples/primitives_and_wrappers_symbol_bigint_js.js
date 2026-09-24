// Symbol and BigInt are functions to call, not constructors: `new` throws.
const attempts = [
  ['new Symbol("id")', () => new Symbol("id")],
  ["new BigInt(10)", () => new BigInt(10)],
  ['new String("id")', () => new String("id")],
];
for (const [expression, attempt] of attempts) {
  try {
    console.log(`${expression.padEnd(24)}made a value of type ${typeof attempt()}`);
  } catch (error) {
    console.log(`${expression.padEnd(24)}${error.name}: ${error.message}`);
  }
}

// Called without `new`, each one returns a primitive.
console.log("");
console.log(`${'typeof Symbol("id")'.padEnd(24)}${typeof Symbol("id")}`);
console.log(`${"typeof BigInt(10)".padEnd(24)}${typeof BigInt(10)}`);

// Object(value) wraps any primitive, these two included.
console.log("");
const wrapped = [
  ['Object(Symbol("id"))', Object(Symbol("id")), Symbol],
  ["Object(10n)", Object(10n), BigInt],
  ['Object("id")', Object("id"), String],
];
console.log("expression".padEnd(24) + "typeof".padEnd(9) + "instanceof".padEnd(13) + "typeof valueOf()");
for (const [expression, wrapper, Constructor] of wrapped) {
  console.log(
    expression.padEnd(24) +
      (typeof wrapper).padEnd(9) +
      String(wrapper instanceof Constructor).padEnd(13) +
      typeof wrapper.valueOf(),
  );
}
