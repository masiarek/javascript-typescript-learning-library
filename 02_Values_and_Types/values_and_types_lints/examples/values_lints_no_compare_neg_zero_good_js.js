// Finds the thermometer readings that rounded to negative zero, with Object.is.
const readings = [0.3, -0.4, 2.6].map(Math.round);
readings.forEach((reading, index) => {
  if (Object.is(reading, -0)) console.log(`reading ${index} rounded to -0`);
});
