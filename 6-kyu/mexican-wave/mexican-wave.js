function wave(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    // Check if the current character is not a whitespace
    if (str[i] !== ' ') {
      // Create a new string by:
      // - Taking the substring from the start (0) to the current index (i)
      // - Converting the character at the current index (i) to uppercase
      // - Adding the rest of the string from the current index (i + 1) onwards
      result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }

  // Return the array of strings where each string has one character capitalized at a time
  return result;
}
