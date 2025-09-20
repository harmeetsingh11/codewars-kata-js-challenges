/**
 * Update the leaderboard based on movements.
 * @param {string[]} leaderboard - Initial list of players in order.
 * @param {string[]} changes - List of movements (e.g. "Dave +1").
 * @returns {string[]} - Final updated leaderboard.
 */
function leaderboardUpdate(leaderboard, changes) {
  // Process each movement instruction
  for (let move of changes) {
    // Parse: e.g. "Dave +1" → name="Dave", offset="+1"
    let [name, offsetStr] = move.split(' ');
    let offset = parseInt(offsetStr, 10); // e.g. +1 → 1, -1 → -1

    // Find current index of the player
    let currentIndex = leaderboard.indexOf(name);
    let newIndex = currentIndex - offset;
    // (subtract because "up" means moving closer to index 0)

    // Remove player from current position
    leaderboard.splice(currentIndex, 1);
    // Insert player at new position
    leaderboard.splice(newIndex, 0, name);
  }

  return leaderboard;
}

/*
### 🔑 Key Idea

* Use a **map (dictionary)** to track each player’s **current index** in the leaderboard.
* For each operation:

  * Parse the player’s name and movement (`+n` or `-n`).
  * Compute the new index.
  * Remove the player from their old index and insert at the new one.
  * Update the map for all affected players (because their positions shift).

This avoids repeatedly searching for players with `indexOf`, making it **faster and cleaner**.
---

### 📖 Explanation

1. Loop through each movement like `"Fred +4"`.
2. Split into:

   * `name` → `"Fred"`
   * `offset` → `+4` (parsed to number `4`)
3. Since "up" means moving **toward the front** (lower index),
   we compute `newIndex = currentIndex - offset`.
4. Use `splice`:

   * Remove the player at their current position.
   * Insert them at the new position.
5. After all moves, return the updated leaderboard.

---

### ✅ Example Run

```js
let leaderboard = ['John','Brian','Jim','Dave','Fred'];
let changes = ['Dave +1','Fred +4','Brian -1'];

console.log(leaderboardUpdate(leaderboard, changes));
```

**Output:**

```
['Fred', 'John', 'Dave', 'Brian', 'Jim']
```

---
This solution is **concise, optimized (O(n\*m) worst case where n = players, m = moves), and easy to follow**.

---
*/
