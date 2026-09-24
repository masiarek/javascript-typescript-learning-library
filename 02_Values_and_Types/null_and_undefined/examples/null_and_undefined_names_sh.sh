# `undefined` is a name, which a function can declare for itself; `null` is a
# literal, like `42`. Four small files, each run by node: what it printed, the
# error line of its stderr (never the stack trace), and its exit status. A .cjs
# file is sloppy-mode code; an .mjs file is a module, which is always strict.
dir=$(mktemp -d)
trap 'rm -rf "$dir"' EXIT
cd "$dir" || exit 1

cat > shadow_undefined.mjs <<'EOF'
function describe() {
  let undefined = 1;
  return `typeof undefined is ${typeof undefined}, typeof void 0 is ${typeof void 0}`;
}
console.log(`inside describe():  ${describe()}`);
console.log(`outside:            typeof undefined is ${typeof undefined}`);
EOF

cat > assign_undefined.cjs <<'EOF'
console.log("this line runs");
undefined = 1;
console.log(`after the assignment, typeof undefined is ${typeof undefined}`);
EOF
cp assign_undefined.cjs assign_undefined.mjs

cat > assign_null.mjs <<'EOF'
console.log("this line never runs");
null = 1;
EOF

for file in shadow_undefined.mjs assign_undefined.cjs assign_undefined.mjs assign_null.mjs; do
  echo "\$ node $file"
  node "$file" 2>stderr.txt
  status=$?
  grep -E '^[A-Za-z]*Error' stderr.txt
  echo "exit status: $status"
  [ "$file" = assign_null.mjs ] || echo
done
