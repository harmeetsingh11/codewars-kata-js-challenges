function isAnagram(str1, str2) {
  // Convert both strings to lowercase, split into characters, sort them, and join back into strings
  const normalize = (str) => str.toLowerCase().split('').sort().join('');

  // Compare the normalized versions of both strings
  return normalize(str1) === normalize(str2);
}

// Explanation:

// 1. Normalize the Strings:
// toLowerCase(): This makes the comparison case-insensitive.
// split(''): Breaks the string into an array of characters.
// sort(): Sorts the characters in alphabetical order.
// join(''): Joins the sorted characters back into a string.

// 2. Comparison:
// We compare the normalized versions of both strings. If they are identical after sorting, then they are anagrams.

// 3. Time Complexity
// This approach is efficient and clear. Sorting both strings takes O(n log n) time, which is appropriate for this kind of problem.
