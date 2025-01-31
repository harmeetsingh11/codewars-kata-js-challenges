function scramble(str, indices) {
  // Create an empty array to store the rearranged characters
  let result = new Array(str.length);

  // Loop through each character and place it in the correct index based on the 'indices' array
  for (let i = 0; i < str.length; i++) {
    result[indices[i]] = str[i];
  }

  // Join the result array into a string and return it
  return result.join('');
}

console.log(scramble('abcd', [0, 3, 1, 2])); // Output: 'acdb'

/* 
Explanation:
Create an empty result array: We initialize an array result of the same length as the input string to hold the rearranged characters.
Loop through the string: For each character in the string, we place it at the index specified by the corresponding value in the indices array.
Join the array into a string: After all characters are placed in the correct positions, we join the result array back into a string and return it.
*/
