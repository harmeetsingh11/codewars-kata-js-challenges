/**
 * Calculate final Tetris score using Nintendo scoring system
 * @param {number[]} arr - Array of cleared lines per move
 * @returns {number} Final score
 */
function getScore(arr) {
  // Base scores for level 0 (index = lines cleared in one move)
  const basePoints = [0, 40, 100, 300, 1200];

  let score = 0;
  let totalLinesCleared = 0;

  for (const lines of arr) {
    // Determine current level (increments every 10 lines)
    const level = Math.floor(totalLinesCleared / 10);

    // Add points for this move
    score += basePoints[lines] * (level + 1);

    // Update total cleared lines
    totalLinesCleared += lines;
  }

  return score;
}

// Example usage:
console.log(getScore([4, 2, 2, 3, 3, 4, 2])); // 4900

/*
Here’s the best approach:

**Key observations & approach**

1. **Base points** for each `linesCleared` value at **level 0** are:

   ```
   1 → 40,  2 → 100,  3 → 300,  4 → 1200
   ```
2. **Level multiplier**: For any level `n`, points = `basePoints[linesCleared] * (n + 1)`.
3. **Level progression**: Level increases by 1 after every 10 total cleared lines. The counter never resets.
4. **Algorithm**:

   * Keep track of `totalLinesCleared` so far.
   * For each move:

     * Calculate current level as `Math.floor(totalLinesCleared / 10)`.
     * Add score = `basePoints[move] * (level + 1)`.
     * Increment `totalLinesCleared` by `move`.

---

### **Explanation**

* **Step-by-step for `[4, 2, 2, 3, 3, 4, 2]`**

  1. `4 lines`, level 0 → `1200 × 1 = 1200`, total = 1200 (lines cleared = 4)
  2. `2 lines`, level 0 → `100 × 1 = 100`, total = 1300 (lines = 6)
  3. `2 lines`, level 0 → `100 × 1 = 100`, total = 1400 (lines = 8)
  4. `3 lines`, level 0 → `300 × 1 = 300`, total = 1700 (lines = 11 → level 1)
  5. `3 lines`, level 1 → `300 × 2 = 600`, total = 2300 (lines = 14)
  6. `4 lines`, level 1 → `1200 × 2 = 2400`, total = 4700 (lines = 18)
  7. `2 lines`, level 1 → `100 × 2 = 200`, total = 4900 (lines = 20)

This is **O(n)** time complexity, **O(1)** space complexity, and very readable.
*/
