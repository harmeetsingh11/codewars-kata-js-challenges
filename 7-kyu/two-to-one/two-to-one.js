// SOLUTION 1: using (...) rest operator
function longest(s1, s2) {
  // Combine both strings, convert to a set to remove duplicates, then convert back to an array
  return [...new Set(s1 + s2)] // [...] uses the spread operator to convert the Set back into an array of characters
    .sort() // Sort the array alphabetically
    .join(''); // Join the sorted array back into a string
}

// SOLUTION 2: using Array.from() to convert set to array
// Instead of using the spread operator, Array.from(new Set(s1 + s2)) converts the concatenated string into a Set to remove duplicates, and then directly turns the Set into an array using Array.from().
function longest(s1, s2) {
  // Create a set from the concatenated string to remove duplicates
  return Array.from(new Set(s1 + s2))
    .sort() // Sort the array alphabetically
    .join(''); // Join the sorted array back into a string
}
