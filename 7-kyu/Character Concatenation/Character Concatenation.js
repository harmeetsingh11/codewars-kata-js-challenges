function transformString(str) {
  const n = str.length;
  const mid = Math.floor(n / 2);
  let result = '';

  // Loop until half the length (ignores middle if length is odd)
  for (let i = 0; i < mid; i++) {
    // Append: char from left + char from right + index (1-based)
    result += str[i] + str[n - 1 - i] + (i + 1);
  }

  return result;
}

console.log(transformString('abcdef')); // "af1be2cd3"
console.log(transformString('abc!def')); // "af1be2cd3"
console.log(transformString('abcd')); // "ad1bc2"
console.log(transformString('a')); // ""

/*
### Explanation:

- We loop from `i = 0` to `i < floor(n / 2)`:
  - This ensures we only process symmetrical pairs from both ends.
  - If the string has an odd length, the middle character is automatically skipped.
- For each `i`, we grab:
  - `str[i]` → from the **left** side.
  - `str[n - 1 - i]` → from the **right** side.
  - Append them together with `(i + 1)` as the counter.
- This gives you a clean and efficient `O(n)` solution with no extra space used beyond the result string.
*/
