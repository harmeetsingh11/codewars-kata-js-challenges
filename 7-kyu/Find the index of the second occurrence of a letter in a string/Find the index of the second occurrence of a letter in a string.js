function secondOccurrenceIndex(str, letter) {
  // Initialize a variable to keep track of occurrences
  let count = 0;

  // Loop through the string
  for (let i = 0; i < str.length; i++) {
    // If the current character matches the letter
    if (str[i] === letter) {
      count++; // Increment the count
      // If it's the second occurrence, return the current index
      if (count === 2) return i;
    }
  }

  // If the loop completes and no second occurrence is found, return -1
  return -1;
}

console.log(secondOccurrenceIndex('Hello world!!!', 'l')); // Output: 3
console.log(secondOccurrenceIndex('Hello world!!!', 'A')); // Output: -1

/* 
Explanation:

Initialization:
A counter (count) is initialized to 0 to track occurrences of the letter.

Iterate Through the String:
Use a for loop to iterate over each character in the string.

Check for Match:
When the current character matches the letter, increment the count.

Check for Second Occurrence:
If count reaches 2, return the current index, as it's the index of the second occurrence.

Return -1 if No Match:
If the loop completes without finding a second occurrence, return -1.

Efficiency:
Time Complexity: 
O(n), where n is the length of the string, as we iterate through the string once.

Space Complexity: 
O(1), as no additional space is used except for a few variables.
*/
