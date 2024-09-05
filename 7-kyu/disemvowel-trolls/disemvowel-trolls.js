function disemvowel(str) {
  // Check if the input string has a length greater than 0
  // If the string is empty, return an empty string immediately
  return str.length > 0
    ? // Use the `match` method with a regular expression to find all characters that are not vowels (aeiou)
      // The `[^aeiou]` pattern matches any character that is not a lowercase vowel
      // The `gi` flags make the matching case-insensitive (`i`) and global (`g`), so it matches all instances in the string
      str.match(/[^aeiou]/gi).join('')
    : // Join the array of non-vowel characters back into a single string and return it
      // If the string was empty, return an empty string as well
      '';
}
