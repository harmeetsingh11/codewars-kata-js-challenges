function squareBlock(num) {
  // Convert number to string to work with digits
  const str = String(num);

  // Length of digits
  const len = str.length;

  // Find square root of length
  const root = Math.sqrt(len);

  // If length is not a perfect square, return message
  if (root % 1 !== 0) return 'Not a perfect square!';

  // Split string into equal chunks of size `root`
  const result = [];
  for (let i = 0; i < len; i += root) {
    result.push(str.slice(i, i + root));
  }

  // Join chunks line by line
  return result.join('\n');
}

// Example runs:
console.log(squareBlock(1212));
// Output:
// 12
// 12

console.log(squareBlock(123123123));
// Output:
// 123
// 123
// 123

console.log(squareBlock(12345));
// Output: Not a perfect square!

/*
### 📝 Explanation

1. **Convert number to string**
   We need digit manipulation, so we turn the number into a string.

2. **Check if length is a perfect square**

   * Use `Math.sqrt(length)`.
   * If it's not an integer (`root % 1 !== 0`), return `"Not a perfect square!"`.

3. **Chunk the string**

   * Loop through the string in steps of `root`.
   * Slice each chunk and push it to an array.

4. **Format output**

   * Join the chunks with `\n` to form the square block.

---

✅ **Time Complexity:** O(n) (linear in number of digits)
✅ **Space Complexity:** O(n) (for storing result chunks)
✅ **Optimized, concise, beginner-friendly.**
*/
