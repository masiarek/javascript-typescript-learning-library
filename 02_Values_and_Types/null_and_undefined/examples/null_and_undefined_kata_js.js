// Kata solution: one check that treats a left-out volume, undefined and null
// alike, and keeps a stored 0.
function volumeOf(settings) {
  return settings.volume ?? 50;
}

// Tempting, and wrong for a stored 0: || falls back on 0 as well.
function withOr(settings) {
  return settings.volume || 50;
}

// Tempting, and wrong for JSON's null: the default fires only for undefined.
function withDefault(settings) {
  const { volume = 50 } = settings;
  return volume;
}

const inputs = [
  ["{}", {}],
  ["{ volume: undefined }", { volume: undefined }],
  [`JSON.parse('{"volume":null}')`, JSON.parse('{"volume":null}')],
  ["{ volume: 0 }", { volume: 0 }],
  ["{ volume: 80 }", { volume: 80 }],
];

console.log("settings".padEnd(32) + "volumeOf".padEnd(10) + "|| 50".padEnd(8) + "{ volume = 50 }");
for (const [label, settings] of inputs) {
  console.log(
    label.padEnd(32) +
      String(volumeOf(settings)).padEnd(10) +
      String(withOr(settings)).padEnd(8) +
      String(withDefault(settings)),
  );
}
