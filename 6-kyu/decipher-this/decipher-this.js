function decipherMessage(message) {
  return message
    .split(' ') // Split the message into words
    .map((word) => {
      // Extract the character code from the start of the word
      let charCode = parseInt(word.match(/^\d+/)[0]);
      // Convert the character code to a character
      let firstChar = String.fromCharCode(charCode);
      // Extract the rest of the word after the character code
      let rest = word.slice(charCode.toString().length);

      // Swap the second and last letters if the word has enough length
      if (rest.length > 1) {
        rest = rest[rest.length - 1] + rest.slice(1, -1) + rest[0];
      }

      // Combine the deciphered parts
      return firstChar + rest;
    })
    .join(' '); // Join the deciphered words back into a sentence
}

console.log(decipherMessage('72olle 103doo 100ya')); // Output: "Hello good day"
console.log(decipherMessage('82yade 115te 103o')); // Output: "Ready set go"

/* 
Explanation:

Split Words: The input string is split into words using split(' ').

Extract and Convert Character Code:
Extract the numeric character code using a regex (^\d+).
Convert the extracted code to a character with String.fromCharCode.

Process the Rest of the Word:
Extract the part of the word after the character code using slice.
Swap the second and last characters if the word has more than one letter.

Reconstruct the Word: Combine the deciphered first character and the processed rest of the word.

Join Words Back: Combine the processed words into a final deciphered sentence.
*/
