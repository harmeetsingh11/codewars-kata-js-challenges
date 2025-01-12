// Define the Dictionary class
class Dictionary {
  constructor() {
    // Initialize an empty object to store key-value pairs
    this.entries = {};
  }

  // Method to add a new entry
  newEntry(word, definition) {
    // Add the word and its definition to the dictionary
    this.entries[word] = definition;
  }

  // Method to look up a word in the dictionary
  look(word) {
    // Check if the word exists in the dictionary
    // Return the definition if found, otherwise a default message
    return this.entries[word] || `Can't find entry for ${word}`;
  }
}

let d = new Dictionary();
d.newEntry('Apple', 'A fruit that grows on trees');
console.log(d.look('Apple')); // Output: "A fruit that grows on trees"
console.log(d.look('Banana')); // Output: "Can't find entry for Banana"

/* 
Explanation

constructor:
Initializes an empty object entries to store words and their definitions.

newEntry(word, definition):
Adds a new word and its definition as a key-value pair to the entries object.

look(word):
Uses a simple lookup (this.entries[word]) to find the definition of the word.
If the word is not found, it uses the logical OR (||) operator to return the default message.
*/
