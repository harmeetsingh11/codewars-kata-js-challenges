function removeEveryOther(arr) {
  // Use the filter() method to create a new array
  return arr.filter(
    (_, index) =>
      // The callback function for filter receives two arguments:
      // 1. The current element (represented by '_', which we don't need in this case)
      // 2. The index of the current element

      // Keep only the elements whose index is even (index % 2 == 0)
      // This effectively removes every other element, starting with the second one (index 1)
      index % 2 == 0
  );
}
