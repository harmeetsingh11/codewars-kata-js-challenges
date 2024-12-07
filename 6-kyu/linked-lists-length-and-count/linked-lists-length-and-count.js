function Node(data) {
  this.data = data;
  this.next = null;
}

// Function to calculate the length of the linked list
function length(head) {
  let count = 0; // Initialize counter
  while (head) {
    // Traverse the list until the end
    count++; // Increment count for each node
    head = head.next; // Move to the next node
  }
  return count; // Return total count
}

// Function to count occurrences of a specific data value in the linked list
function count(head, data) {
  let count = 0; // Initialize counter
  while (head) {
    // Traverse the list
    if (head.data === data) count++; // Increment count if data matches
    head = head.next; // Move to the next node
  }
  return count; // Return total occurrences
}

/* 
Explanation:

length function:
Initialize a counter count to 0.
Use a while loop to traverse through each node of the list.
Increment the count for each node encountered.
Stop when head becomes null, indicating the end of the list.

count function:
Similarly, traverse through the list using a while loop.
Check if the data of the current node matches the target data.
If it matches, increment the counter.
Return the counter after the traversal ends.

Efficiency:
Both functions operate in O(n) time complexity, where n is the number of nodes in the linked list, as they traverse the list exactly once.
Space complexity is O(1) as no additional data structures are used.
*/
