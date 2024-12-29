function gordonLanguage(sentence) {
  // Split the input string into words
  return sentence
    .toUpperCase() // Convert entire string to uppercase
    .split(' ') // Split the string into an array of words
    .map(
      (word) =>
        word.replace(/[AEIOU]/g, (match) => (match === 'A' ? '@' : '*')) + // Replace vowels as per the rules
        '!!!!' // Add '!!!!' to the end of each word
    )
    .join(' '); // Join the transformed words back into a single string
}

// Example
console.log(gordonLanguage('What are you doing'));
// Output: "WH@T!!!! @R@!!!! Y**!!!! D**NG!!!!"

/* 
Explanation:

toUpperCase(): Converts the string to uppercase to standardize it for processing.

split(' '): Splits the string into an array of words based on spaces.

map(word => ...): Loops over each word to transform it:
replace(/[AEIOU]/g, match => ...):
Matches all vowels using a regular expression ([AEIOU]).
Replaces 'A' with '@' and other vowels with '*' using a ternary operator.

+ '!!!!': Appends '!!!!' to the end of each word.

join(' '): Combines the transformed words back into a single string with spaces.
*/
