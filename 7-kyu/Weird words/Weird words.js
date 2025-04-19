function shiftString(s) {
  return s.replace(/[a-zA-Z]/g, (char) => {
    // Get character code
    const code = char.charCodeAt(0);

    // Handle lowercase letters
    if (char >= 'a' && char <= 'z') {
      // Wrap 'z' to 'a'
      return String.fromCharCode(code === 122 ? 97 : code + 1);
    }

    // Handle uppercase letters
    if (char >= 'A' && char <= 'Z') {
      // Wrap 'Z' to 'A'
      return String.fromCharCode(code === 90 ? 65 : code + 1);
    }

    // Should never reach here due to regex but just in case
    return char;
  });
}

console.log(shiftString('Hello')); // "Ifmmp"
console.log(shiftString('What is your name?')); // "Xibu jt zpvs obnf?"
console.log(shiftString('zoo')); // "app"
console.log(shiftString('zzZAaa')); // "aaABbb"

/*
### Explanation:
- `replace(/[a-zA-Z]/g, callback)` replaces only alphabet characters.
- For each character:
  - If it’s `'z'` or `'Z'`, we wrap to `'a'` or `'A'` respectively.
  - Otherwise, we increment its char code by 1.
- Special characters and spaces remain untouched, since the regex only targets letters.
*/
