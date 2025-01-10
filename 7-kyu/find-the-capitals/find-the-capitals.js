function capital(captialsArray) {
  // Map over each object in the input array
  return captialsArray.map((obj) => {
    // Destructure the keys, checking for state or country, and the capital
    const [regionType, regionName] = Object.entries(obj).find(
      ([key]) => key === 'state' || key === 'country'
    );
    // Construct the sentence based on the extracted keys and values
    return `The capital of ${regionName} is ${obj.capital}`;
  });
}

const stateCapitals = [{ state: 'Maine', capital: 'Augusta' }];
console.log(capital(stateCapitals)[0]); // "The capital of Maine is Augusta"

const countryCapitals = [{ country: 'Spain', capital: 'Madrid' }];
console.log(capital(countryCapitals)[0]); // "The capital of Spain is Madrid"

const mixedCapitals = [
  { state: 'Maine', capital: 'Augusta' },
  { country: 'Spain', capital: 'Madrid' },
];
console.log(capital(mixedCapitals)[1]); // "The capital of Spain is Madrid"

/* 
Explanation:

Mapping through the array:
map() is used to iterate over each object in the input array.

Destructuring keys:
Object.entries() converts the object into an array of key-value pairs.
find() searches for a key that matches either 'state' or 'country'.

Dynamic sentence construction:
The destructured key (regionType) and value (regionName) from the object are used to dynamically build the sentence.

Output:
The map() function returns an array of formatted sentences.
*/
