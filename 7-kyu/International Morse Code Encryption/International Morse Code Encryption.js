function encryptToMorse(sentence) {
  // Convert entire sentence to uppercase for consistent lookup
  return (
    sentence
      .toUpperCase()
      // Split sentence into words
      .split(' ')
      .map((word) =>
        // For each word, split into characters and map each to Morse code
        word
          .split('')
          .map((char) => CHAR_TO_MORSE[char])
          .join(' ')
      )
      // Join Morse-encoded words with three spaces
      .join('   ')
  );
}

// Suppose CHAR_TO_MORSE['H'] = '....', ['E'] = '.', etc.
encryptToMorse('HELLO WORLD');
// Output: ".... . .-.. .-.. ---   .-- --- .-. .-.. -.."

/*
### Explanation:
- `toUpperCase()` ensures case-insensitive matching with `CHAR_TO_MORSE`.
- `split(' ')` breaks the sentence into words.
- `map(...).join(' ')` converts each character in a word to Morse and joins them with a **single space**.
- `join('   ')` (three spaces) separates Morse-encoded words.
*/
