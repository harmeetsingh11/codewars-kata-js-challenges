function findOddNames(list) {
  return list.filter((dev) => {
    // Calculate the sum of ASCII values of the characters in the firstName
    const asciiSum = dev.firstName
      .split('')
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    // Check if the sum is odd, and include the developer if true
    return asciiSum % 2 !== 0;
  });
}

// Example:
const list1 = [
  {
    firstName: 'Aba',
    lastName: 'N.',
    country: 'Ghana',
    continent: 'Africa',
    age: 21,
    language: 'Python',
  },
  {
    firstName: 'Abb',
    lastName: 'O.',
    country: 'Israel',
    continent: 'Asia',
    age: 39,
    language: 'Java',
  },
];

console.log(findOddNames(list1));
// Output:
// [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]

/* 
Explanation:

filter Method:
The filter method is used to iterate over the array and include only those objects that satisfy a given condition.

split and reduce:
Each firstName is split into individual characters using split('').
The reduce method is then used to calculate the sum of ASCII values of these characters.
char.charCodeAt(0) gives the ASCII value of the character.
The sum is accumulated with an initial value of 0.

Odd Check:
The condition asciiSum % 2 !== 0 checks if the sum of ASCII values is odd. Only developers with odd sums are included in the result.

Return:
The filter method returns a new array with developers meeting the criteria, preserving the order.
*/
