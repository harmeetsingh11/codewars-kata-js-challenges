function orderedCount(text) {
  const counts = new Map(); // Use a Map to maintain order of first appearance

  // Loop through each character in the string
  for (const char of text) {
    // If character is already in the map, increment the count
    // Otherwise, add it to the map with an initial count of 1
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  // Convert the Map to an array of tuples and return
  return Array.from(counts);
}
