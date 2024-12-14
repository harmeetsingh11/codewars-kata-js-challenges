function fireFight(s) {
  // Use the replaceAll method to replace all occurrences of "Fire" with "~~"
  return s.replaceAll('Fire', '~~');
}

// Example
const input = 'Boat Fire Fire Engine Paddle Fire';
const output = fireFight(input);
console.log(output); // Output: "Boat ~~ ~~ Engine Paddle ~~"

/*
  Explanation:
  1. `replaceAll` is a built-in JavaScript method that replaces all occurrences of a substring in a string.
  2. We pass "Fire" as the substring to be replaced and "~~" as the replacement.
  3. This method is efficient for string manipulations and ensures all occurrences are replaced in one go.
  */
