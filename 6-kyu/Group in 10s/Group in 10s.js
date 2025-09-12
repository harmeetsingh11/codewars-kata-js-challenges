/**
 * Groups numbers into ranges of 10s and sorts each group.
 * Example: numbers 0–9 in index 0, 10–19 in index 1, etc.
 *
 * @param  {...number} nums - Any number of arguments.
 * @returns {Array} - An array where each index contains a sorted group or undefined.
 */
function groupIn10s(...nums) {
  const result = [];

  for (const num of nums) {
    const groupIndex = Math.floor(num / 10); // Find which 10s group the number belongs to
    if (!result[groupIndex]) result[groupIndex] = []; // Initialize group if not present
    result[groupIndex].push(num); // Add number to its group
  }

  // Sort each group in ascending order
  for (const group of result) {
    if (group) group.sort((a, b) => a - b);
  }

  return result;
}

// Example usage
const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50);

console.log(grouped[0]); // [3, 8]
console.log(grouped[1]); // [12, 17, 19]
console.log(grouped[2]); // [25]
console.log(grouped[3]); // [35, 38]
console.log(grouped[4]); // undefined
console.log(grouped[5]); // [50]

/*
### 🔎 Explanation:

1. **Spread operator (`...nums`)**: Accepts any number of arguments into an array.
2. **`Math.floor(num / 10)`**: Determines which group (0–9 → index 0, 10–19 → index 1, etc.).
3. **`result[groupIndex]`**: Initializes an array for the group if it doesn’t exist yet.
4. **Sorting**: After grouping, each group is sorted in ascending order.
5. **Undefined groups preserved**: Groups with no numbers remain `undefined` (e.g., index 4 above).

✅ Time Complexity: **O(n log n)** overall (due to sorting inside groups).
✅ Space Complexity: **O(n)** for storing groups.
*/
