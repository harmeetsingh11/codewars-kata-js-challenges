function flattenAndSort(array) {
  // Flatten the array using .flat() and sort the resulting array numerically
  return array.flat().sort((a, b) => a - b);
}

//   Explanation:

// 1. array.flat(): This method flattens the two-dimensional array into a one-dimensional array.
//    Example: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] becomes [3, 2, 1, 4, 6, 5, 9, 7, 8].

// 2  .sort((a, b) => a - b): This ensures that the sorting is done numerically, not lexicographically (alphabetically). Without this comparison function, JavaScript sorts numbers as strings by default, which can lead to incorrect results (e.g., [10, 2, 3] might be sorted as [10, 2, 3] without the comparator).
//    Sorting function (a, b) => a - b compares two numbers and ensures ascending order.
