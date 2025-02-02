function compare(a, b) {
  // Create an array with possible results: "greater", "equal", "smaller"
  const result = [' is smaller than ', ' is equal to ', ' is greater than '];

  // Return the appropriate comparison string based on the result of a - b
  return `${a}${result[Math.sign(a - b) + 1]}${b}`;
}

console.log(compare(5, 4)); // "5 is greater than 4"
console.log(compare(-4, -7)); // "-4 is greater than -7"
console.log(compare(2, 2)); // "2 is equal to 2"

/* 
Explanation:

- `Math.sign(a - b)` gives us one of three possible values:
  - `1` if `a > b` (i.e., "greater than")
  - `0` if `a == b` (i.e., "equal to")
  - `-1` if `a < b` (i.e., "smaller than")

  - We map these values to an array of comparison strings, and use the result to build the final string, which is then returned.
*/
