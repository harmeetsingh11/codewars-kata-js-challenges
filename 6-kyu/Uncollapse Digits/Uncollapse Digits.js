function splitDigits(str) {
  // List of English digit words
  const digits = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  // Create a regex pattern to match any of the digit words
  const pattern = new RegExp(digits.join('|'), 'g');

  // Match all occurrences of digit words and join them with a space
  return str.match(pattern).join(' ');
}

// Test cases
console.log(splitDigits('three')); // "three"
console.log(splitDigits('eightsix')); // "eight six"
console.log(splitDigits('fivefourseven')); // "five four seven"
console.log(splitDigits('ninethreesixthree')); // "nine three six three"
console.log(splitDigits('fivethreefivesixthreenineonesevenoneeight'));
// "five three five six three nine one seven one eight"

/*
### **Explanation:**
1. **List of digit words:** 
   - We create an array `digits` containing all the English digit words from `zero` to `nine`.
2. **Regex pattern creation:** 
   - We use `digits.join('|')` to create a regex pattern like:
     ```
     /zero|one|two|three|four|five|six|seven|eight|nine/g
     ```
   - The `g` flag ensures it matches all occurrences, not just the first.
3. **Matching and joining:**
   - `str.match(pattern)` finds all occurrences of digit words in the string.
   - `.join(' ')` combines them into a single string separated by spaces.
*/
