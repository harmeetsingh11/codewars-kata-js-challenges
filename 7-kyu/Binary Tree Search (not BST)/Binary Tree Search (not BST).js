// Node class is already given
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * Searches for a number in a Binary Tree (not BST).
 * Uses Depth-First Search (DFS) recursion.
 *
 * @param {number} n - The number to search for
 * @param {Node|null} root - Root node of the binary tree
 * @returns {boolean} - True if found, otherwise false
 */
function search(n, root) {
  // Base case: empty tree
  if (root === null) return false;

  // If current node matches, return true
  if (root.value === n) return true;

  // Recursively search left and right subtrees
  return search(n, root.left) || search(n, root.right);
}

/*
### 🔎 Explanation

1. **Not a BST** → we can’t skip branches based on value, so we must search the whole tree.
2. **Base case**: If `root` is `null`, return `false`.
3. **Check current node**: If `root.value === n`, return `true`.
4. **Recursive step**: Search both left and right subtrees using `OR (||)`.

   * If found in either, return `true`.
   * If not found in both, return `false`.

---

### ✅ Complexity

* **Time Complexity**: `O(N)` where `N` = number of nodes (worst case we check all).
* **Space Complexity**: `O(H)` where `H` = height of tree (stack space in recursion).
*/
