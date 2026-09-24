// match returns null when nothing matches: check for it before indexing.
for (const label of ["order #7", "order #pending"]) {
  const found = label.match(/\d+/);
  if (found === null) {
    console.log(`${label}: match gave ${found}, no number yet`);
  } else {
    console.log(`${label}: number ${found[0]}`);
  }
}
