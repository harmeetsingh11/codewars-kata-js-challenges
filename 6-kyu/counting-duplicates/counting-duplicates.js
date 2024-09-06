// SOLUTION 1: Using Regular Expression (regex)
// This method uses a regex pattern to match repeated characters in the string.
function duplicateCount(text) {
  // Explanation:
  // - /([a-z])/gi: This regex pattern matches any letter (a-z) in the string, case-insensitively.
  // - .*\1: The .*? part is a non-greedy match that matches any character (0 or more times) between the repeated characters.
  // - \1 is a backreference to the first capturing group ([a-z]), meaning it matches the same letter found earlier.
  // - match() returns an array of all matches in the string.
  // - The length of this array gives the count of duplicate characters.
  return text.match(/([a-z]).*?\1/gi).length;
}

// SOLUTION 2: Using an Object to Count Frequencies
// This method uses an object to keep track of how many times each character appears in the string.
function duplicateCount(text) {
  // Convert the input string to lowercase to ignore case sensitivity
  text = text.toLowerCase();

  // Create an object to store the count of each character
  let frequency = {};

  // Iterate through each character in the input string
  for (let char of text) {
    // Increment the count of the current character in the frequency object
    // If the character does not exist in the object, initialize its count to 1
    // If it already exists, increment the count by 1
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Filter the characters with counts greater than 1 (indicating duplicates)
  let duplicates = Object.values(frequency).filter((count) => count > 1);

  // Return the number of unique characters that have duplicates
  return duplicates.length;
}
