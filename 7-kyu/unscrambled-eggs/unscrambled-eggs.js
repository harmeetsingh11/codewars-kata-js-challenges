function unscrambleEggs(str) {
  // Use a regular expression to match consonants followed by "egg" and replace them with the consonant only.
  return str.replace(/([bcdfghjklmnpqrstvwxyz])egg/gi, '$1');
}

console.log(unscrambleEggs('Beggegeggineggneggeregg')); // Output: "Beginner"

/* 
Explanation:

Regular Expression: /([bcdfghjklmnpqrstvwxyz])egg/gi
([bcdfghjklmnpqrstvwxyz]): This captures any consonant (both uppercase and lowercase because of the i flag).
egg: Matches the string "egg" right after a consonant.
gi: Global (g) and case-insensitive (i) flags are used to match all occurrences regardless of case.

.replace() method:
The replace() function takes the matched pattern and replaces it with just the consonant (using $1 to refer to the first capture group, which is the consonant).
*/
