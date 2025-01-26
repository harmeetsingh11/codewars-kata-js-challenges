function solve(arr) {
  // Reduce the array by calculating the product of the unique counts in each subarray
  return arr.reduce((total, subarray) => {
    // Use a Set to remove duplicates and get the count of unique elements in each subarray
    const uniqueCount = new Set(subarray).size;
    // Multiply the total combinations by the unique count of the current subarray
    return total * uniqueCount;
  }, 1); // Start with 1 since multiplying by 1 does not affect the result
}

console.log(solve([[1, 2], [4], [5, 6]])); // Output: 4
console.log(
  solve([
    [1, 2],
    [4, 4],
    [5, 6, 6],
  ])
); // Output: 4
console.log(
  solve([
    [1, 2, 2],
    [3, 3, 3],
    [4, 4],
  ])
); // Output: 2

/* 
Explanation:

Remove duplicates in subarrays: For each subarray, we use a Set to remove duplicates. The Set ensures that each subarray contributes only its unique elements to the total count of combinations.

Calculate total combinations: Using Array.prototype.reduce, we start with an initial value of 1. For each subarray, we calculate the size of the Set (number of unique elements) and multiply it by the current total. This effectively computes the product of unique counts across all subarrays.

Efficient and concise: The solution is efficient because:
Using a Set to deduplicate each subarray has a time complexity of O(n), where n is the size of the subarray.
The reduce function iterates over the array, giving an overall complexity of O(m⋅n), where m is the number of subarrays and n is the average size of the subarrays.

Edge cases handled: The code automatically handles cases where subarrays have duplicates or even empty arrays (which will result in 0 combinations).
*/
