function lastSurvivor(str, arr) {
  // Convert the string to an array to make letters mutable
  let letters = [...str];

  // Remove letters based on the indices in the array
  for (const index of arr) {
    letters.splice(index, 1); // Remove the letter at the given index
  }

  // Return the last remaining letter
  return letters[0];
}

// Example
let str = 'zbk';
let arr = [0, 1];
console.log(lastSurvivor(str, arr)); // Output: 'b'

// Explanation:
// 1. Convert the string into an array for mutability since strings are immutable in JavaScript.
// 2. Iterate over the array of indices and remove the letter at each index using `splice`.
// 3. After processing all indices, the array will contain only one letter, which is returned.

/* 
Explanation:

String to Array Conversion: Convert the input string to an array because strings in JavaScript are immutable, whereas arrays allow us to easily modify their elements.

Iterate and Remove: Use splice to remove the character at the specified index for each number in the array. Since splice directly modifies the array, the indices naturally adjust as the string size decreases.

Return Remaining Letter: Once all indices are processed, the array will have only one element left, which is returned as the result.
*/
