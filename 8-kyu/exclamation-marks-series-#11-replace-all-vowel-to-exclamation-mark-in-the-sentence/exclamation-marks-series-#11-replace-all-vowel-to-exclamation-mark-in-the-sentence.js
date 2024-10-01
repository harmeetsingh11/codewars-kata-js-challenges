function replace(s) {
  // Define a regular expression to match all vowels (both lowercase and uppercase)
  return s.replace(/[aeiouAEIOU]/g, '!'); // Replace all matches with '!'
}

//   Explanation of the Regular Expression:
//   - The regular expression is enclosed in slashes: /.../
//   - Inside the slashes, we have:
//     [aeiouAEIOU]     // This is a character set that matches any single character listed inside the brackets:
// - 'a', 'e', 'i', 'o', 'u' (lowercase vowels)
// - 'A', 'E', 'I', 'O', 'U' (uppercase vowels)

//   - The 'g' flag at the end of the regex:
//     g - This is a global flag that tells the replace function to find all matches in the string instead of stopping after the first match.

//   Overall, this regex efficiently matches any vowel in the input string, allowing the replace function to substitute each vowel with an exclamation mark '!'.
