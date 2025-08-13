/**
 * Count bees in a hive grid.
 * Bees can face UP, DOWN, LEFT, RIGHT.
 * They may overlap.
 *
 * @param {string[][]} hive - 2D array of single-character strings
 * @returns {number} Number of bees found
 */
function countBees(hive) {
  // Handle null/empty input
  if (!hive || hive.length === 0) return 0;

  const rows = hive.length;
  const cols = hive[0].length;
  let count = 0;

  // Helper function to check if a bee exists in given direction
  const isBee = (r, c, dr, dc) => {
    // The pattern "bee" (length 3)
    const word = 'bee';
    for (let i = 0; i < 3; i++) {
      const nr = r + dr * i; // next row
      const nc = c + dc * i; // next column
      // Out of bounds or mismatch
      if (
        nr < 0 ||
        nr >= rows ||
        nc < 0 ||
        nc >= cols ||
        hive[nr][nc] !== word[i]
      ) {
        return false;
      }
    }
    return true;
  };

  // Check every cell for bees in 4 directions
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (hive[r][c] === 'b') {
        // Bee must start with 'b'
        // RIGHT
        if (isBee(r, c, 0, 1)) count++;
        // LEFT
        if (isBee(r, c, 0, -1)) count++;
        // DOWN
        if (isBee(r, c, 1, 0)) count++;
        // UP
        if (isBee(r, c, -1, 0)) count++;
      }
    }
  }
  return count;
}

// Example usage:
console.log(
  countBees([
    ['b', 'e', 'e', '.', 'b', 'e', 'e'],
    ['.', 'e', '.', '.', 'e', '.', '.'],
    ['.', 'b', '.', '.', 'e', 'e', 'b'],
  ])
); // 5

console.log(
  countBees([
    ['b', 'e', 'e', '.', 'b', 'e', 'e'],
    ['e', '.', 'e', '.', 'e', '.', 'e'],
    ['e', 'e', 'b', '.', 'e', 'e', 'b'],
  ])
); // 8

/* 
### **How It Works**

1. **Input Handling**
   If the hive is `null` or empty, return `0`.

2. **Core Idea**

   * Each bee has the shape `"bee"` (3 letters long).
   * We check **4 directions** from every `'b'` cell:

     * Right `(dr=0, dc=1)`
     * Left `(dr=0, dc=-1)`
     * Down `(dr=1, dc=0)`
     * Up `(dr=-1, dc=0)`

3. **Pattern Checking**

   * `isBee(r, c, dr, dc)` checks if starting at `(r, c)` and moving by `(dr, dc)` forms `"bee"`.
   * We ensure no out-of-bounds access and verify every character matches.

4. **Efficiency**

   * Time Complexity: **O(R × C × 4 × 3)** → **O(R × C)** since constants are small.
   * Space Complexity: **O(1)** (only counters and indices).

---

# Idea in one line

Scan every cell that is `'b'` and test the 3-letter word `"bee"` in the four straight directions (RIGHT, LEFT, DOWN, UP). Count every match. Overlaps are naturally allowed because we never mark or block cells.

# Why this is correct (and efficient)

* **Correctness**

  * A bee looks like `"b e e"` in a straight line. If it faces RIGHT, you read it left→right; if LEFT, you read it right→left; if DOWN/UP, you read along the column.
  * Every bee has a unique **head** at its `'b'`. By only starting checks from `'b'`, each bee is counted **exactly once** (no double counting from the tail `'e'`).
  * We only check four directions (no diagonals), matching the problem.
* **Efficiency**

  * For each cell, we do at most 4 small constant checks (3 characters long).
  * Time: **O(R·C)** (R rows, C cols).
  * Space: **O(1)** extra.

# Edge cases covered

* `null`/`undefined` or empty hive → return `0`.
* Overlapping bees → still counted, because we only **read** characters; we don’t modify the grid.
* Non-bees (like `'.'`) are skipped immediately because we only start from `'b'`.

---

# Dry run on the given examples

Below I mark coordinates as **(row, col)** with **1-based** indexing to be human-friendly.

## Example 1

```
Cols:   1 2 3 4 5 6 7
R1:     b e e . b e e
R2:     . e . . e . .
R3:     . b . . e e b
```

We’ll list each bee by its **starting 'b' position** and **direction**.

1. Start at **(1,1)**:

* RIGHT: (1,1)='b', (1,2)='e', (1,3)='e' → ✅ bee
* LEFT/UP: out of bounds → ❌
* DOWN: (2,1)='.' → ❌

2. Start at **(1,5)**:

* RIGHT: (1,5)='b', (1,6)='e', (1,7)='e' → ✅
* LEFT: (1,5),(1,4),(1,3) = b,'.','e' → ❌
* DOWN: (2,5)='e', (3,5)='e' → ✅
* UP: out of bounds → ❌

3. Start at **(3,2)**:

* UP: (3,2)='b', (2,2)='e', (1,2)='e' → ✅
* DOWN: out of bounds (no room for 3 letters) → ❌
* RIGHT/LEFT: neighbors don’t match → ❌

4. Start at **(3,7)**:

* LEFT: (3,7)='b', (3,6)='e', (3,5)='e' → ✅
* RIGHT/UP/DOWN: fail or out of bounds → ❌

**Total = 5**, matching the expected answer.

**Found bees (start → direction):**

* (1,1) → RIGHT
* (1,5) → RIGHT
* (1,5) → DOWN
* (3,2) → UP
* (3,7) → LEFT

Notice how (1,5) contributes **two** bees (RIGHT and DOWN). Overlap is fine and intended.

---

## Example 2

```
Cols:   1 2 3 4 5 6 7
R1:     b e e . b e e
R2:     e . e . e . e
R3:     e e b . e e b
```

Check each `'b'`:

1. **(1,1)**:

* RIGHT: (1,1),(1,2),(1,3) = b,e,e → ✅
* DOWN: (1,1),(2,1),(3,1) = b,e,e → ✅
* LEFT/UP: out of bounds → ❌

2. **(1,5)**:

* RIGHT: (1,5),(1,6),(1,7) = b,e,e → ✅
* DOWN: (1,5),(2,5),(3,5) = b,e,e → ✅
* LEFT/UP: ❌

3. **(3,3)**:

* LEFT: (3,3),(3,2),(3,1) = b,e,e (read right→left) → ✅
* UP: (3,3),(2,3),(1,3) = b,e,e → ✅
* RIGHT/DOWN: ❌

4. **(3,7)**:

* LEFT: (3,7),(3,6),(3,5) = b,e,e → ✅
* UP: (3,7),(2,7),(1,7) = b,e,e → ✅
* RIGHT/DOWN: ❌

**Total = 8**, as expected.

**Found bees:**

* (1,1) → RIGHT
* (1,1) → DOWN
* (1,5) → RIGHT
* (1,5) → DOWN
* (3,3) → LEFT
* (3,3) → UP
* (3,7) → LEFT
* (3,7) → UP

---

# Small reasoning highlights

* **Only start at `'b'`**: this cuts checks dramatically because `'.'` and `'e'` cells are skipped.
* **4 directions × 3 letters**: constant tiny work per candidate.
* **Bounds first**: stop early if we’d go outside the grid.
* **Overlaps require no special handling**: we never mark cells; each valid `"bee"` is counted when its `'b'` is at the head in the tested direction.

*/
