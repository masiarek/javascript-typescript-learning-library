#!/usr/bin/env bash
# TypeError: Cannot assign to read only property '0' of string 'ada'
#
# A program that assigns to a character of a string. The driver writes it to a
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

cat > capitalize.mjs <<'EOF'
// Capitalize a customer's first name in place.
let firstName = "ada";
firstName[0] = firstName[0].toUpperCase();
console.log(firstName);
EOF

show capitalize.mjs
run capitalize.mjs
echo "\$ cp capitalize.mjs capitalize.cjs"
cp capitalize.mjs capitalize.cjs
run capitalize.cjs
