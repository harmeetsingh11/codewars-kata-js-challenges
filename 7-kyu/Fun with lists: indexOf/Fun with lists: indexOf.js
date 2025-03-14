function indexOf(head, value) {
  // Initialize index counter
  let index = 0;

  // Traverse the linked list
  while (head) {
    // If the current node's data matches the value, return the index
    if (head.data === value) return index;

    // Move to the next node and increment index
    head = head.next;
    index++;
  }

  // If value is not found, return -1
  return -1;
}

/* 
### Explanation:
1. **Initialize `index` to `0`** – This keeps track of the current node position.
2. **Loop through the linked list** – Iterate while `head` is not `null`.
3. **Check if `head.data` matches `value`** – If found, return the current `index`.
4. **Move to the next node** – Update `head` to `head.next` and increment `index`.
5. **Return `-1` if not found** – If we reach the end without finding `value`, return `-1`.
This solution runs in **O(n) time complexity** with **O(1) space complexity**, making it optimal.
*/
