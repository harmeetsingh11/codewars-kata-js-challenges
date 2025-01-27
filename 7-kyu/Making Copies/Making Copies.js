// Function to create a deep copy of an array.
// @param {Array} arr - The input array to be copied.
// @returns {Array} A new array that is a copy of the input array.
// @throws {TypeError} Throws an error if the input is not an array.

function copyList(arr) {
  // Check if the input is an array, throw an error if not
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array.');
  }
  // Return a shallow copy of the array using the spread operator
  return [...arr];
}

let t = [1, 2, 3, 4];
let tCopy = copyList(t);

t[1] += 5; // Modify the original array

console.log(t); // Output: [1, 7, 3, 4]
console.log(tCopy); // Output: [1, 2, 3, 4]

/* 
Explanation:

Input Validation:
Array.isArray(arr) is used to verify if the input is an array.
If the input is not an array, a TypeError is thrown with an appropriate message.

Shallow Copy:
The spread operator ([...]) creates a shallow copy of the array.
A shallow copy suffices here because the problem assumes simple arrays with primitive values.

Performance:
The spread operator is a modern and efficient way to copy arrays in JavaScript.
*/
