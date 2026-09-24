// Counts the readings that failed to parse, with Number.isNaN.
const readings = ["21.5", "n/a", "19.0", "--"].map(Number);
const failed = readings.filter((reading) => Number.isNaN(reading));
console.log(`failed readings: ${failed.length} of ${readings.length}`);
