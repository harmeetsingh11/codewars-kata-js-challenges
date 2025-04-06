function arr2bin(arr) {
  // If any value in the array is NaN (and typeof number), return 'NaN'
  if (arr.some((val) => typeof val === 'number' && isNaN(val))) return 'NaN';

  // Sum valid numbers (ignore non-numbers, treat as 0)
  const sum = arr.reduce(
    (acc, val) => (typeof val === 'number' ? acc + val : acc),
    0
  );

  // Convert sum to binary
  return sum.toString(2);
}

arr2bin([1, 2]); // "11"
arr2bin([1, 2, 'a']); // "11"
arr2bin([]); // "0"
arr2bin([NaN]); // "NaN"
arr2bin([15, null, 4]); // "10011" (null ignored)
arr2bin([1, NaN, 2]); // "NaN"

/* 
### Explanation:
- `arr.some(...)`: Checks if any `number` in the array is `NaN`. If so, immediately return `'NaN'`.
- Otherwise, continue to sum all valid `number` values.
- Non-numeric values like `null`, `undefined`, strings, objects, etc., are treated as `0` (ignored).
- Return the binary string using `.toString(2)`.
*/
