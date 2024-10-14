function position(letter) {
  // Calculate the position by subtracting the char code of 'a' and adding 1
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

//   Explanation:
//   charCodeAt(0): This function returns the Unicode value of the given character at index 0 of the string. For example, 'a'.charCodeAt(0) gives 97 since 'a' starts at 97 in the Unicode table.

//   Subtracting 96: Since the Unicode value of 'a' is 97, we subtract 96 to get 1 for 'a', 2 for 'b', and so on.

//   Template Literal: We use template literals (backticks ``) to insert the calculated position into the string "Position of alphabet: ${...}".

//   This solution runs in constant time O(1), as it directly computes the position from the character's Unicode value. It's efficient and concise.
