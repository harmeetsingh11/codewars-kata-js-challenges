function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  // Ensure the input index is non-negative and the list is not null.
  if (!node || index < 0) {
    throw new Error('Invalid index or empty list');
  }

  let current = node; // Start traversal from the head node.
  let count = 0; // Counter to track the current index.

  // Traverse the linked list until the desired index is reached.
  while (current) {
    if (count === index) {
      return current; // Return the node when the index matches.
    }
    current = current.next; // Move to the next node.
    count++; // Increment the counter.
  }

  // If the loop ends without finding the index, it means the index is out of range.
  throw new Error('Index out of range');
}

// Example
// Create a linked list: 1 -> 2 -> 3 -> null
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

console.log(getNth(head, 0).data); // Output: 1
console.log(getNth(head, 1).data); // Output: 2
console.log(getNth(head, 2).data); // Output: 3
console.log(getNth(head, 3)); // Throws Error: Index out of range

/* 
Explanation:
Validation:
If the list is empty (node is null) or the index is negative, throw an error.
Traversal:
Use a while loop to traverse the list, maintaining a counter (count) to track the current index.
If the counter matches the desired index, return the current node.
Out-of-Range Check:
If the end of the list is reached without finding the desired index, throw an error indicating the index is out of range.
*/
