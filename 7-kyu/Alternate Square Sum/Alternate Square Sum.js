function sumEvenOddPositions(arr) {
  return arr.reduce((sum, num, i) => sum + (i % 2 ? num ** 2 : num), 0);
}

console.log(sumEvenOddPositions([11, 12, 13, 14, 15])); // Output: 379
console.log(sumEvenOddPositions([])); // Output: 0

/*
### Explanation:
- We use the `reduce` method to iterate over the array and accumulate the result.
- `i % 2` checks if the index is odd (which means the position is even in a 1-based index system).
  - If `i % 2 === 1`, we square the number.
  - Otherwise, we add the number as is.
- This solution runs in **O(n) time complexity**, making it efficient.
*/
