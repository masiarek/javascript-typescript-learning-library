// Counts the readings that failed to parse, by comparing each one with NaN.
const readings = ["21.5", "n/a", "19.0", "--"].map(Number);
const failed = readings.filter((reading) => reading === NaN);
console.log(`failed readings: ${failed.length} of ${readings.length}`);
