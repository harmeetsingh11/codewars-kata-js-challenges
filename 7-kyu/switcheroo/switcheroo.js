function switcheroo(str) {
  // Use the replace method with a regular expression to replace 'a' with 'b' and 'b' with 'a'.
  return str.replace(/[ab]/g, (char) => (char === 'a' ? 'b' : 'a'));
}

// Explanation:
// 1. `replace(/[ab]/g, ...)`: We use a regular expression `/[ab]/g` to match every 'a' or 'b' in the string globally.
// 2. `char => char === 'a' ? 'b' : 'a'`: For each matched character, if it is 'a', we replace it with 'b'.
//    If it is 'b', we replace it with 'a'. 'c' is untouched since it isn't matched by the regex.
