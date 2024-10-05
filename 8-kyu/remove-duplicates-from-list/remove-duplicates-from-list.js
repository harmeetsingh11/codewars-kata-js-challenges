function distinct(a) {
  return [...new Set(a)];
}

// Explanation:
// new Set(a): A Set in JavaScript automatically removes duplicates from the input array.
// [...new Set(a)]: Converts the Set back into an array, while maintaining the order of the original array.
