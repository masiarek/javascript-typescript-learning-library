#!/usr/bin/env bash
# TypeError: Cannot mix BigInt and other types, use explicit conversions
#
# A program that adds a Number to a BigInt. The driver writes it to a
# temporary folder, shows it, runs it with node, and prints the error line and
# the exit status -- not the stack trace, which names paths.
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

cat > add_fee.mjs <<'EOF'
// A balance past 2**53, kept exact as a BigInt, plus a fee in cents.
const balanceCents = 9007199254740993n;
const feeCents = 250;
console.log(`${balanceCents + feeCents}n`);
EOF

show add_fee.mjs
run add_fee.mjs
