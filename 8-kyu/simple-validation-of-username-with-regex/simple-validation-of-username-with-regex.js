function validateUsername(username) {
  // Regex explanation:
  // ^        - start of the string
  // [a-z0-9_] - match any lowercase letter, digit, or underscore
  // {4,16}   - length should be between 4 and 16 characters
  // $        - end of the string
  const regex = /^[a-z0-9_]{4,16}$/;

  // Test if the username matches the regex pattern
  return regex.test(username);
}

/* 
Explanation of Code:

Regex Pattern:
^ and $: Ensure the pattern matches the entire string from start to end.
[a-z0-9_]: This character class allows lowercase letters (a-z), digits (0-9), and underscores (_).
{4,16}: Ensures the length of the username is between 4 and 16 characters, inclusive.

regex.test(username):
The test method checks if the username string matches the regex pattern and returns true or false accordingly.
*/
