function insertDashes(num) {
  // Convert the number to a string and split it into an array of digits
  return (
    num
      .toString()
      .split('')
      // Reduce the array to a string, adding dashes between consecutive odd digits
      .reduce((result, digit, index, arr) => {
        // Check if both the current and next digits are odd
        if (index > 0 && digit % 2 === 1 && arr[index - 1] % 2 === 1) {
          result += '-';
        }
        return result + digit; // Append the current digit to the result
      }, '')
  );
}

// Examples
console.log(insertDashes(454793)); // "4547-9-3"
console.log(insertDashes(0)); // "0"
console.log(insertDashes(1)); // "1"
console.log(insertDashes(13579)); // "1-3-5-7-9"
console.log(insertDashes(86420)); // "86420"

/* 
Explanation:

Convert the number to a string:
The number is converted to a string using .toString() so we can process each digit individually.

Split into an array of digits:
The string is split into an array of characters using .split('').

Use reduce to construct the final string:
The reduce function iterates over each digit. It builds the result string by appending digits and inserting a dash (-) if the current digit and the previous one are both odd.
The condition digit % 2 === 1 && arr[index - 1] % 2 === 1 checks if two consecutive digits are odd.
The resulting string is returned at the end of the reduction.

Edge cases:
Single-digit numbers return themselves since no consecutive digits exist.
Numbers without consecutive odd digits are returned unchanged.

Efficiency:
The algorithm processes each digit exactly once, making it efficient with a time complexity of O(n), where n is the number of digits in the input.
*/
