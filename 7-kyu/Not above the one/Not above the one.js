function filterAndIndex(arr) {
  return arr.reduce(
    (acc, num, index) => {
      if (num < 2) acc[0].push(num); // Collect numbers less than 2
      else acc[1].push(index); // Collect indices of numbers greater than 1
      return acc;
    },
    [[], []]
  ); // Initialize with two empty arrays
}

console.log(filterAndIndex([0, 1, 2, 1, 5, 6, 2, 1, 1, 0]));
// Output: [[0, 1, 1, 1, 1, 0], [2, 4, 5, 6]]

/* 
### Explanation:
1. **Use `reduce`**: This method efficiently iterates through the array while accumulating results into two separate arrays.
2. **Conditions**:
   - If the number is `< 2`, push it into the first array.
   - If the number is `> 1`, push its index into the second array.
3. **Initial Accumulator `[[], []]`**:
   - First array for numbers `< 2`
   - Second array for indices of numbers `> 1`

This approach ensures efficiency (`O(n)`) and keeps the implementation concise.
*/
