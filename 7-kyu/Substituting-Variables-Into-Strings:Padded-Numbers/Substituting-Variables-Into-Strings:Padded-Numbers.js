function solution(value) {
  // Convert the number to a string and pad it with leading zeros to make it 5 digits
  const paddedValue = String(value).padStart(5, '0');

  // Return the formatted string
  return `Value is ${paddedValue}`;
}

// Example
console.log(solution(5)); // "Value is 00005"
console.log(solution(123)); // "Value is 00123"
console.log(solution(98765)); // "Value is 98765"

/* 
Explanation:

String(value):
Converts the input number to a string so we can manipulate its length.

.padStart(5, '0'):
Ensures the string is at least 5 characters long by adding leading zeros ('0') if necessary. If the input already has 5 or more digits, no padding is applied.

Template Literals (```):
Used to create the formatted string in the required format "Value is VALUE" by embedding the padded value directly into the string.
*/
