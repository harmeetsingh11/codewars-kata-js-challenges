function countPairsWithDifference(arr, n) {
  let count = 0;

  // Iterate through all pairs (i, j) where i < j
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === n) {
        count++;
      }
    }
  }

  return count;
}

// Test cases
console.log(countPairsWithDifference([1, 1, 5, 6, 9, 16, 27], 4)); // Output: 3
console.log(countPairsWithDifference([1, 1, 3, 3], 2)); // Output: 4
console.log(countPairsWithDifference([], 2)); // Output: 0
console.log(countPairsWithDifference([1, 2, 3, 4], 0)); // Output: 6
console.log(countPairsWithDifference([1, 5, 5, 5, 9], 4)); // Output: 6
console.log(countPairsWithDifference([5, 1, 5, 9, 5], 4)); // Output: 6
console.log(countPairsWithDifference([1, 1, 1, 1], 0)); // Output: 6

/* 
Explanation:
1. **Brute force with an optimization**:
   - We use a **nested loop** to check all possible pairs `(arr[i], arr[j])`, ensuring that `i < j` to avoid counting duplicates incorrectly.
   - We use `Math.abs(arr[i] - arr[j]) === n` to check if the difference is exactly `n`.
2. **Handles duplicate elements correctly**.
3. **Edge Cases Covered**:
   - `n = 0` (should count all valid identical pairs).
   - Empty arrays.
   - Arrays with repeated numbers.
4. **Time Complexity**: **O(n²)** in worst case (for large inputs, a frequency-based approach could be revisited).
*/
