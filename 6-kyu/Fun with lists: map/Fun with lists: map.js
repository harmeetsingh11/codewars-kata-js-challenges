// Node constructor definition
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

/**
 * Applies a mapping function to each element in the linked list and returns a new list
 * @param {Node|null} head - The head of the original linked list
 * @param {Function} fn - Mapping function to apply on each node's data
 * @returns {Node|null} - Head of the new linked list with mapped values
 */
function map(head, fn) {
  if (!head) return null; // Base case: if the list is empty, return null

  // Create the new head using the mapping function
  const newHead = new Node(fn(head.data));
  let currentNew = newHead;
  let currentOld = head.next;

  // Traverse the rest of the original list
  while (currentOld) {
    // Create new node with mapped value and link it
    currentNew.next = new Node(fn(currentOld.data));
    currentNew = currentNew.next;
    currentOld = currentOld.next;
  }

  return newHead; // Return the head of the new list
}

// Example
const list = new Node(1, new Node(2, new Node(3)));
const mapped = map(list, (x) => x * 2); // Should return 2 -> 4 -> 6

// Helper to print the list for verification
function printList(head) {
  const result = [];
  while (head) {
    result.push(head.data);
    head = head.next;
  }
  console.log(result.join(' -> '));
}

printList(mapped); // Output: 2 -> 4 -> 6
