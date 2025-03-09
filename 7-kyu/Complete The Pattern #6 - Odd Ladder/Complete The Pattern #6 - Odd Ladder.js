function pattern(n) {
  // If n is 0 or negative, return an empty string
  if (n <= 0) return '';

  // Ensure n is the largest odd number <= n
  n = n % 2 === 0 ? n - 1 : n;

  // Generate pattern using Array and map
  return Array.from({ length: (n + 1) / 2 }, (_, i) => {
    let num = 2 * i + 1; // Generate odd numbers: 1, 3, 5, ...
    return String(num).repeat(num); // Repeat the number num times
  }).join('\n'); // Join array elements with newline
}

console.log(pattern(9));
console.log(pattern(6));

/* 
### Explanation:
1. If `n` is `0` or negative, return an empty string.
2. If `n` is even, reduce it to the largest odd number less than `n`.
3. Use `Array.from()` to generate a sequence of odd numbers up to `n`.
4. Map each odd number to a string where it is repeated the same number of times.
5. Join the result using `\n` for the correct format.
*/
