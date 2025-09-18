/**
 * Function to find the final position of the ball after swaps
 * @param {number} b - initial cup position of the ball (1 to 3)
 * @param {number[][]} arr - list of swaps between two cups
 * @returns {number} final cup position of the ball
 */
function cupAndBall(b, arr) {
  // Loop through each swap
  for (let [x, y] of arr) {
    // If ball is at one of the swapped cups, move it
    if (b === x) {
      b = y;
    } else if (b === y) {
      b = x;
    }
    // Else, ball position remains unchanged
  }
  return b;
}

// ---- Example Tests ----
console.log(cupAndBall(2, [[1, 2]])); // Output: 1
console.log(
  cupAndBall(1, [
    [2, 3],
    [1, 2],
    [1, 2],
  ])
); // Output: 1
console.log(
  cupAndBall(2, [
    [1, 3],
    [1, 2],
    [2, 1],
    [2, 3],
  ])
); // Output: 3

/*
### 🔎 Problem Understanding

We have:

* **3 cups** labeled `1, 2, 3`.
* A ball initially placed under cup `b`.
* An array of swaps `arr`, where each swap is a pair `[x, y]` meaning cups at positions `x` and `y` are swapped.

We need to track where the ball ends up after all swaps.

---

### ⚡ Efficient Approach

* Start with ball under `b`.
* Loop through each swap `[x, y]`.
* If the ball is under `x`, move it to `y`.
* If the ball is under `y`, move it to `x`.
* If the ball is under neither, do nothing.
* Return final position.

This approach runs in **O(n)** time (where `n` is number of swaps) and **O(1)** space.
---

### 📝 Explanation

1. Start with ball at initial position `b`.
2. For each swap:

   * If ball is involved in the swap, update its position accordingly.
   * If not, ignore.
3. After all swaps, return the final position.
*/
