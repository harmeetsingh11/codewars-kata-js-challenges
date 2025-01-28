function length(head) {
  // Initialize a counter to keep track of the length
  let count = 0;

  // Traverse the linked list using a while loop
  while (head) {
    count++; // Increment the counter for each node
    head = head.next; // Move to the next node
  }

  // Return the total count of nodes in the list
  return count;
}

// Example
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

// Create a linked list: 1 -> 2 -> 3 -> 4
const head = new Node(1, new Node(2, new Node(3, new Node(4))));

console.log(length(head)); // Output: 4
console.log(length(null)); // Output: 0 (Empty list)

/*  
Explanation:

Initialization:
We start by initializing a counter variable count to 0. This will hold the length of the linked list.

Traversal:
We use a while loop to traverse the linked list. The condition while (head) checks if the current node exists (i.e., it's not null).

Increment Counter:
Inside the loop, we increment the count by 1 for each node we visit.

Move to the Next Node:
We update head to head.next to move to the next node in the list.

Return the Length:
Once we exit the loop (when head becomes null), we return the count, which represents the total length of the linked list.

Complexity:
Time Complexity: O(n), where n is the number of nodes in the linked list, as we visit each node once.
Space Complexity: O(1), as we only use a single counter variable for computation.
*/
