// SOLUTION 1: using set()
function isIsogram(str) {
  // new Set(str.toUpperCase()): This creates a new Set object from the characters of the uppercase version of the input string. The Set object automatically removes duplicate characters, leaving only unique characters because Set() only stores unique elements
  return new Set(str.toUpperCase()).size == str.length;
}

// SOLUTION 2: using object to track character counts
function isIsogram(str) {
  str = str.toLowerCase();

  // Create an object to store the count of each character
  const charCount = {};

  // Iterate through each character of the string
  for (let char of str) {
    // If the character is already in the charCount object, it's not an isogram
    if (charCount[char]) {
      return false;
    }
    // Otherwise, add the character to charCount with a count of 1
    charCount[char] = 1;
  }

  // If all characters are unique, it's an isogram
  return true;
}
