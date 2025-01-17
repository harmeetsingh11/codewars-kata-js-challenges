function trim(str, maxLength) {
  // If the string length is less than or equal to the maxLength, return the string as is
  if (str.length <= maxLength) {
    return str;
  }

  // If maxLength is less than or equal to 3, we add "..." only if necessary
  if (maxLength <= 3) {
    return str.slice(0, maxLength) + '...';
  }

  // Otherwise, trim the string to (maxLength - 3) and append "..."
  return str.slice(0, maxLength - 3) + '...';
}

console.log(trim('Creating kata is fun', 14)); // Output: "Creating ka..."
console.log(trim('Code Wars is pretty rad', 50)); // Output: "Code Wars is pretty rad"
console.log(trim('Hey', 3)); // Output: "Hey"
console.log(trim('He', 1)); // Output: "H..."

/* 
Explanation:

Short Length Case (maxLength <= 3):
If the maximum length requested is 3 or less, we always add "..." to the trimmed string regardless of the maximum length since the dots themselves take up the entire space.
str.slice(0, maxLength) ensures we take only the allowed characters, followed by "...".

String Length Comparison:
If the input string length is less than or equal to the maximum allowed length, there's no need to trim. We simply return the string as is.

Trimming Logic:
If the string needs to be trimmed, we take the first maxLength - 3 characters (to account for the "..."), append "...", and return the result.
*/
