function duplicateEncode(word) {
  // Create an object to store the frequency of each character in the word
  const frequency = {};

  // Initialize an empty string to store the encoded result
  let result = '';

  // First loop: Convert the word to lowercase and count the frequency of each character
  for (const char of word.toLowerCase()) {
    // For each character, increase its count in the frequency object or initialize it if it doesn't exist
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Second loop: Iterate over the word again to build the encoded result
  for (const char of word.toLowerCase()) {
    // If the character appears only once, add '(' to the result
    // Otherwise, add ')' if the character appears more than once
    result += frequency[char] === 1 ? '(' : ')';
  }

  // Return the final encoded string
  return result;
}
