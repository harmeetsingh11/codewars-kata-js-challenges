function countOccurrences(fullText, searchText) {
  if (!searchText) return 0; // Handle edge case where searchText is empty
  let count = 0;
  let position = 0;

  // Loop through the fullText, searching for searchText
  while ((position = fullText.indexOf(searchText, position)) !== -1) {
    count++; // Increment count when a match is found
    position += searchText.length; // Move position by the length of searchText to avoid overlap
  }

  return count;
}

// Example
console.log(countOccurrences('aa_bb_cc_dd_bb_e', 'bb')); // Output: 2
console.log(countOccurrences('aaabbbcccc', 'bbb')); // Output: 1

/* 
Explanation:
Edge Case Handling: If searchText is empty, the function immediately returns 0 as there's nothing to search.
Initialization: Variables count and position are initialized to keep track of the number of occurrences and the current search position in fullText.
Search Loop: The while loop uses indexOf to find the next occurrence of searchText in fullText, starting from the current position.
Non-Overlapping Logic: After finding an occurrence, position is updated by adding the length of searchText to ensure the next search does not overlap.
Return Count: Once the loop ends, the total count of non-overlapping occurrences is returned.
*/
