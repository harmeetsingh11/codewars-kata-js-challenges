function solve(arr) {
  // Initialize an empty array to store dominant elements
  let result = [];

  // Start with the last element as it's always a dominant element
  let maxRight = -Infinity;

  // Traverse the array from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    // If the current element is greater than maxRight, it is dominant
    if (arr[i] > maxRight) {
      result.push(arr[i]);
      maxRight = arr[i]; // Update maxRight to the current element
    }
  }

  // Since we traversed from right to left, reverse the result array
  return result.reverse();
}

console.log(solve([1, 21, 4, 7, 5])); // Output: [21, 7, 5]
console.log(solve([5, 4, 3, 2, 1])); // Output: [5, 4, 3, 2, 1]

/* 
Explanation:

Traverse from Right to Left:
By iterating from right to left, we can track the largest element (maxRight) encountered so far. This ensures we only need one pass through the array, making the solution efficient.

Dominance Check:
Compare each element with maxRight. If the current element is greater than maxRight, it's dominant and added to the result.

Reverse the Result:
Since we traversed from right to left, dominant elements are collected in reverse order. Reversing the array gives the correct order.

Complexity:
Time Complexity: O(n), where n is the length of the array (single traversal).
Space Complexity: O(d), where d is the number of dominant elements (space for result array).
*/
