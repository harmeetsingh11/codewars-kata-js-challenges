// Definition of a ListNode
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Moves the head node from source list to the head of dest list.
 * @param {ListNode} source - Head of the source linked list
 * @param {ListNode} dest - Head of the destination linked list
 * @returns {Object} - Context object containing updated { source, dest }
 */
function moveNode(source, dest) {
  if (!source) {
    throw new Error('Source list is empty. Cannot move node.');
  }

  // Step 1: Take the node from source
  let newNode = source;

  // Step 2: Move source forward
  source = source.next;

  // Step 3: Attach newNode at front of dest
  newNode.next = dest;
  dest = newNode;

  // Step 4: Return updated lists in a Context object
  return { source, dest };
}

// ----------------------
// Example usage:
// ----------------------

// Build sample lists: 1->2->3 and 4->5->6
let source = new ListNode(1);
source.next = new ListNode(2);
source.next.next = new ListNode(3);

let dest = new ListNode(4);
dest.next = new ListNode(5);
dest.next.next = new ListNode(6);

let context = moveNode(source, dest);
console.log('Updated Source:', JSON.stringify(context.source)); // 2->3->null
console.log('Updated Dest:', JSON.stringify(context.dest)); // 1->4->5->6->null

/*
### Explanation (Plain Text)

* **Goal:** Take the head node from the `source` list and insert it at the head of the `dest` list.

* **Steps:**

  1. If `source` is `null`, throw an error because we can’t move from an empty list.
  2. Store the current head of `source` in a temporary variable (`newNode`).
  3. Move the `source` pointer forward (`source = source.next`).
  4. Link `newNode.next` to the head of `dest`.
  5. Update `dest` to point to `newNode`.
  6. Return a **Context object** `{ source, dest }`.

* **Time Complexity:** `O(1)` (constant time pointer manipulation).
* **Space Complexity:** `O(1)` (no extra structures).
*/
