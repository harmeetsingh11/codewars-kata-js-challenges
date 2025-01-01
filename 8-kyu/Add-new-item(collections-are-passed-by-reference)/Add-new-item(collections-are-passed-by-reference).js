function AddExtra(list, item) {
  // Create a new array by spreading the input list, and add the new item
  return [...list, item]; // This creates a new array with the items of `list` and appends `item`
}

// Example:
let list = [1, 2, 3];
let newList = AddExtra(list, 13);
console.log(newList); // [1, 2, 3, 13]
console.log(list); // [1, 2, 3]  (original list remains unchanged)

/* 
Explanation:

[...list]: The spread operator ... creates a shallow copy of the list array. This ensures that the original list is not modified.

item: This is the new item that will be added to the new list.

Return new array: The method returns a new array that contains all the elements of the original list followed by the new item.

This approach respects the immutability of the original list and passes the test where we check if the new list has one more item than the input list.

This solution is efficient as it only creates a new array by copying the original list and adding the new item, ensuring that the time complexity is O(n), where n is the length of the list.
*/
