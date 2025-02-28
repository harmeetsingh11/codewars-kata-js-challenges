function findBall(start, swaps) {
  // Iterate through each swap
  for (const [a, b] of swaps) {
    // If the ball is in one of the swapped positions, move it
    if (start === a) start = b;
    else if (start === b) start = a;
  }
  return start; // Return the final position of the ball
}

console.log(
  findBall(0, [
    [0, 1],
    [1, 2],
    [1, 0],
  ])
); // Output: 2

/*
### Explanation:
1. **Loop through swaps**: We iterate through each swap pair `[a, b]` in the array.
2. **Check if the ball is in a swapped position**:
   - If `start` (ball's position) matches `a`, move it to `b`.
   - If `start` matches `b`, move it to `a`.
   - Otherwise, the swap does not affect the ball's position.
3. **Return the final position**: After processing all swaps, return the ball's final position.

### Time Complexity:
- **O(n)** where `n` is the number of swaps (efficient as we only traverse the array once).

### Space Complexity:
- **O(1)** as we only use a single variable (`start`) to track the ball's position.
*/
