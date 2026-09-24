#!/usr/bin/env bash
# ReferenceError: Cannot access 'taxRate' before initialization
#
# A program that guards with typeof on a let declared further down. The
# driver writes it to a temporary folder, shows it, runs it with node, and
# prints the error line and the exit status -- not the stack trace, which
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

cat > tax_rate.mjs <<'EOF'
// Use a default until a tax rate has been set.
if (typeof taxRate === "undefined") {
  console.log("no tax rate yet: using 0");
}
let taxRate = 0.2;
console.log(`tax rate ${taxRate}`);
EOF

show tax_rate.mjs
run tax_rate.mjs
