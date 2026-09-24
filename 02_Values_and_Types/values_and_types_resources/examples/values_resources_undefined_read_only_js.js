// "undefined and NaN are global variables you can change": since ES5 they are
// read-only properties of the global object.
for (const name of ["undefined", "NaN"]) {
  const { writable, configurable } = Object.getOwnPropertyDescriptor(globalThis, name);
  console.log(`${name.padEnd(10)}writable: ${writable}, configurable: ${configurable}`);
}

// Sloppy-mode code, like a script of 2008: the assignments run, and change nothing.
const oldScript = new Function(`
  undefined = "changed";
  NaN = 0;
  return typeof undefined + " " + String(NaN);
`);
console.log(`sloppy code, after assigning: ${oldScript()}`);

// Strict code (this file is an ES module, so it is strict): the same assignment throws.
try {
  undefined = "changed";
} catch (error) {
  console.log(`strict code: ${error.name}: ${error.message}`);
}
