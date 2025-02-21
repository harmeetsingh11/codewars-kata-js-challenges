function countRepeatingSections(sentence) {
  // Split sentence into words and normalize to lowercase
  const words = sentence.toLowerCase().split(' ');

  let count = 0;
  let i = 0;

  // Iterate through words and count sections of consecutive duplicates
  while (i < words.length - 1) {
    if (words[i] === words[i + 1]) {
      count++; // Found a duplicate section
      while (i < words.length - 1 && words[i] === words[i + 1]) {
        i++; // Skip all duplicates in this section
      }
    }
    i++; // Move to the next word
  }

  return count;
}

// Test cases
console.log(countRepeatingSections('dog cat')); // 0
console.log(countRepeatingSections('dog DOG cat')); // 1
console.log(countRepeatingSections('apple dog cat')); // 0
console.log(countRepeatingSections('pineapple apple dog cat')); // 0
console.log(countRepeatingSections('apple apple dog cat')); // 1
console.log(countRepeatingSections('apple dog apple dog cat')); // 0
console.log(countRepeatingSections('dog dog DOG dog dog dog')); // 1
console.log(countRepeatingSections('dog dog dog dog cat cat')); // 2
console.log(countRepeatingSections('cat cat dog dog cat cat')); // 3

/* 
### Explanation:
1. Convert the sentence to lowercase to ensure case insensitivity.
2. Split the sentence into words using spaces.
3. Use a `while` loop to iterate through the words.
4. When a word is found repeating consecutively, increment the count and skip over all occurrences of that word.
5. Continue until the end of the sentence.
6. Return the total count of repeated sections.

This approach is efficient with **O(n) time complexity**, ensuring optimal performance.
*/
