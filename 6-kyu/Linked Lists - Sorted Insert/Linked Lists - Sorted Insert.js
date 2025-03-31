class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function sortedInsert(head, data) {
  const newNode = new Node(data);

  // Handle empty list or insertion at the head
  if (!head || data < head.data) {
    newNode.next = head;
    return newNode;
  }

  let current = head;

  // Traverse the list until the correct insert position is found
  while (current.next && current.next.data < data) {
    current = current.next;
  }

  // Insert the new node in the correct position
  newNode.next = current.next;
  current.next = newNode;

  return head;
}

// Example
function printList(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.data);
    current = current.next;
  }
  console.log(result.join(' -> ') + ' -> null');
}

// Test cases
const list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);
printList(sortedInsert(list1, 4)); // 1 -> 2 -> 3 -> 4 -> null

const list2 = new Node(1);
list2.next = new Node(7);
list2.next.next = new Node(8);
printList(sortedInsert(list2, 5)); // 1 -> 5 -> 7 -> 8 -> null

const list3 = new Node(3);
list3.next = new Node(5);
list3.next.next = new Node(9);
printList(sortedInsert(list3, 7)); // 3 -> 5 -> 7 -> 9 -> null

/*
### **Explanation:**
1. **Node Class:** Defines a `Node` with `data` and `next` properties.
2. **Base Case Handling:**
   - If the list is empty (`!head`), the new node becomes the head.
   - If the new data is smaller than the head node's data, insert it at the beginning.
3. **Traversal Logic:**
   - Iterate through the list using `current` until you find the correct insertion point.
   - Insert the new node by adjusting the `next` pointers.
4. **Time Complexity:** \(O(n)\) – iterating through the list takes linear time.
5. **Space Complexity:** \(O(1)\) – only one new node is created.

### **Key Benefits:**
- Efficient \(O(n)\) traversal.
- Simple and readable code.
- Properly handles all edge cases (empty list, insertion at head, and middle insertion).
*/
