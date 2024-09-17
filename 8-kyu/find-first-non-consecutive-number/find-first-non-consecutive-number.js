function firstNonConsecutive(arr) {
  // Loop through the array starting from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    // Check if the current element is not consecutive (i.e., not 1 more than the previous element)
    if (arr[i] !== arr[i - 1] + 1) {
      // If the current element is not consecutive, return that element
      return arr[i];
    }
  }

  // If all elements are consecutive, return null (no non-consecutive element found)
  return null;
}
