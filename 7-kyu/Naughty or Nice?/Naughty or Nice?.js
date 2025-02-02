// Function to get the names of nice people
const getNiceNames = (people) =>
  people.filter((p) => p.wasNice).map((p) => p.name);

// Function to get the names of naughty people
const getNaughtyNames = (people) =>
  people.filter((p) => !p.wasNice).map((p) => p.name);

// Test Cases
console.log(
  getNiceNames([
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true },
  ])
); // Output: ['Warrior reading this kata', 'Santa']

console.log(
  getNaughtyNames([
    { name: 'Warrior reading this kata', wasNice: true },
    { name: 'xDranik', wasNice: false },
    { name: 'Santa', wasNice: true },
  ])
); // Output: ['xDranik']

/* 
Explanation:
filter(): Filters the array based on the wasNice property (true for nice people, false for naughty).
map(): Extracts only the name property from the filtered results.
Concise Arrow Function: The one-liner function keeps it clean and efficient.
*/
