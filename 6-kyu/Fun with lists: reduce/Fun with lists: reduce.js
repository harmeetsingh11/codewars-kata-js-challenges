/**
 * Node definition
 */
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

/**
 * Custom reduce function for linked lists
 * @param {Node} head - Head of the linked list
 * @param {Function} fn - Bi-function (accumulator, current) => newAccumulator
 * @param {*} initial - Initial accumulator value
 * @returns {*} - Final reduced result
 */
function reduce(head, fn, initial) {
  let acc = initial; // Start with initial value
  let curr = head; // Pointer to traverse the list

  // Traverse until end of linked list
  while (curr !== null) {
    acc = fn(acc, curr.data); // Apply function on accumulator and current node
    curr = curr.next; // Move to next node
  }

  return acc; // Return final accumulated result
}

// Example 1: Sum
let list1 = new Node(1, new Node(2, new Node(3)));
console.log(reduce(list1, (acc, curr) => acc + curr, 0)); // 6

// Example 2: Product
let list2 = new Node(1, new Node(2, new Node(3, new Node(4))));
console.log(reduce(list2, (acc, curr) => acc * curr, 1)); // 24

// Example 3: Empty list
console.log(reduce(null, (acc, curr) => acc + curr, 100)); // 100

/*
### Explanation

* We start with the `initial` value as the accumulator.
* We traverse the linked list node by node:

  * At each step, we apply the provided function `fn(acc, curr.data)`.
  * Update the accumulator with the returned value.
  * Move to the next node.
* Continue until we reach the end (`curr === null`).
* Finally, return the accumulated value.

---
### ⚡ Complexity

* **Time Complexity**: `O(n)` (we visit each node once).
* **Space Complexity**: `O(1)` (no extra memory except variables).

*/
