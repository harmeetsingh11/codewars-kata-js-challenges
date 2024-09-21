function sumArray(array) {
  // Check if the input is an array and if it's not empty
  if (!Array.isArray(array) || array.length === 0) return 0;
  // If the input is not an array or the array is empty, return 0.

  // Check if the array has at least 3 elements
  if (array.length <= 2) return 0;
  // If the array has less than or equal to 2 elements, return 0.
  // (We need at least 3 elements to exclude the first and last.)

  // Sort the array in ascending order, remove the first and last elements,
  // and then sum the remaining elements.
  return array
    .sort((a, b) => a - b) // Sort the array in ascending order.
    .slice(1, -1) // Remove the smallest (first) and largest (last) element.
    .reduce((acc, val) => acc + val, 0); // Sum the remaining elements.
}
