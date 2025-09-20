// Linked List Node definition
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

/**
 * Filters a linked list based on a predicate function
 * @param {Node|null} head - Head of the linked list
 * @param {Function} predicate - Function to test each node's data
 * @returns {Node|null} - New head of filtered linked list
 */
function filter(head, predicate) {
  // Dummy node to simplify building the new list
  let dummy = new Node(null);
  let current = dummy;

  // Traverse the original list
  while (head) {
    if (predicate(head.data)) {
      // If predicate matches, append a new node with the data
      current.next = new Node(head.data);
      current = current.next;
    }
    head = head.next;
  }

  // Return the head of the filtered list
  return dummy.next;
}

/*
### 🔎 Explanation

1. **Dummy Node Trick**

   * We use a dummy node (`dummy`) at the start so we don’t need special handling for the head.
   * This makes appending new nodes clean and consistent.

2. **Traversal**

   * Traverse the input linked list one node at a time.

3. **Filtering**

   * For each node, check if `predicate(node.data)` returns `true`.
   * If yes, create a new node and append it to the result list.

4. **Return Result**

   * Finally, return `dummy.next` (skipping the dummy node).

---

### ✅ Example Run

Input:
`1 -> 2 -> 3`
Predicate: `x => x >= 2`

Steps:

* `1` fails → skip
* `2` passes → add to new list
* `3` passes → add to new list

Output:
`2 -> 3`

---

This solution is **O(n) time** (traverse list once) and **O(k) space** (new list with filtered nodes, `k ≤ n`).
Efficient, clean, and beginner-friendly.
*/
