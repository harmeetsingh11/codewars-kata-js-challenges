function nthSmallest(arr, n) {
  // Sort the array in ascending order
  // The default sort in JavaScript sorts lexicographically, so a compare function is required
  arr.sort((a, b) => a - b);

  // Return the nth smallest element, adjusting for zero-based index
  return arr[n - 1];
}

/* 
Explanation:

Sorting the Array:
The sort method is used to sort the elements of the array.
To ensure numerical sorting (not lexicographical), a compare function (a, b) => a - b is provided.

Accessing the Nth Element:
Since arrays in JavaScript are zero-indexed, the Nth smallest element corresponds to the index n - 1.

Efficiency:
Sorting the array has a time complexity of O(nlogn), which is efficient given the problem constraints.
Accessing the element by index is O(1).
*/
