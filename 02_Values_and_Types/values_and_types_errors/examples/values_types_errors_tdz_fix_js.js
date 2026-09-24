// Declare the variable before the first line that reads it: a let with no
// value holds undefined.
let taxRate;
if (taxRate === undefined) {
  console.log("no tax rate yet: using 0");
}
taxRate = 0.2;
console.log(`tax rate ${taxRate}`);
