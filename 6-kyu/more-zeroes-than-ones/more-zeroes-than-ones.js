function moreZeros(input) {
  // Create a Set to keep track of characters we've already added to the result
  const seen = new Set();
  // Create an array to hold the final result
  const result = [];

  // Iterate through each character in the input string
  for (const char of input) {
    // Get the binary representation of the ASCII value of the character
    const binary = char.charCodeAt(0).toString(2);
    // Count the number of zeros and ones in the binary representation
    const zeroCount = binary.split('0').length - 1;
    const oneCount = binary.split('1').length - 1;

    // Check if the number of zeros is greater than the number of ones
    if (zeroCount > oneCount && !seen.has(char)) {
      // If true and the character has not been added yet, add it to the result
      result.push(char);
      // Mark this character as seen
      seen.add(char);
    }
  }

  return result;
}

console.log(moreZeros('abcde')); // Output: ['a', 'b', 'd']
console.log(moreZeros('DIGEST')); // Output: ['D', 'I', 'E', 'T']

/* 
Explanation

Binary Conversion:
char.charCodeAt(0).toString(2) converts the character's ASCII value into its binary representation.

Zero and One Counting:
binary.split('0').length - 1 counts the number of zeros in the binary string.
binary.split('1').length - 1 counts the number of ones.

Filtering:
The condition zeroCount > oneCount ensures that only characters with more zeros than ones in their binary representation are considered.

Avoiding Duplicates:
A Set is used to track characters already included in the result to avoid duplicates while preserving the order.

Final Result:
Characters satisfying the conditions are added to the result array, which is returned at the end.
*/
