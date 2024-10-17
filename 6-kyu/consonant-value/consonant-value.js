function solve(s) {
  // Split the string into consonant substrings, using vowels as delimiters
  return Math.max(
    ...s
      .split(/[aeiou]/) // Split string at vowels
      .map((substr) =>
        [...substr].reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0)
      ) // Calculate the value of each consonant substring
  );
}

// Explanation:

// Split by Vowels:
// The string s is split into substrings of consonants using a regular expression /[aeiou]/, which acts as the delimiter, leaving only consonant substrings.

// Calculate the Value of Each Substring:
// For each consonant substring, we map over it and calculate the sum of the character values.
// char.charCodeAt(0) - 96 converts the character to its alphabetical position ('a' = 1, 'b' = 2, ..., 'z' = 26) by subtracting 96 from the Unicode value of the character.

// Find Maximum Value:
// We use Math.max() to find the highest sum from all consonant substrings.
// The spread operator (...) is used to pass the individual values from the array of sums to Math.max().

// This solution is efficient, operating in O(n) time, where n is the length of the string. It uses regular expressions and array manipulation in a concise manner to solve the problem.
