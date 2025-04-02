const tea42 = (input) => String(input).replace(/2/g, 't');

// Test cases
console.log(tea42('coffee')); // 'coffee'
console.log(tea42('tea')); // 'tea'
console.log(tea42('2ea')); // 'tea'
console.log(tea42(9022)); // '90tt'
console.log(tea42(5676765)); // '5676765'
console.log(tea42('2u2u')); // 'tutu'

// Explanation:
// 1. Convert input to a string using String(input) to handle both numbers and strings.
// 2. Use .replace(/2/g, 't') to globally replace all occurrences of '2' with 't'.
// 3. The regular expression /2/g ensures that every '2' in the string is replaced.
// 4. Returns the modified string.
