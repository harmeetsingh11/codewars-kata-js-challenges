function splitString(str, size) {
  // Use a regular expression to match the string in chunks of 'size' length.
  return str.match(new RegExp(`.{1,${size}}`, 'g')).join(' ');
}

// Example
console.log(splitString('supercalifragilisticexpialidocious', 3));
// Output: "sup erc ali fra gil ist ice xpi ali doc iou s"

/* 
Explanation:

Regular Expression:
The new RegExp(\.{1,${size}}`, 'g')dynamically creates a regular expression that matches substrings of length up tosize`.
.{1,${size}} means "match 1 to size characters".
The g flag ensures the regex matches all occurrences in the string.

match Method:
str.match() splits the string into an array of substrings based on the regex.

Join with Space:
The join(' ') combines the array elements into a single string separated by spaces.
*/
