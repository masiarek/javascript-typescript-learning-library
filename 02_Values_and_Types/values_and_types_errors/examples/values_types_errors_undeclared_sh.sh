#!/usr/bin/env bash
# ReferenceError: window is not defined
#
# A program that compares a name nobody declared with undefined. The driver
# writes it to a temporary folder, shows it, runs it with node, and prints the
# error line and the exit status -- not the stack trace, which names paths.
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

cat > save_setting.mjs <<'EOF'
// The same file runs in a web page and in Node: where should a setting go?
const store = window === undefined ? "a file" : "localStorage";
console.log(`saving to ${store}`);
EOF

show save_setting.mjs
run save_setting.mjs
