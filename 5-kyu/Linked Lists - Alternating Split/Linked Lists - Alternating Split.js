// Node class for linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Context class to hold the two lists
class Context {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}

/**
 * Alternating Split of Linked List
 * @param {Node} head - Head of the input linked list
 * @returns {Context} - Object containing the two split lists
 */
function AlternatingSplit(head) {
  // Edge cases: empty or single node list
  if (!head || !head.next) {
    throw new Error('List must contain at least two nodes.');
  }

  // Pointers for traversing and building lists
  let firstHead = null,
    secondHead = null;
  let firstTail = null,
    secondTail = null;

  let current = head;
  let toggle = true; // true -> goes to first list, false -> goes to second

  while (current) {
    if (toggle) {
      // Add to first list
      if (!firstHead) {
        firstHead = current;
        firstTail = current;
      } else {
        firstTail.next = current;
        firstTail = firstTail.next;
      }
    } else {
      // Add to second list
      if (!secondHead) {
        secondHead = current;
        secondTail = current;
      } else {
        secondTail.next = current;
        secondTail = secondTail.next;
      }
    }

    // Flip toggle and move forward
    toggle = !toggle;
    current = current.next;
  }

  // Important: terminate both lists
  if (firstTail) firstTail.next = null;
  if (secondTail) secondTail.next = null;

  return new Context(firstHead, secondHead);
}
/*
We need to **split a linked list into two lists** by alternating nodes — one for odd positions, one for even positions. Let’s do this in the most **efficient and clean** way:

---

### 🔑 Key Points

* Traverse the list **once** → **O(n)** time, **O(1)** extra space.
* Keep two pointers (`firstTail`, `secondTail`) to build both lists.
* Return a `Context` object containing `{ first, second }`.
* Throw an error if input list has fewer than 2 nodes.

---

### ⚙️ Explanation

1. Start with two empty lists (`first`, `second`).
2. Traverse original list node by node.
3. Alternate assignment:

   * Odd position → `first`
   * Even position → `second`
4. Update tails to keep list connections.
5. At end, break links to prevent cycles (`tail.next = null`).
6. Return a `Context` with both heads.

---

### ✅ Example Walkthrough

Input:
`1 -> 2 -> 3 -> 4 -> 5 -> null`

Steps:

* Node(1) → first → `1`
* Node(2) → second → `2`
* Node(3) → first → `1 -> 3`
* Node(4) → second → `2 -> 4`
* Node(5) → first → `1 -> 3 -> 5`

Output:

* `first = 1 -> 3 -> 5 -> null`
* `second = 2 -> 4 -> null`
*/
