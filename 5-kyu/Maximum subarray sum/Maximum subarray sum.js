function maxSequence(arr) {
  // Initialize maxSum to 0 to account for empty array or all negative values
  let maxSum = 0;
  let currentSum = 0;

  for (let num of arr) {
    // Add current number to running sum
    currentSum += num;
    // If running sum becomes negative, reset it to 0
    if (currentSum < 0) currentSum = 0;
    // Update maxSum if currentSum is higher
    if (currentSum > maxSum) maxSum = currentSum;
  }

  return maxSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6

/*
### Explanation:
- `maxSum` stores the highest sum we've seen so far — starts at `0` to handle all-negative cases.
- `currentSum` keeps the sum of the current subarray.
- We iterate through the array:
  - Add the current number to `currentSum`.
  - If `currentSum` becomes negative, we reset it to `0` (because continuing a negative sum won’t help).
  - Update `maxSum` if `currentSum` exceeds it.
*/
