function findAll(arr, n) {
  // Use map and filter to efficiently find the indices of all occurrences of n
  return arr
    .map((value, index) => (value === n ? index : -1)) // Map values to their indices or -1 if not n
    .filter((index) => index !== -1); // Filter out the -1 values
}

// Example
console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)); // Output: [2, 4]

/* 
Explanation:

map Method:
Traverse the array and compare each element with n.
If the element equals n, return its index; otherwise, return -1.

filter Method:
Filter out all -1 values (indices where n does not occur).

Efficiency:
Time Complexity: O(n) because we traverse the array twice: once for map and once for filter.
Space Complexity: O(k), where k is the number of indices stored in the resulting array.
*/
