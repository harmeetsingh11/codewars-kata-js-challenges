// SOLUTION 1: String Replacement with a Capturing Group
function solution(string) {
   // Explanation of the regular expression and replacement:
  // - /([A-Z])/g is a regular expression pattern that matches any uppercase letter (A-Z).
  // - [A-Z] matches any single uppercase letter.
  // - The parentheses () around [A-Z] create a capturing group, which allows us to refer to the matched uppercase letter later.

  // In the replacement string ` $1`:
  // - The `$1` refers to the content matched by the first capturing group (i.e., the uppercase letter).
  // - The space before `$1` is the space that will be inserted before the matched uppercase letter.

  // The replace() method replaces all matches of the pattern with the replacement string,
  // effectively inserting a space before each uppercase letter in the string.
  return string.replace(/([A-Z])/g, ` $1`);
}

// SOLUTION 2: String Replacement with a Callback function
function solution(string) {
  // Another way to achieve the same result is by using a function in the replace() method.
  // The function takes the matched substring (the uppercase letter) as an argument and returns the desired replacement.
  // This approach is functionally equivalent to the previous one.
  return string.replace(/[A-Z]/g, (match) => ` ${match}`);
}
