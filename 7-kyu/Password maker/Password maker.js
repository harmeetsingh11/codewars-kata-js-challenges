function generatePassword(phrase) {
  // Extract the first letter of each word and join them into a string
  let password = phrase
    .split(' ') // Split phrase into words
    .map((word) => word[0]) // Extract the first letter of each word
    .join(''); // Combine letters into a string

  // Replace specific letters with corresponding numbers
  return password
    .replace(/[iI]/g, '1') // Replace 'i' or 'I' with '1'
    .replace(/[oO]/g, '0') // Replace 'o' or 'O' with '0'
    .replace(/[sS]/g, '5'); // Replace 's' or 'S' with '5'
}

console.log(generatePassword('Give me liberty or give me death')); // Output: "Gml0gmd"
console.log(generatePassword('Keep Calm and Carry On')); // Output: "KCaC0"

/* 
Explanation:

Extract First Letters:
The phrase is split into words using split(' ').
The first letter of each word is extracted using map(word => word[0]).
The extracted letters are combined into a string using join('').

Replace Letters with Numbers:
A series of replace methods is used with regular expressions to replace specific letters (i, I, o, O, s, S) with their corresponding numbers (1, 0, 5).
The g flag ensures all occurrences of the letters in the string are replaced.

Output:
The modified string is returned as the password.
*/
