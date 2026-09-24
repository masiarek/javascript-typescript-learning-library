// Kata solution: the mean of BigInt timestamps, rounded toward zero. Two
// Numbers hide in the obvious version -- reduce's starting 0 and
// values.length -- and either one would throw a TypeError, so both are BigInts.
function mean(values) {
  const total = values.reduce((sum, value) => sum + value, 0n);
  return total / BigInt(values.length);
}

const timestamps = [1790000000000000000n, 1790000000000000001n, 1790000000000000005n];
console.log(`mean of the three timestamps: ${mean(timestamps)}n`);
console.log(`mean of -7n and 0n: ${mean([-7n, 0n])}n`);

const asNumbers = timestamps.map(Number);
const numberMean = asNumbers.reduce((sum, value) => sum + value, 0) / asNumbers.length;
console.log(`the same mean in Numbers: ${numberMean}`);
