function orArrays(arr1, arr2, defaultVal = 0) {
  // Determine the maximum length between the two arrays
  const maxLength = Math.max(arr1.length, arr2.length);

  // Map over a new array of maxLength, using bitwise OR on matching indices
  return Array.from(
    { length: maxLength },
    (_, i) => (arr1[i] ?? defaultVal) | (arr2[i] ?? defaultVal)
  );
}

console.log(orArrays([1, 2, 3], [1, 2, 3])); // [1, 2, 3]
console.log(orArrays([1, 2, 3], [4, 5, 6])); // [5, 7, 7]
console.log(orArrays([1, 2, 3], [1, 2])); // [1, 2, 3]
console.log(orArrays([1, 2], [1, 2, 3])); // [1, 2, 3]
console.log(orArrays([1, 2, 3], [1, 2, 3], 3)); // [1, 2, 3]

/*
### Explanation:
- `defaultVal = 0`: sets the default fallback value.
- `Math.max(...)`: ensures we iterate over the longer array.
- `Array.from({ length }, (_, i) => ...)`: creates an array of the correct size and iterates using the index.
- `arr[i] ?? defaultVal`: safely fetches array value or uses `defaultVal` if `undefined`.
- `|`: bitwise OR between values.
*/
