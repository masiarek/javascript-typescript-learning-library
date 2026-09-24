#!/usr/bin/env bash
# eqeqeq, as it comes and then with {"null": "ignore"}, which lets the one
# idiom x == null through. ESLint prints each file's absolute path above its
# report; sed strips this folder's part of it.
here=$(pwd -P)
lint() {
  echo "\$ eslint --no-config-lookup --rule '$1' $2"
  eslint --no-config-lookup --rule "$1" "$2" | sed "s|$here/||"
  echo "exit status: ${PIPESTATUS[0]}"
}
always='{"eqeqeq": "error"}'
null_ignored='{"eqeqeq": ["error", "always", {"null": "ignore"}]}'
echo '$ node values_lints_eqeqeq_bad_js.js'
node values_lints_eqeqeq_bad_js.js
lint "$always" values_lints_eqeqeq_bad_js.js
echo '$ node values_lints_eqeqeq_good_js.js'
node values_lints_eqeqeq_good_js.js
lint "$always" values_lints_eqeqeq_good_js.js
lint "$null_ignored" values_lints_eqeqeq_good_js.js
lint "$null_ignored" values_lints_eqeqeq_bad_js.js
