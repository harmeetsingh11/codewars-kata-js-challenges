function spongebobMockingMeme(input) {
  // Use Array.prototype.map to transform each character
  return input
    .split('') // Split the string into an array of characters
    .map((char, index) =>
      index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    ) // Apply alternating uppercase and lowercase
    .join(''); // Join the array back into a string
}

const input = 'stop Making spongebob Memes!';
const output = spongebobMockingMeme(input);
console.log(output); // "StOp mAkInG SpOnGeBoB MeMeS!"

/* 
Explanation:

Split the String: The input string is split into an array of characters using split('') so each character can be transformed individually.

Map with Alternating Case: Using Array.prototype.map, each character is checked against its index:
If the index is even, the character is converted to uppercase with char.toUpperCase().
If the index is odd, the character is converted to lowercase with char.toLowerCase().

Rejoin the Array: After transforming all characters, the array is rejoined into a single string using join('').

Efficient Transformation: This approach processes the string in linear time O(n), making it efficient for larger inputs.
*/
