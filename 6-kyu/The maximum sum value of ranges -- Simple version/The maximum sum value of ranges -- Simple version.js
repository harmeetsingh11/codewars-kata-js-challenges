function maxSum(arr, ranges) {
  // Initialize variable to store the maximum sum.
  let max = -Infinity;

  // Loop through each range to calculate its sum
  for (let range of ranges) {
    const [start, end] = range; // Destructure start and end indices

    // Calculate the sum of elements from arr[start] to arr[end] (inclusive)
    const rangeSum = arr
      .slice(start, end + 1)
      .reduce((sum, num) => sum + num, 0);

    // Update max with the larger value between current max and calculated range sum
    max = Math.max(max, rangeSum);
  }

  // Return the maximum sum
  return max;
}

console.log(
  maxSum(
    [1, -2, 3, 4, -5, -4, 3, 2, 1],
    [
      [1, 3],
      [0, 4],
      [6, 8],
    ]
  )
); // Output: 6
console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3]])); // Output: 5
console.log(
  maxSum(
    [1, -2, 3, 4, -5, -4, 3, 2, 1],
    [
      [1, 4],
      [2, 5],
    ]
  )
); // Output: 0

/*
Explanation:

1. **Initialize the max variable**: We set `max` to `-Infinity` to ensure any sum will be larger than the initial value.
   
2. **Iterate over each range**: We loop over all the ranges in the input. Each range is a pair `[start, end]`.

3. **Calculate the sum of the current range**: For each range, we slice the array `arr` from index `start` to `end` (inclusive), and then calculate the sum of the sliced elements using the `reduce()` function.

4. **Update the max sum**: After calculating the sum for the current range, we update `max` by comparing the existing `max` and the calculated `rangeSum` using `Math.max()`.

5. **Return the result**: Finally, we return the `max` value, which holds the largest sum of the ranges.

### Time Complexity:
- The time complexity is `O(n * m)` where `n` is the size of the range list and `m` is the average size of the ranges. This is because for each range, we slice the array and calculate the sum.
*/
