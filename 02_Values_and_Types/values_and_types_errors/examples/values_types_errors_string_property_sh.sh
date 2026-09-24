#!/usr/bin/env bash
# TypeError: Cannot create property 'discontinued' on string 'A-1999'
#
# A program that sets a property on a string. The driver writes it to a
# temporary folder, shows it, runs it with node as an ES module (.mjs, strict
# mode) and then as CommonJS (.cjs, sloppy mode), and prints what each run
# printed, the error line and the exit status -- not the stack trace, which
# names paths.
dir=$(mktemp -d)
trap 'rm -rf "$dir"' EXIT
cd "$dir" || exit 1

show() { echo "\$ cat $1"; cat "$1"; }
run() {
  echo "\$ node $1"
  node "$1" 2> stderr.txt
  local status=$?
  grep -E '^[A-Za-z]*Error' stderr.txt
  echo "exit status: $status"
}

cat > discontinue.mjs <<'EOF'
// Mark a product code as discontinued.
const sku = "A-1999";
sku.discontinued = true;
console.log(sku.discontinued);
EOF

show discontinue.mjs
run discontinue.mjs
echo "\$ cp discontinue.mjs discontinue.cjs"
cp discontinue.mjs discontinue.cjs
run discontinue.cjs
