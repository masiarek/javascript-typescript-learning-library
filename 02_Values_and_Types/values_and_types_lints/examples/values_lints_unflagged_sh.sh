#!/usr/bin/env bash
# The programs under "What no lint catches": ESLint with every rule on this page
# switched on at once, then tsc --strict reading the same JavaScript (--checkJs).
# ESLint prints a path only when it reports something; sed would strip it.
here=$(pwd -P)
rules="use-isnan no-compare-neg-zero valid-typeof eqeqeq no-undef-init
no-shadow-restricted-names no-new-wrappers no-extend-native
no-new-native-nonconstructor no-implicit-coercion no-loss-of-precision
no-constant-binary-expression"
args=()
echo '$ eslint --no-config-lookup \'
for rule in $rules; do
  args+=(--rule "{\"$rule\": \"error\"}")
  echo "    --rule '{\"$rule\": \"error\"}' \\"
done
echo '    values_lints_unflagged_*_js.js'
eslint --no-config-lookup "${args[@]}" values_lints_unflagged_*_js.js | sed "s|$here/||"
echo "exit status: ${PIPESTATUS[0]}"
echo '$ tsc --ignoreConfig --noEmit --strict --allowJs --checkJs --module nodenext values_lints_unflagged_*_js.js'
tsc --ignoreConfig --noEmit --strict --allowJs --checkJs --module nodenext values_lints_unflagged_*_js.js
echo "exit status: $?"
