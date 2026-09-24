// Counts the readings that arrived as text, so they can be converted later.
const readings = [21.5, "19.0", 22.25, "20.5"];
const textReadings = readings.filter((reading) => typeof reading === "strnig");
console.log(`readings that arrived as text: ${textReadings.length}`);
