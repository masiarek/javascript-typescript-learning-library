// The mistakes valid-typeof and eqeqeq flag, where tsc knows the types.
const readings: (number | string)[] = [21.5, "19.0"];
const textReadings = readings.filter((reading) => typeof reading === "strnig");

const stock: string = "0";
const soldOut = stock == 0;
