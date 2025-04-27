function reorderSentence(sentence) {
  // Split the sentence into words
  const words = sentence.split(' ');

  // Find the index of the word starting with a capital letter
  const capitalIndex = words.findIndex((word) => /^[A-Z]/.test(word));

  // Remove the capitalized word from its position
  const [capitalWord] = words.splice(capitalIndex, 1);

  // Place the capitalized word at the start and join back into a sentence
  return [capitalWord, ...words].join(' ');
}

console.log(reorderSentence('ming Yao')); // "Yao ming"
console.log(reorderSentence('Mano donowana')); // "Mano donowana"
console.log(reorderSentence('wario LoBan hello')); // "LoBan wario hello"
console.log(reorderSentence('bull color pig Patrick')); // "Patrick bull color pig"

/*
### Quick breakdown:
- `split(' ')` → breaks the sentence into an array of words.
- `findIndex()` → efficiently finds the word starting with a capital letter (regex: `^[A-Z]`).
- `splice()` → removes that word from the array and returns it.
- `[capitalWord, ...words]` → moves the capital word to the start.
- `join(' ')` → reconstructs the sentence properly.
*/
