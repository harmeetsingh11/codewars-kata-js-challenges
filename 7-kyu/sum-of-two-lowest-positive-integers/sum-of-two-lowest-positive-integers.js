function sumTwoSmallestNumbers(numbers) {
  // Step 1: Sort the array in ascending order (smallest to largest).
  // The `sort()` method compares two numbers `a` and `b`.
  // If `a - b` is negative, it means `a` should come before `b`.
  // This ensures the numbers are sorted from the smallest to the largest.
  const sortedArray = numbers.sort((a, b) => a - b);

  // Step 2: Access the first two elements of the sorted array (the smallest two numbers).
  // Since the array is sorted in ascending order, the two smallest numbers are at index 0 and index 1.
  return sortedArray[0] + sortedArray[1];
}
