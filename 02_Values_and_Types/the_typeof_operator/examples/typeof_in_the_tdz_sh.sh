#!/usr/bin/env bash
# typeof on a name nothing declares, the same name handed to a helper function,
# and typeof on a let whose line has not run yet. Each program is written to a
# temporary folder and run by node; the driver prints the program, what it
# printed, the error line and the exit status.
set -u
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
cd "$work" || exit 1

cat > bare.mjs <<'EOF'
console.log(window);
EOF

cat > guarded.mjs <<'EOF'
console.log(typeof window);
EOF

cat > helper.mjs <<'EOF'
const isDefined = (value) => typeof value !== "undefined";
console.log(isDefined(window));
EOF

cat > dead_zone.mjs <<'EOF'
console.log(typeof total);
let total = 0;
EOF

for program in bare.mjs guarded.mjs helper.mjs dead_zone.mjs; do
  [ "$program" = bare.mjs ] || echo
  echo "\$ cat $program"
  cat "$program"
  echo "\$ node $program"
  node "$program" 2> stderr.txt
  status=$?
  # Only the error's own line: the rest of stderr is a stack trace with paths.
  grep -E '^[A-Za-z]*Error' stderr.txt
  echo "exit status: $status"
done
