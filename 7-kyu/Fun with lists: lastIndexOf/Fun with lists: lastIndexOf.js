function lastIndexOf(head, value) {
  let index = -1,
    current = head,
    position = 0;

  while (current) {
    // Traverse the linked list
    if (current.data === value) index = position; // Update index if value is found
    current = current.next; // Move to the next node
    position++; // Increment position counter
  }

  return index; // Return the last found index or -1 if not found
}

// This solution runs in O(n) time complexity with O(1) space complexity, making it optimal.
