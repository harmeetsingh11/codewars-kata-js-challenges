// Initialize an empty array
const websites = [];

// Use Array.fill to create an array with 1000 elements, all set to "codewars"
// Then, use push with the spread operator to add them to the websites array
websites.push(...Array(1000).fill('codewars'));

/* 
Explanation:

Initialization:
An empty array websites is created to hold the values.

Array.fill:
Array(1000).fill("codewars") creates an array with 1,000 elements, each set to "codewars". This is more efficient than using loops for repeated assignments.

Spread operator (...):
The spread operator is used with push to efficiently add all the elements of the generated array to the websites array.
*/
