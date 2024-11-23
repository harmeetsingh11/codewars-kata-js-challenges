function vaporwave(sentence) {
  // Convert the sentence to uppercase, split into characters, filter out spaces, and join with '  '
  return sentence
    .toUpperCase() // Convert all characters to uppercase
    .split('') // Split the string into individual characters
    .filter((char) => char !== ' ') // Remove spaces from the array, as spaces are not part of the vaporwave transformation.
    .join('  '); // Add 2 spaces between each character
}

// Examples
console.log(vaporwave('Lets go to the movies')); // "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
console.log(vaporwave("Why isn't my code working?")); // "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

/* 
This approach is efficient, with a time complexity of O(n), where n is the length of the input string, as it processes the string in a single pass through the methods.
*/
