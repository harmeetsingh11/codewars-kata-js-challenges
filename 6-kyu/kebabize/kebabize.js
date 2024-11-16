function kebabize(str) {
  // Remove digits from the string
  // Convert uppercase letters to lowercase and add a dash before them
  return str
    .replace(/\d+/g, '') // Remove digits
    .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`) // Add dashes before uppercase letters
    .replace(/^-/, '') // Remove leading dash if present (for strings like "CAMEL")
    .toLowerCase(); // Ensure the string is in lowercase
}
/* 
Explanation of Changes:

replace(/\d+/g, ''): Removes digits as before.

replace(/[A-Z]/g, match => -${match.toLowerCase()}): Adds dashes before uppercase letters and converts them to lowercase.

replace(/^-/,''): This removes the leading dash if it appears (e.g., in "CAMEL" → -c-a-m-e-l), ensuring that the first letter doesn’t get prefixed with a dash.

toLowerCase(): Ensures the entire string is in lowercase.

*/
