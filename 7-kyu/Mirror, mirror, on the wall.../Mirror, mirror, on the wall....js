function mirror(arr) {
  // Sort the array in ascending order without mutating the original
  let sorted = [...arr].sort((a, b) => a - b);

  // Create the mirrored version by concatenating the reversed sorted array (excluding the last element)
  return [...sorted, ...sorted.slice(0, -1).reverse()];
}

// Test cases
console.log(mirror([])); // []
console.log(mirror([1])); // [1]
console.log(mirror([2, 1])); // [1, 2, 1]
console.log(mirror([1, 3, 2])); // [1, 2, 3, 2, 1]
console.log(mirror([-8, 42, 18, 0, -16])); // [-16, -8, 0, 18, 42, 18, 0, -8, -16]
console.log(mirror([-3, 15, 8, -1, 7, -1])); // [-3, -1, -1, 7, 8, 15, 8, 7, -1, -1, -3]
console.log(mirror([-5, 10, 8, 10, 2, -3, 10])); // [-5, -3, 2, 8, 10, 10, 10, 10, 10, 8, 2, -3, -5]

/* 
Explanation:

Sorting: The input array is first sorted in ascending order to ensure symmetry.

Mirroring: The sorted array is concatenated with its reversed version (excluding the last element to avoid duplication of the middle element).

Efficiency: Sorting takes O(nlogn), slicing and reversing take O(n), resulting in an overall complexity of O(nlogn), which is optimal for this problem.
*/
