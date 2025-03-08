function sumNumbers(arr) {
  return arr.reduce((sum, val) => {
    if (Array.isArray(val)) {
      // If the value is an array, recursively sum its contents
      return sum + sumNumbers(val);
    } else if (typeof val === 'number') {
      // If the value is a number, add it to the sum
      return sum + val;
    }
    // Ignore non-number values
    return sum;
  }, 0);
}

console.log(sumNumbers([1, [2, 3, [4, 'a', [5, {}]]], 'b', 6])); // Output: 21

/* 
### Explanation:
1. **Use `reduce`**: Iterates over each element in the array.
2. **Check type**:
   - If it's an array, recursively call `sumNumbers(val)`.
   - If it's a number, add it to the sum.
   - Otherwise, ignore the value.
3. **Base case**: Returns `0` when an empty array is encountered.
*/
