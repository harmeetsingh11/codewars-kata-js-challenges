function sortEmotions(arr, order) {
  // Define emotion ranks from Super Happy to Super Sad
  const rank = { ':D': 5, ':)': 4, ':|': 3, ':(': 2, T_T: 1 };

  // Sort based on rank, reversing if order is false
  return arr.sort((a, b) => (order ? rank[b] - rank[a] : rank[a] - rank[b]));
}

// Test cases
console.log(sortEmotions([':D', ':|', ':)', ':(', ':D'], true)); // [ ':D', ':D', ':)', ':|', ':(' ]
console.log(sortEmotions([':D', ':|', ':)', ':(', ':D'], false)); // [ ':(', ':|', ':)', ':D', ':D' ]
console.log(sortEmotions([], true)); // []
console.log(sortEmotions(['T_T', ':(', ':D', ':|', ':)'], true)); // [':D', ':)', ':|', ':(', 'T_T']
console.log(sortEmotions(['T_T', ':(', ':D', ':|', ':)'], false)); // ['T_T', ':(', ':|', ':)', ':D']

/* 
Explanation:
1. **Create a ranking object** → Assign numerical values to emotions based on their hierarchy.
2. **Use `sort()` function** → Compare emotions based on their rank:
   - If `order` is `true`, sort in descending order (`rank[b] - rank[a]`).
   - If `order` is `false`, sort in ascending order (`rank[a] - rank[b]`).
3. **Edge case handling** → If the array is empty, `sort()` simply returns it without modification.

This solution is **O(n log n)** due to the sorting operation and is **concise and efficient**. 
*/
