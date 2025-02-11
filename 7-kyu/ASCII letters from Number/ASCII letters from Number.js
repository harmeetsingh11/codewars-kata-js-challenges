function convertToASCII(str) {
  return str.replace(/../g, (num) => String.fromCharCode(num));
}

console.log(convertToASCII('658776')); // 'AWL'
console.log(convertToASCII('73327673756932858080698267658369')); // 'I LIKE UPPERCASE'

/*
Explanation:
1. **Regex `../g`** - Matches every two-digit substring.
2. **`.replace()`** - Uses a callback function that:
   - Takes each matched two-digit number.
   - Converts it to an ASCII character using `String.fromCharCode(num)`.
3. The final string is returned with all characters properly converted.
*/
