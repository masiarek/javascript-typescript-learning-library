#!/usr/bin/env bash
# TypeError: Do not know how to serialize a BigInt
#
# A program that passes a BigInt to JSON.stringify. The driver writes it to a
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

cat > payment_json.mjs <<'EOF'
// Send a payment as JSON; its amount is a BigInt.
const payment = { id: 7, amountCents: 9007199254740993n };
console.log(JSON.stringify(payment));
EOF

show payment_json.mjs
run payment_json.mjs
