// Return the first element of the array
const head = (arr) => arr[0];

// Return all elements except the first
const tail = (arr) => arr.slice(1);

// Return all elements except the last
const init = (arr) => arr.slice(0, -1);

// Return the last element of the array
const last = (arr) => arr[arr.length - 1];

// Test cases
console.log(head([1, 2, 3, 4, 5])); // 1
console.log(tail([1, 2, 3, 4, 5])); // [2, 3, 4, 5]

/* 
Explanation:

head:
Returns the first element of the array using arr[0].
This is an O(1) operation as it directly accesses the first element.

tail:
Uses slice(1) to create a new array starting from the second element to the end.
This avoids modifying the original array and ensures immutability.

init:
Uses slice(0, -1) to create a new array containing all elements except the last.
The -1 index in slice refers to the last element, and the function excludes it.

last:
Accesses the last element of the array using arr[arr.length - 1].
This is also an O(1) operation as it directly accesses the index.
*/
