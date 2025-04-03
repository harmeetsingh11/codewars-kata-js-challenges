function removeDuplicates(head) {
  if (!head) return null; // If the list is empty, return null

  let current = head; // Start from the head node

  while (current && current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next; // Remove duplicate by skipping it
    } else {
      current = current.next; // Move to the next node if no duplicate
    }
  }

  return head; // Return the updated list
}

/* 
### Explanation:
1. **Check for an empty list (`null`)** → If the list is empty, return `null`.
2. **Iterate over the list once (`O(n)`)**:
   - If the current node’s `data` matches the next node’s `data`, remove the duplicate by skipping it.
   - Otherwise, move to the next node.
3. **Return the modified head** → If the list has no duplicates, it remains unchanged.


### Why This Works:
- **Handles lists without duplicates correctly** (unchanged).
- **Handles lists with duplicates efficiently** (`O(n) time, O(1) space`).
- **Works for large lists without recursion stack issues**.
*/
