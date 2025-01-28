function createMessage(initialWord) {
  // Array to store all received words
  const words = [initialWord];

  // Function that handles chaining and returning results
  function addWord(nextWord) {
    if (nextWord === undefined) {
      // Return the concatenated string if no argument is provided
      return words.join(' ');
    }
    words.push(nextWord); // Add the new word to the list
    return addWord; // Return the same function for chaining
  }

  return addWord; // Return the handler function
}

console.log(createMessage('Hello')('World!')('how')('are')('you?')()); // "Hello World! how are you?"

/* 
Step-by-Step Solution

Step 1: Maintain State
To track the collected words, we need a storage mechanism. I used an array words, which stores each word passed to the function.
const words = [initialWord];
This array is initialized with the first word provided (initialWord).
It remains accessible across all chained calls because of closure.

Step 2: Function Chaining
To enable chaining, the function must:
Add the received word to the words array.
Return itself, so the next call operates on the same state.
words.push(nextWord); // Add the word to the list
return addWord; // Return the function itself for chaining
This ensures that every time you call the function with a word, it updates the state and remains ready for another call.

Step 3: Handle No Argument
When the function is called without an argument (()), it should recognize that nextWord is undefined and return the result.
if (nextWord === undefined) {
  return words.join(" "); // Join all words with spaces and return
}
This conditional behavior ensures that the chain terminates gracefully and outputs the final string.

Step 4: Return the Function
Finally, we return the addWord function from createMessage so that the chaining can begin.
return addWord;
*/

/* 
Example Walkthrough

Initial Call: createMessage("Hello")
words = ["Hello"]
Returns addWord.

First Chained Call: .("World!")
Adds "World!" to words.
Returns addWord.

Subsequent Chained Calls: .("how"), .("are"), .("you?")
Updates words with each new word.

Final Call: ()
No argument is passed, so it returns words.join(" "): "Hello World! how are you?".
*/
