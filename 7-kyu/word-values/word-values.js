function stringValues(strings) {
  // Map over the array of strings with index
  return strings.map((str, index) => {
    // Calculate the sum of values for each string, ignoring spaces
    const value = [...str].reduce((sum, char) => {
      return sum + (char !== ' ' ? char.charCodeAt(0) - 96 : 0);
    }, 0);
    // Multiply the value by the position (index + 1)
    return value * (index + 1);
  });
}

// Example
console.log(stringValues(['abc', 'abc abc'])); // Output: [6, 24]

/* 
Explanation

Mapping Over Strings:
We use map to iterate over each string in the list along with its index. The index is used to determine the position of the string (starting at 1).

Calculating String Value:
For each string, we use the reduce method on the array of characters ([...str]) to compute the sum of their alphabet positions.
char.charCodeAt(0) - 96 gives the position of the character in the alphabet (a = 1, b = 2, ..., z = 26).
Spaces are ignored using a conditional check: (char !== ' ').

Multiplying by Position:
The calculated string value is multiplied by (index + 1) to account for its position in the list.

Returning the Result:
The map function returns a new array where each element corresponds to the processed value for the respective string.
*/
