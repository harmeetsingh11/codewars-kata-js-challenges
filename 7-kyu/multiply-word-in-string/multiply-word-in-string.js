function modifyMultiply(str, index, multiplier) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Get the word at the specified index
  const targetWord = words[index];

  // Repeat the target word 'multiplier' times with a hyphen in between
  return Array(multiplier).fill(targetWord).join('-');
}

console.log(modifyMultiply('This is a string', 3, 5)); // Output: "string-string-string-string-string"

/* 
Explanation:

Splitting the String:
str.split(" ") converts the string into an array of words, splitting it by spaces.
Example: "This is a string" → ["This", "is", "a", "string"].

Getting the Target Word:
Access the word at the specified index using words[index].
Example: If index = 3, the target word is "string".

Repeating the Word:
Use Array(multiplier).fill(targetWord) to create an array filled with the target word repeated multiplier times.
Example: If multiplier = 5, this generates ["string", "string", "string", "string", "string"].

Joining with a Hyphen:
Combine the repeated words into a single string with a hyphen-using .join("-").
*/
