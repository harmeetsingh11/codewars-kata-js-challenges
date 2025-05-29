function palindrome(num) {
  // Check if input is a non-negative integer
  if (!Number.isInteger(num) || num < 0) return 'Not valid';

  const str = String(num);
  const len = str.length;

  // Single digit numbers are not considered palindromes
  if (len < 2) return false;

  // Check all substrings of length >= 2 for palindrome
  for (let i = 0; i < len; i++) {
    for (let j = i + 2; j <= len; j++) {
      const sub = str.slice(i, j);
      if (sub === [...sub].reverse().join('')) return true;
    }
  }

  return false;
}

console.log(palindrome(5)); // false
console.log(palindrome(1221)); // true
console.log(palindrome(141221001)); // true
console.log(palindrome(1215)); // true
console.log(palindrome(1294)); // false
console.log(palindrome('109982')); // "Not valid"

/*
### Explanation:

1. **Validation Check**:

   * `Number.isInteger(num)` ensures the input is a valid integer.
   * `num < 0` ensures it’s non-negative.
   * If either fails, return `"Not valid"`.

2. **Convert number to string**:

   * This simplifies checking substrings and reversing.

3. **Nested loops**:

   * Outer loop selects start index `i`.
   * Inner loop selects end index `j`, starting from `i + 2` to guarantee at least **2 digits**.

4. **Check if substring is a palindrome**:

   * Use `slice(i, j)` to extract the substring.
   * Reverse the substring using `split → reverse → join`.
   * If it matches the original substring, return `true`.

5. **Return `false`**:

   * If no palindrome of length ≥ 2 is found.
*/
