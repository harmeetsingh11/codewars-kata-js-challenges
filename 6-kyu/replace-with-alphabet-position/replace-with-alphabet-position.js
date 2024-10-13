function alphabetPosition(text) {
  // Convert the text to lowercase, split into characters, and filter out non-letter characters
  return text
    .toLowerCase() // Convert the entire text to lowercase
    .split('') // Split the string into an array of characters
    .filter((c) => c >= 'a' && c <= 'z') // Filter only alphabetic characters
    .map((c) => c.charCodeAt(0) - 96) // Map each letter to its position (a=1, b=2, ..., z=26)
    .join(' '); // Join the numbers with spaces
}
