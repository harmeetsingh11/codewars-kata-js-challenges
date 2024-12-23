function findAdmin(list, language) {
  // Use the `filter` method to select developers based on criteria
  return list.filter(
    (dev) => dev.language === language && dev.githubAdmin === 'yes'
  );
}

// Test input
var list1 = [
  {
    firstName: 'Harry',
    lastName: 'K.',
    country: 'Brazil',
    continent: 'Americas',
    age: 22,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 49,
    language: 'Ruby',
    githubAdmin: 'no',
  },
  {
    firstName: 'Jing',
    lastName: 'X.',
    country: 'China',
    continent: 'Asia',
    age: 34,
    language: 'JavaScript',
    githubAdmin: 'yes',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'JavaScript',
    githubAdmin: 'no',
  },
];

// Example
console.log(findAdmin(list1, 'JavaScript'));

/* 
Explanation:

Input Validation Assumption:
The input array is assumed to be valid and formatted as described.

filter Method:
filter iterates over the array and selects elements that satisfy the provided condition.
The condition checks if the language matches the input language and githubAdmin is 'yes'.

Return Value:
filter returns a new array containing all elements that match the condition, preserving the original order.
*/
