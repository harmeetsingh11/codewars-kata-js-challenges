function listToArray(list) {
  const result = []; // Initialize an empty array to store values
  let current = list; // Start with the given linked list

  // Traverse through the linked list
  while (current) {
    result.push(current.value); // Add the value of the current node to the array
    current = current.next; // Move to the next node
  }

  return result; // Return the array containing all values from the linked list
}

const list = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
console.log(listToArray(list)); // Output: [1, 2, 3]

/* 
Explanation:
Step 1: We start by initializing an empty array (result) to hold the values of the linked list.
Step 2: We use a while loop to iterate through the linked list. As long as the current node is not null, we continue the traversal.
Step 3: For each node, we push its value into the result array.
Step 4: After pushing the value, we move to the next node by updating current to current.next.
Step 5: Once the loop finishes (when current becomes null), we return the populated result array.
*/
