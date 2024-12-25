function nicknameGenerator(name) {
  // If the name is too short, return an error message
  if (name.length < 4) {
    return 'Error: Name too short';
  }

  // Define vowels for reference
  const vowels = 'aeiou';

  // Check if the third letter is a vowel
  const thirdLetter = name[2]; // Index 2 corresponds to the 3rd letter
  if (vowels.includes(thirdLetter)) {
    return name.slice(0, 4); // Return the first 4 letters if the 3rd letter is a vowel
  }

  // If the third letter is not a vowel, return the first 3 letters
  return name.slice(0, 3);
}

// Test cases
console.log(nicknameGenerator('Robert')); // Output: "Rob"
console.log(nicknameGenerator('Kimberly')); // Output: "Kim"
console.log(nicknameGenerator('Samantha')); // Output: "Sam"
console.log(nicknameGenerator('Jeannie')); // Output: "Jean"
console.log(nicknameGenerator('Douglas')); // Output: "Doug"
console.log(nicknameGenerator('Gregory')); // Output: "Greg"
console.log(nicknameGenerator('Sam')); // Output: "Error: Name too short"

/* 
Explanation

Validation: Check if the length of the string is less than 4. If true, return the error message as the nickname cannot be generated.

Vowel Check: Define vowels as a string "aeiou" for easy inclusion checking. Extract the third letter of the name and check if it exists in the vowels string.

Nickname Decision:
If the third letter is a vowel, return the first 4 letters using slice(0, 4).
Otherwise, return the first 3 letters using slice(0, 3).
*/
