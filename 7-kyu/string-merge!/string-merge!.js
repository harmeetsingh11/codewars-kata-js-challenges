function mergeWords(word1, word2, letter) {
  // Find the first occurrence of the letter in each word
  const index1 = word1.indexOf(letter);
  const index2 = word2.indexOf(letter);

  // Combine the part of word1 before the letter with the part of word2 from the letter onward
  return word1.slice(0, index1) + word2.slice(index2);
}

// Examples
console.log(mergeWords('hello', 'world', 'l')); // "held"
console.log(mergeWords('coding', 'anywhere', 'n')); // "codinywhere"

/* 
Explanation:

indexOf Method:
Finds the position of the first occurrence of the given letter in each word.
For example, in "hello", index1 = 2 for "l", and in "world", index2 = 2 for "l".

Combining Strings:
Use slice(0, index1) to extract the part of word1 before the given letter.
Use slice(index2) to extract the part of word2 from the given letter onward.
Concatenate the two extracted parts to form the result.
*/
