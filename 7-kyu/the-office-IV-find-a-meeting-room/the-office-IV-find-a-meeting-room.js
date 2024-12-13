function findEmptyRoom(rooms) {
  // Use the array's findIndex method to locate the first empty room ('O')
  const index = rooms.findIndex((room) => room === 'O');

  // If no empty room is found, return the specified message
  return index === -1 ? 'None available!' : index;
}

// Example
console.log(findEmptyRoom(['X', 'O', 'X'])); // Output: 1
console.log(findEmptyRoom(['X', 'X', 'X'])); // Output: "None available!"

/*
Explanation:
1. `findIndex` iterates through the array and returns the index of the first element that matches the condition (room === 'O').
2. If no match is found, `findIndex` returns -1.
3. We use a ternary operator to return either the index or the message "None available!" based on the result.
*/
