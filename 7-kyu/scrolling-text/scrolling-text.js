function scrollingText(str) {
  const result = [];

  // Convert the input string to uppercase
  str = str.toUpperCase();

  // Generate all rotations of the string
  for (let i = 0; i < str.length; i++) {
    // Create a rotation by slicing and concatenating the string
    result.push(str.slice(i) + str.slice(0, i));
  }

  return result;
}

// Test the function
console.log(scrollingText('codewars'));
// Output
// [
//   'CODEWARS',
//   'ODEWARSC',
//   'DEWARSCO',
//   'EWARSCOD',
//   'WARSCODE',
//   'ARSCODEW',
//   'RSCODEWA',
//   'SCODEWAR',
// ];

/* 
Explanation:

Convert to uppercase: We convert the entire string to uppercase using toUpperCase() to match the problem's requirements.

Loop through all rotations: We loop through each index of the string, generating a rotation by taking the substring from that index to the end (str.slice(i)) and concatenating it with the substring from the start to that index (str.slice(0, i)).

Push the rotation to the result array: Each rotation is stored in the result array.

Return the result: Finally, we return the array containing all the rotations.
*/
