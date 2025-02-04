function sortString(str) {
  // Check if the input is null, empty, or not a string
  if (!str || typeof str !== 'string') return 'Invalid String!';

  // Convert string to an array, sort it based on ASCII values, and join it back
  return str.split('').sort().join('');
}

// Test cases
console.log(sortString('hello world')); // " dehllloorw"
console.log(sortString('bobby')); // "bbboy"
console.log(sortString('')); // "Invalid String!"
console.log(sortString('!Hi You!')); // " !!HYiou"
console.log(sortString(null)); // "Invalid String!"
console.log(sortString('OpenAI!')); // "AIOepn!"

/*Explanation:
1. **Input Validation**:  
   - `!str` ensures `null`, `undefined`, or empty strings return `"Invalid String!"`.
   - `typeof str !== "string"` ensures only valid strings are processed.
   
2. **Sorting Logic**:
   - `.split("")` converts the string into an array of characters.
   - `.sort()` sorts characters based on their ASCII values.
   - `.join("")` combines the sorted characters back into a string.

*/
