function capitalizeSentences(paragraph) {
  return paragraph
    .split('. ') // Split the paragraph into sentences based on ". "
    .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1)) // Capitalize the first letter of each sentence
    .join('. '); // Join the sentences back together with ". "
}

const input =
  'hello. my name is inigo montoya. you killed my father. prepare to die.';
const output = capitalizeSentences(input);
console.log(output); // "Hello. My name is inigo montoya. You killed my father. Prepare to die."

/*
### Explanation:
1. **Splitting the paragraph:**  
   - `.split('. ')` breaks the paragraph into an array of sentences using `. ` as a delimiter.
   
2. **Capitalizing each sentence:**  
   - `.map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))`  
     - `sentence.charAt(0).toUpperCase()` gets the first character and capitalizes it.  
     - `sentence.slice(1)` keeps the rest of the sentence unchanged.  
     - Concatenating these two parts gives a capitalized sentence.

3. **Joining the sentences back together:**  
   - `.join('. ')` reconstructs the paragraph by adding `. ` between sentences.

This approach ensures **efficiency** (O(n) time complexity), **conciseness**, and **clarity** while solving the problem effectively.
*/
