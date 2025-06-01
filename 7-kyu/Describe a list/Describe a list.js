function describeList(list) {
  // Use the length property to determine the size of the list
  return list.length === 0
    ? 'empty' // If no elements, return "empty"
    : list.length === 1
    ? 'singleton' // If one element, return "singleton"
    : 'longer'; // Otherwise, it's longer
}

console.log(describeList([])); // "empty"
console.log(describeList([42])); // "singleton"
console.log(describeList([1, 2, 3])); // "longer"

/*
### Explanation:

- The function uses a **ternary operator** chain for brevity and readability.
- `list.length` is a constant-time operation (`O(1)`), making the solution very efficient.
- Covers all cases:

  * `length === 0` → "empty"
  * `length === 1` → "singleton"
  * `length > 1` → "longer"
*/
