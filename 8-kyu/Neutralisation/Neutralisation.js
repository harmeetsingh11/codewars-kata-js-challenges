function interactStrings(str1, str2) {
  // Use Array.prototype.map() to iterate over each character and compute the result
  return str1
    .split('')
    .map((char, i) => {
      if (char === str2[i]) return char; // Same signs remain the same
      return '0'; // Different signs become neutral
    })
    .join(''); // Join the array back into a string
}

// Worked Example
console.log(interactStrings('+-+', '+--')); // ➞ "+-0"

// Examples
console.log(interactStrings('--++--', '++--++')); // ➞ "000000"
console.log(interactStrings('-+-+-+', '-+-+-+')); // ➞ "-+-+-+"
console.log(interactStrings('-++-', '-+-+')); // ➞ "-+00"

/* 
Explanation:

Input Split into Characters:
str1.split('') splits the string str1 into an array of individual characters.

Map Characters:
Using Array.prototype.map, each character of str1 is compared to the corresponding character of str2 (accessed using str2[i] where i is the current index in map):
If the characters are the same (+ with + or - with -), return the character as is.
If the characters are different (+ with - or - with +), return 0.

Join Results into a String:
After computing the result for each character, join('') converts the array back into a string.

Efficiency:
This solution runs in O(n) time, where n is the length of the strings, as it involves a single pass through the strings.
*/
