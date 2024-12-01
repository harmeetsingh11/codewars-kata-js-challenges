function decode(arr) {
  // Map over the array and convert each number to its corresponding character
  return arr
    .map((num) =>
      num == 27
        ? '!'
        : num == 28
        ? '?'
        : num == 29
        ? ' '
        : String.fromCharCode(123 - num)
    )
    .join('');
}

// Example
console.log(decode(['26', '25', '24', '27', '28', '29'])); // Output: "abc!? "

/* 
Explanation:

Mapping Numbers to Characters:
The numbers 27, 28, and 29 correspond to !, ?, and respectively, handled as special cases.
For letters, the mapping a=26, z=1 means the characters are in reverse order. Using ASCII values:
z is ASCII 122, y is 121, ..., a is 97.
The formula for reverse mapping is 123 - num to convert the number to the correct ASCII value for the letter.

Using String.fromCharCode:
The String.fromCharCode method converts an ASCII value into its corresponding character.

Returning the String:
Array.map() applies the mapping function to each number in the array.
Array.join('') combines the resulting characters into a single string.
*/
