class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertNth(head, index, data) {
  // If index is invalid (negative), throw an error
  if (index < 0) throw new Error('InvalidArgumentException');

  let newNode = new Node(data);

  // If inserting at the head (index 0), make newNode the new head
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }

  let current = head;
  let prev = null;
  let count = 0;

  // Traverse the list to find the insertion point
  while (current && count < index) {
    prev = current;
    current = current.next;
    count++;
  }

  // If index is out of range, throw an error
  if (count !== index) throw new Error('InvalidArgumentException');

  // Insert the new node
  prev.next = newNode;
  newNode.next = current;

  return head;
}

/* 
### Explanation:
1. **Edge Case - Insert at Head (`index === 0`)**:  
   - If inserting at the start, update `newNode.next` to point to the current head and return `newNode` as the new head.

2. **Traversal to Find Position**:  
   - Use a loop to traverse the linked list until reaching the desired index.
   - Keep track of `prev` (previous node) and `current` (current node).

3. **Check for Out-of-Bounds Index**:  
   - If we reach the end of the list before reaching the `index`, an error is thrown.

4. **Insert the New Node**:  
   - Link `prev.next` to `newNode`.
   - Set `newNode.next` to `current`, effectively inserting it at the correct position.

### Complexity:
- **Time Complexity:** \(O(n)\) (traverse up to `index` nodes)
- **Space Complexity:** \(O(1)\) (modifies list in place)
*/
