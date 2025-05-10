function encode(str) {
  return str
    .split('')
    .map((char) => {
      const code = char.toLowerCase().charCodeAt(0); // get ASCII code of lowercase character
      if (code >= 97 && code <= 122) {
        // check if it's a-z
        return (code - 97) % 2 === 0 ? '0' : '1'; // even index -> 0, odd index -> 1
      }
      return char; // non-letter characters remain the same
    })
    .join('');
}

console.log(encode('Hello World!')); // Output: "10110 00111!"

/*
### Explanation:

* `.split('')` splits the string into individual characters.
* `.map(...)` transforms each character based on the cipher logic.
* `char.toLowerCase().charCodeAt(0)` ensures we work in a case-insensitive manner and gets the ASCII code.
* `'a'.charCodeAt(0)` is 97, so we subtract 97 to get the 0-based index.
* Even index → `0`, Odd index → `1`.
* Non-alphabet characters (e.g., space, punctuation) are returned unchanged.
* `.join('')` recombines the processed characters into a final string.
*/
