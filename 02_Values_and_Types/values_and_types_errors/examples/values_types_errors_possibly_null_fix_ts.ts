// After the null check, tsc knows found is not null in the else branch.
for (const label of ["order #7", "order #pending"]) {
  const found = label.match(/\d+/);
  if (found === null) {
    console.log(`${label}: no number yet`);
  } else {
    console.log(`${label}: number ${found[0]}`);
  }
}
