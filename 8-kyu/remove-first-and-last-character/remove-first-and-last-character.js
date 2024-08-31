// SOLUTION 1: Using substring
// The substring method extracts characters from index 1 (second character)
// up to but not including the last character (str.length - 1).
function removeChar(str) {
  return str.substring(1, str.length - 1);
}

// SOLUTION 2: Using slice
// The slice method extracts a section of the string.
// The first parameter is the start index (1), and the second parameter is the end index (-1).
// Negative indices in slice start from the end of the string, so -1 refers to the last character.
function removeChar(str) {
  return str.slice(1, -1);
}
