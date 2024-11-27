function toFreud(string) {
  // If the input string is empty, return an empty string
  if (!string) return '';

  // Split the string into words, map each word to 'sex', and join them back
  return string
    .split(' ')
    .map(() => 'sex')
    .join(' ');
}

// Example usage:
console.log(toFreud('This is a test')); // Output: "sex sex sex sex"
console.log(toFreud('')); // Output: ""
console.log(toFreud()); // Output: ""

/* 
Explanation:

Empty Input Check:
if (!string) checks for falsy values like an empty string or undefined. If the input is falsy, the function immediately returns an empty string.

Transform the String:
string.split(" ") splits the input string into an array of words.
.map(() => "sex") replaces each word with the string "sex".
.join(" ") joins the transformed words back into a single string with spaces in between.
*/
