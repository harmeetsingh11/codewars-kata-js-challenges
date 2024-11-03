function capitalize(s) {
  // Create two arrays to store characters with different capitalizations
  let evenCapitalization = [];
  let oddCapitalization = [];

  // Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      // If the index is even, capitalize for evenCapitalization array, keep lowercase for oddCapitalization array
      evenCapitalization.push(s[i].toUpperCase());
      oddCapitalization.push(s[i]);
    } else {
      // If the index is odd, capitalize for oddCapitalization array, keep lowercase for evenCapitalization array
      evenCapitalization.push(s[i]);
      oddCapitalization.push(s[i].toUpperCase());
    }
  }

  // Join both arrays and return them as an array of strings
  return [evenCapitalization.join(''), oddCapitalization.join('')];
}

/* 
Explanation:

Initialize Two Arrays:
evenCapitalization will hold the characters where even indices are capitalized.
oddCapitalization will hold the characters where odd indices are capitalized.

Loop Through Characters:
For each character at index i in the string s:
If i is even, capitalize the character for evenCapitalization and keep it lowercase for oddCapitalization.
If i is odd, capitalize the character for oddCapitalization and keep it lowercase for evenCapitalization.

Return Result:
Join both arrays into strings and return them as an array [evenCapitalization, oddCapitalization].

This approach is efficient, with a time complexity of O(n), where n is the length of the string. The solution is concise and easy to understand.
*/
