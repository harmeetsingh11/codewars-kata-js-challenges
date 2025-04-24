function decodeString(str) {
  // Initialize an array of 26 zeros for each letter a-z
  const counts = Array(26).fill(0);

  // Loop through the input string
  for (let char of str) {
    // Check if the character is a lowercase letter
    if (char >= 'a' && char <= 'z') {
      // Increment the count at the corresponding index (0 for 'a', 25 for 'z')
      counts[char.charCodeAt(0) - 97]++;
    }
  }

  // Join the counts into a single string and return
  return counts.join('');
}

console.log(decodeString('$aaaa#bbb*cc^fff!z')); // '43200300000000000000000001'
console.log(decodeString('z$aaa#ccc%eee1234567890')); // '30303000000000000000000001'

/*
### Explanation:
- `Array(26).fill(0)`: Creates an array to track each letter's count from `'a'` to `'z'`.
- `char.charCodeAt(0) - 97`: Finds the correct index by converting the character to its ASCII value and subtracting `'a'`'s ASCII (97).
- Only lowercase letters are considered, so it ignores numbers, symbols, and uppercase letters.
- Final result is a 26-character string representing letter frequencies.
*/
