function largest(n, arr) {
  if (n <= 0) return []; // Return an empty array if n is 0 or negative

  // Sort the array in ascending order and slice the last n elements
  return arr
    .sort((a, b) => a - b) // Sort in ascending order
    .slice(-n); // Extract the last n elements
}

// Example
console.log(largest(2, [7, 6, 5, 4, 3, 2, 1])); // => [6, 7]
console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // => []

/* 
Explanation:

Sorting:
arr.sort((a, b) => a - b) sorts the array in ascending order. The comparison (a - b) ensures the smallest elements come first.

Slicing:
.slice(-n) extracts the last n elements from the sorted array, which are the largest elements.

Efficiency:
Sorting takes O(klogk), where k is the length of the array. The slicing operation is O(n), making the approach efficient for moderately sized arrays.

Output:
The returned array contains the top n elements in ascending order.
*/
