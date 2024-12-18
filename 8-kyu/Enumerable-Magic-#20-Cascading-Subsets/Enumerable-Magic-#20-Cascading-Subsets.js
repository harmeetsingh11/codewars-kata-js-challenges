function each_cons(list, n) {
  // Use Array.prototype.map to create subsets of size n
  // Filter out invalid subsets where length is less than n
  return list
    .map((_, i) => list.slice(i, i + n))
    .filter((subset) => subset.length === n);
}

// Examples
console.log(each_cons([1, 2, 3, 4], 2)); // => [[1, 2], [2, 3], [3, 4]]
console.log(each_cons([1, 2, 3, 4], 3)); // => [[1, 2, 3], [2, 3, 4]]

/* 
Explanation:

map Iteration:
Iterate over the array using map, and for each index i, extract a slice of the array starting at i and ending at i + n.
This creates a potential subset for each index.

slice Method:
The slice(i, i + n) method extracts a subarray starting from index i to (but not including) i + n.

filter Method:
Not all subsets will have the required size n when nearing the end of the array, so filter removes subsets whose length is less than n.

Efficiency:
The function runs in O(m×n), where m is the number of elements in the array and n is the size of each subset, since slicing and filtering are linear operations.
*/
