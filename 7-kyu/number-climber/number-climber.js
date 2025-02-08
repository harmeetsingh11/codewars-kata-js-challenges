function generateSequence(N) {
  let result = [];

  // Traverse back from N to 1 to determine the path
  while (N > 0) {
    result.unshift(N); // Add the current number to the sequence at the beginning
    N = Math.floor(N / 2); // Move to the previous number in the sequence
  }

  return result;
}

console.log(generateSequence(13)); // Output: [1, 3, 6, 13]

/* 
Explanation:
1. **Start from N**: We initialize an empty array `result` and begin from `N`.
2. **Backtrack to 1**:
   - Each number in the sequence follows the rule that it is either `2 * previous` or `2 * previous + 1`.
   - This means if we trace `N` backwards, its previous number is always `Math.floor(N / 2)`, as integer division undoes the `2 * x` and `2 * x + 1` operations.
3. **Build the sequence in ascending order**:
   - Instead of reversing a list, we use `unshift()` to insert numbers at the beginning, ensuring the sequence remains in correct order.

This approach runs in **O(log N)** time complexity since `N` is divided by 2 at each step, making it highly efficient.
*/
