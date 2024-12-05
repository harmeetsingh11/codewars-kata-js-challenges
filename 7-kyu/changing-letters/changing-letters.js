function capitalizeVowels(str) {
  // Replace all vowels (a, e, i, o, u) in the string with their uppercase versions
  return str.replace(/[aeiou]/g, (char) => char.toUpperCase());
}

/* 
Explanation:

Regex for vowels:
The regular expression /[aeiou]/g matches any lowercase vowel (a, e, i, o, u) in the string globally (i.e., all occurrences).

Callback in replace:
The replace method replaces each matched character with its uppercase version using the toUpperCase() function.

Example Execution:
For the input "Hello World!", it finds the vowels e, o, and o and replaces them with E, O, and O, respectively, resulting in "HEllO WOrld!".
*/
