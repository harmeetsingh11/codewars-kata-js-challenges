// SOLUTION 1: using spread(...) operator
function mergeArrays(arr1, arr2) {
  // Merge both arrays, remove duplicates with Set, and sort in ascending order
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}
// Explanation:

// 1. Merging Arrays:
// We use the spread operator (...) to merge arr1 and arr2 into a single array: [...arr1, ...arr2].

// 2. Removing Duplicates:
// We wrap the merged array in a Set, which automatically removes duplicate values. This is because sets only store unique values.

// 3. Sorting:
// We convert the set back to an array using the spread operator (...) and sort it using .sort((a, b) => a - b) to ensure it’s sorted in ascending order.

// SOLUTION 2: using concat()
function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a, b) => a - b);
}
