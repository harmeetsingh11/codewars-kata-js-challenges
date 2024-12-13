function compareStrings(str1, str2) {
  // Helper function to validate and calculate the ASCII sum of a string
  const getAsciiSum = (str) => {
    // Treat null or non-string inputs as empty strings
    if (!str || typeof str !== 'string') return 0;
    // Convert string to uppercase and check if it contains only letters
    str = str.toUpperCase();
    if (!/^[A-Z]*$/.test(str)) return 0; // Treat as empty if non-letters are present
    // Calculate and return the sum of ASCII values
    return [...str].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  };

  // Compare the ASCII sums of both strings
  return getAsciiSum(str1) === getAsciiSum(str2);
}

// Test Cases
console.log(compareStrings('AD', 'BC')); // true
console.log(compareStrings('AD', 'DD')); // false
console.log(compareStrings('gf', 'FG')); // true
console.log(compareStrings('zz1', '')); // true
console.log(compareStrings('ZzZz', 'ffPFF')); // true
console.log(compareStrings('kl', 'lz')); // false
console.log(compareStrings(null, '')); // true

/* 
Explanation:

Validation and Conversion:
null or invalid inputs (!str || typeof str !== 'string') are treated as empty strings by returning 0.
Strings are converted to uppercase to ensure case insensitivity.
If a string contains any non-letter characters (/^[A-Z]*$/), it is treated as empty (ASCII sum is 0).

ASCII Sum Calculation:
The spread operator ([...str]) splits the string into characters.
reduce computes the sum of ASCII values of the characters using char.charCodeAt(0).

Comparison:
The sums of the two strings are compared for equality.
*/
