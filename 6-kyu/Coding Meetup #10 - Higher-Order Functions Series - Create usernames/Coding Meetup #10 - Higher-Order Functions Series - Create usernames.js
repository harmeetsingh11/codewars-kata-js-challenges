// Function to add the username property to each object in the input array
function addUsername(list) {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Use the map method to iterate through each object and add the username
  return list.map((person) => {
    // Calculate the birth year
    const birthYear = currentYear - person.age;

    // Construct the username
    const username = `${person.firstName.toLowerCase()}${person.lastName[0].toLowerCase()}${birthYear}`;

    // Return a new object with the username property added
    return { ...person, username };
  });
}

// Test the function with the input array
var list1 = [
  {
    firstName: 'Emily',
    lastName: 'N.',
    country: 'Ireland',
    continent: 'Europe',
    age: 30,
    language: 'Ruby',
  },
  {
    firstName: 'Nor',
    lastName: 'E.',
    country: 'Malaysia',
    continent: 'Asia',
    age: 20,
    language: 'Clojure',
  },
];

console.log(addUsername(list1));
// Output: [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', username: 'emilyn1990' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', username: 'nore2000' }
// ]

/*  
Explanation:

Get the current year:
Using new Date().getFullYear() ensures the function calculates the correct year dynamically, regardless of when it is executed.

Iterate through the array:
The map method is used to iterate over the input array and transform each object by adding the username property.

Calculate birth year:
The birthYear is calculated by subtracting the person's age from the currentYear.

Construct username:
The firstName is converted to lowercase using .toLowerCase().
The first letter of the lastName is accessed and converted to lowercase with person.lastName[0].toLowerCase().
The birthYear is appended to form the username.

Return a new object:
Using the spread operator { ...person, username }, a new object is created with all original properties plus the username.

Result:
The function returns a new array with each object including the username property.
*/
