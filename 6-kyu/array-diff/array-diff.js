function arrayDiff(a, b) {
  // Create a Set from array b for fast lookup (O(1) time complexity)
  const bSet = new Set(b);

  // Use the filter method on array a
  return a.filter(
    (item) =>
      // Check if the current item is NOT present in bSet
      !bSet.has(item) // Only include items not found in b
  );
}
