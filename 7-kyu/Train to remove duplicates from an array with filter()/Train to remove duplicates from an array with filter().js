function unique(arr) {
  // Use filter() to create a new array with unique values
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

console.log(unique([4])); // [4]
console.log(unique([1, 1, 1, 2, 2, 3])); // [1, 2, 3]
console.log(unique([5, 5, 6, 7, 7, 8])); // [5, 6, 7, 8]

// Explanation:
// - The `filter()` method creates a new array with elements that pass the test.
// - `arr.indexOf(value)` returns the first occurrence index of the current value.
// - If the current index matches the first occurrence index, it is unique and kept in the new array.
// - Duplicates will have a higher index than their first occurrence and will be filtered out.

/*
**Key Benefits:**
- **Efficient:** Uses `filter()` in combination with `indexOf()` to eliminate duplicates.
- **Concise:** One-liner inside `filter()` makes the code clean and readable.
- **Time Complexity:** \(O(n^2)\) in the worst case due to `indexOf()` inside `filter()` (for larger arrays, this could be suboptimal).

If you want an even more efficient solution (with \(O(n)\) time complexity), you can use `Set`:

function unique(arr) {
  return [...new Set(arr)];
}
*/
