function countIf(head, predicate) {
  let count = 0;
  while (head) {
    // Traverse the linked list
    if (predicate(head.data)) count++; // Apply predicate and count if true
    head = head.next; // Move to the next node
  }
  return count;
}

/* 
### Explanation:
1. We initialize `count` to zero.
2. We traverse the linked list using a `while` loop.
3. For each node, we check if `predicate(head.data)` returns `true`. If it does, we increment the count.
4. We move to the next node using `head = head.next`.
5. Once traversal is complete, we return the count.

This solution runs in **O(n) time complexity** (where n is the number of nodes in the linked list) and **O(1) space complexity** since it only uses a single variable for counting. 
*/
