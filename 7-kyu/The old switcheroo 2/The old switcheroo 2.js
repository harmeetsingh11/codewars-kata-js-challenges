function alphabetPosition(str) {
  return str.replace(
    /[a-z]/gi,
    (char) => char.toLowerCase().charCodeAt(0) - 96
  );
}

// Test cases
console.log(alphabetPosition('abc')); // '123'
console.log(alphabetPosition('ABC')); // '123'
console.log(alphabetPosition('codewars')); // '315452311819'
console.log(alphabetPosition('abc-#@5')); // '123-#@5'

/* 
Explanation:

Use replace with a regex
The regex /[a-z]/gi matches all alphabetic characters (both uppercase and lowercase).

Convert each letter to its position in the alphabet
char.toLowerCase().charCodeAt(0) - 96
charCodeAt(0) gives the ASCII code of the character.
'a' has an ASCII code of 97, so subtracting 96 gives 1, 'b' is 2, and so on.

Non-alphabet characters remain unchanged
Since replace only operates on matched letters, all other characters (-#@5, etc.) remain unchanged.

Why is this solution efficient?
Single pass over the string (O(n) complexity).
*/
