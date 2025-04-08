function removeSpecialCharacters(input) {
  // Check if input is a string
  if (typeof input !== 'string') return 'Not a string!';

  // Use regex to match and retain only A-Z, a-z, 0-9, and whitespace
  return input.replace(/[^a-zA-Z0-9\s]/g, '');
}

removeSpecialCharacters('Hello, Captain! #1 @Sea.');
// Output: "Hello Captain 1 Sea"

/*
### Explanation:
- `typeof input !== 'string'`: Validates the input is of type string. If not, returns an error message.
- `input.replace(/[^a-zA-Z0-9\s]/g, '')`:  
  - `[^...]`: Negates the character set, i.e., matches anything *not* in the brackets.
  - `a-zA-Z0-9`: Matches all letters and digits.
  - `\s`: Matches all whitespace characters (space, tab, newline, etc.).
  - The `g` flag ensures all matches in the string are replaced (global match).
- `''`: We replace all unwanted characters with an empty string (i.e., remove them).
*/
