function encryptThis(text) {
  // Split the text into individual words and map over each word
  return text
    .split(' ')
    .map((word) => {
      // Convert the first letter to ASCII code
      const ascii = word.charCodeAt(0);

      // If word has more than 2 characters, switch the second and last characters
      if (word.length > 2) {
        return ascii + word[word.length - 1] + word.slice(2, -1) + word[1];
      }
      // For words with 2 characters, just return ASCII and second character
      return ascii + (word[1] || '');
    })
    .join(' '); // Join the encrypted words with spaces
}

/* 
Explanation:

1. Splitting the text:

The input string is split into an array of words using .split(' ').
Mapping over words:
We use .map() to apply encryption rules to each word.
First letter conversion:
The first letter of each word is converted to its ASCII code using charCodeAt(0).

2. Handling words longer than 2 characters:

If the word length is greater than 2, the second letter is swapped with the last letter using string slicing.
For words with more than two letters, we construct the string by concatenating the ASCII code, the last letter, the middle portion of the word, and the second letter.

3. Handling short words:

If the word has only two letters, we simply return the ASCII code of the first letter followed by the second letter (or empty if it doesn't exist).

4. Joining the result:

Finally, the array of encrypted words is joined back into a single string using .join(' ').
*/

// SOLUTION 2: using regex

const encryptThis = (text) =>
  text
    // Step 1: Split the input text into an array of words based on spaces
    .split(' ')

    // Step 2: Apply the encryption logic to each word using .map()
    .map((word) =>
      word

        // Step 3: Use the .replace() method with a regular expression:
        // The regular expression `(^\w)(\w)(\w*)(\w$)` breaks down as:
        // - `(^\w)` captures the first character of the word (which will later be replaced by its ASCII code).
        // - `(\w)` captures the second character.
        // - `(\w*)` captures the middle part of the word (if any).
        // - `(\w$)` captures the last character of the word.
        //
        // The replacement `$1$4$3$2` rearranges the captured groups:
        // - `$1` is the first character (to be replaced later).
        // - `$4` is the last character of the word.
        // - `$3` is the middle part of the word.
        // - `$2` is the second character.
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)

        // Step 4: Replace the first character (now in position $1) with its ASCII code:
        // - `^\w` matches the first character of the word.
        // - `word.charCodeAt(0)` converts the first character of the word to its ASCII code.
        .replace(/^\w/, word.charCodeAt(0))
    )

    // Step 5: Join the array of encrypted words back into a single string, with spaces separating the words.
    .join(' ');
