function count(string) {
  // Split the input string into an array of characters
  const strToArr = string.split('');

  // Initialize an empty object to store the frequency of each character
  const frequency = {};

  // Iterate over each character in the array
  for (const char of strToArr) {
    // Increment the count for the current character in the frequency object
    // If the character does not exist in the object, initialize it with 0 and then increment it by 1
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Return the frequency object containing the count of each character
  return frequency;
}
