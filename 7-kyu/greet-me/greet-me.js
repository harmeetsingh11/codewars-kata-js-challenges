function greet(name) {
  // Capitalize the first letter, make the rest lowercase, and return the greeting string
  return `Hello ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}!`;
}

/* 
Explanation
charAt(0).toUpperCase():
Extracts the first character of the string and converts it to uppercase.
slice(1).toLowerCase():
Extracts the rest of the string starting from the second character and converts it to lowercase.
Template literal:
Combines the formatted name with the greeting and an exclamation mark for clarity and ease of readability.
*/
