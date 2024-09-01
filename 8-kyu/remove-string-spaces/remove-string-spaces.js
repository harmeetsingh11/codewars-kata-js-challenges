// SOLUTION 1: Using replace method with a regular expression
function noSpace(x) {
  // This line replaces all whitespace characters (spaces, tabs, etc.) with an empty string.
  // The regular expression /\s/g is used:
  // - \s matches any whitespace character (space, tab, newline, etc.)
  // - g flag stands for "global," meaning it will replace all occurrences of whitespace in the string, not just the first one.
  return x.replace(/\s/g, '');
}

// SOLUTION 2: Using match method with a regular expression
function noSpace(x) {
  // This line extracts all non-whitespace characters from the string.
  // The regular expression \S matches any character that is NOT a whitespace.
  // - \S (uppercase 'S') is the opposite of \s and matches non-whitespace characters.
  // - g flag is used to match all non-whitespace characters globally.
  // match() returns an array of all non-whitespace characters, which are then joined together into a string using join("").
  return x.match(/\S/g).join('');
}
