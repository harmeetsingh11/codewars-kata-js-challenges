function reverseWordsPreserveLength(arr) {
  // Join the words into a single string and reverse it
  let reversedStr = arr.join('').split('').reverse().join('');

  let result = [];
  let index = 0;

  // Iterate over the original words to slice out the reversed segments
  for (let word of arr) {
    result.push(reversedStr.slice(index, index + word.length));
    index += word.length; // Move the index forward by the word's length
  }

  return result;
}

const input = ['I', 'like', 'big', 'butts', 'and', 'I', 'cannot', 'lie!'];
console.log(reverseWordsPreserveLength(input));

/* 
Explanation:
1. **Join and Reverse:**  
   - The array of strings is joined into a single string.
   - This string is reversed character by character.

2. **Reconstruct the Array:**  
   - Iterate over the original array to extract segments from the reversed string.
   - The extracted segments match the original word lengths.
   - Push the extracted segments into the result array.

3. **Return the Result:**  
   - The result array maintains the original structure with reversed content.

This approach ensures efficiency as it processes the input in **O(n)** time complexity, where **n** is the total number of characters.
*/
