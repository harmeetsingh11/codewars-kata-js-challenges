class Node {
  constructor(data, next = null) {
    this.data = data; // The value of the current node
    this.next = next; // Pointer to the next node (or null if none)
  }
}

// Function to add a new node to the front of the linked list
function push(head, data) {
  // Create a new node with the given data
  // Its next pointer will point to the current head
  return new Node(data, head);
}

// Function to build a linked list with three nodes: 1 -> 2 -> 3 -> null
function buildOneTwoThree() {
  // Start with an empty list
  let head = null;

  // Push 3, then 2, then 1 to build the list in reverse order
  head = push(head, 3);
  head = push(head, 2);
  head = push(head, 1);

  // Return the head of the created linked list
  return head;
}

let list = buildOneTwoThree();
console.log(JSON.stringify(list, null, 2)); // Visualize the linked list

/* 
Explanation:

Node Class: Represents an individual node with a data value and a next pointer.
data: Holds the node's value.
next: Points to the next node or is null if it's the last node.

push Function:
Accepts the current head of the linked list and the data to add.
Creates a new node with the provided data.
Sets the next of the new node to point to the current head, effectively adding it to the front of the list.
Returns the new node as the updated head.

buildOneTwoThree Function:
Initializes an empty list (head = null).
Uses push to sequentially add values 3, 2, and 1 to the list, ensuring the final order is 1 -> 2 -> 3 -> null.
Returns the head of the constructed linked list.
*/
