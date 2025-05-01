function customSort(arr) {
  // Separate odd and even numbers based on Math.floor(n) % 2
  const odds = arr.filter((n) => Math.floor(n) % 2 !== 0);
  const evens = arr.filter((n) => Math.floor(n) % 2 === 0);

  // Sort odds in ascending order and evens in descending order
  odds.sort((a, b) => a - b);
  evens.sort((a, b) => b - a);

  // Concatenate odds and evens arrays
  return [...odds, ...evens];
}

console.log(customSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Output: [1, 3, 5, 7, 9, 8, 6, 4, 2]

/*
### Explanation:
- `Math.floor(n) % 2`: ensures the correct classification of numbers like `2.9` (which becomes 2) or `3.1` (which becomes 3).
- `.filter(...)`: splits the original array into two based on odd/even (post-floor).
- `.sort(...)`: sorts `odds` in ascending and `evens` in descending.
- `return [...odds, ...evens]`: combines them while preserving original values and order.
*/
