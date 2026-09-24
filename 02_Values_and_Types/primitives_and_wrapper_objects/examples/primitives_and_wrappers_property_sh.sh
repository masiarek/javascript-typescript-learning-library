# One program, run twice: as a CommonJS file (.cjs), which is sloppy-mode code
# unless it says "use strict", and as an ES module (.mjs), which is always
# strict. Printed for each: its output, the error line of its stderr (never
# the stack trace), and its exit status.
dir=$(mktemp -d)
trap 'rm -rf "$dir"' EXIT
cd "$dir" || exit 1

cat > note_sloppy.cjs <<'EOF'
const sku = "SKU-1042";
sku.note = "fragile";
console.log(`sku.note is ${sku.note}`);
EOF
cp note_sloppy.cjs note_strict.mjs

for file in note_sloppy.cjs note_strict.mjs; do
  echo "\$ node $file"
  node "$file" 2>stderr.txt
  status=$?
  grep -E '^[A-Za-z]*Error' stderr.txt
  echo "exit status: $status"
  [ "$file" = note_strict.mjs ] || echo
done
