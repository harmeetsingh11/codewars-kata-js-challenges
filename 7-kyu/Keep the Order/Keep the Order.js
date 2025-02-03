function colourAssociation(array) {
  return array.map(([color, association]) => ({ [color]: association }));
}

var array = [
  ['white', 'goodness'],
  ['black', 'evil'],
  ['red', 'passion'],
];
console.log(colourAssociation(array));
// Output: [{ white: 'goodness' }, { black: 'evil' }, { red: 'passion' }]

/* 
Explanation:

The map function iterates over each element of the array, which contains sub-arrays with two elements: the color and its association.

For each sub-array, we destructure it into color and association variables.

We then return a new object where the color is the key and the association is the value using computed property syntax: { [color]: association }.

The result is an array of objects, each containing a color and its corresponding association.
*/
