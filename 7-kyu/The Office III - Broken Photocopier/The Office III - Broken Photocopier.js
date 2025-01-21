function brokenPhotocopier(binary) {
  // Use split to convert the string into an array of characters,
  // map over the array to flip '1' to '0' and '0' to '1',
  // then join the array back into a string.
  return binary
    .split('')
    .map((bit) => (bit === '1' ? '0' : '1'))
    .join('');
}

console.log(brokenPhotocopier('10101')); // Output: "01010"
console.log(brokenPhotocopier('1111')); // Output: "0000"
console.log(brokenPhotocopier('0000')); // Output: "1111"

/* 
Explanation:

Split the string into an array:
The split('') method converts the binary string into an array of characters, making it easier to work with each individual bit.

Use map to transform the array:
The map function iterates over each character in the array. For each bit:
If it's '1', it returns '0'.
If it's '0', it returns '1'.

Join the array back into a string:
After flipping the bits, the join('') method combines the transformed array back into a single string.

Why this solution is efficient:
Time Complexity: O(n), where n is the length of the binary string. Each character is processed exactly once.
Space Complexity: O(n), as the array created by split and the transformed array by map both occupy space proportional to the input size.
*/
