/**
 * Function to calculate the final fish size after eating from a shoal
 * @param {string} shoal - String of fish sizes (digits 0-9)
 * @returns {number} - Final size of the fish
 */
function fish(shoal) {
  if (!shoal) return 1; // if no fish, size stays 1

  // Count frequency of each fish size (0-9)
  const freq = Array(10).fill(0);
  for (const ch of shoal) freq[ch]++;

  let size = 1; // initial fish size
  let eaten = 0; // total "value" of eaten fish (in size-1 equivalent)
  let needed = 4; // requirement for next size (starts with 4)

  // Keep trying to eat until no more growth is possible
  while (true) {
    let eatenThisRound = false;

    // Try to eat fish of size <= current size
    for (let s = 1; s <= size; s++) {
      while (freq[s] > 0) {
        eaten += s; // eating fish adds its size in "points"
        freq[s]--; // mark fish as eaten
        eatenThisRound = true;

        // Check if we’ve reached the threshold to grow
        if (eaten >= needed) {
          size++; // grow by 1
          needed += size * 4; // next threshold = previous + (current size * 4)
        }
      }
    }

    // If nothing was eaten in this loop, break (no fish left you can eat)
    if (!eatenThisRound) break;
  }

  return size;
}

/*
We need to simulate fish growth based on consumption rules. The key is to **maximize growth** by always eating the largest fish possible that you can currently consume.
---

### 🔎 Explanation

1. **Frequency Count**
   We count how many fish exist for each size `1-9`. `0` (algae) is ignored since it doesn’t feed.

2. **Growth Mechanism**

   * Start at size = 1.
   * Growth follows the rule:

     * To reach size `n+1`, you need `4 * n` extra "size-1 fish equivalent".
     * A fish of size `k` contributes `k` units.

   Example:

   * From size 1 to 2 → need 4
   * From size 2 to 3 → need 8 more (total 12)
   * From size 3 to 4 → need 12 more (total 24), etc.

3. **Eating Loop**

   * At each stage, eat all fish `<= size`.
   * For each eaten fish, add its contribution to `eaten`.
   * If threshold reached → grow, update requirement.

4. **Stopping Condition**

   * If in a full pass no fish were eaten → stop (either all eaten, or only bigger ones left).

---

### ✅ Example Dry Runs

**Input:** `"11112222"`

* Eat 4x1 → +4 → size 2
* Eat 4x2 → +8 → size 3
  **Output:** `3`

**Input:** `"111111111111"`

* Eat 12x1 → +12 → size 3
  **Output:** `3`

**Input:** `"345"`

* Start size=1, can’t eat → stays `1`
  **Output:** `1`
---
*/
