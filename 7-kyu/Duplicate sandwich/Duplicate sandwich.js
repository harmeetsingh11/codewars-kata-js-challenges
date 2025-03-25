function duplicateSandwich(arr) {
  // Check if the input is a string and convert it to an array
  const isString = typeof arr === 'string';
  if (isString) arr = arr.split('');

  // Use a Map to track occurrences
  const seen = new Map();
  let first = -1,
    last = -1;

  // Find the first and last occurrence of the duplicate
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      first = seen.get(arr[i]);
      last = i;
      break; // Stop after finding the first pair
    }
    seen.set(arr[i], i);
  }

  // Extract the elements between the duplicates
  const result = first !== -1 ? arr.slice(first + 1, last) : [];

  // Return as a string if the input was a string, otherwise as an array
  return isString ? result.join('') : result;
}

// ✅ Test cases
console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8])); // [2, 3, 4, 5, 6]
console.log(
  duplicateSandwich(['None', 'Hello', 'Example', 'hello', 'None', 'Extra'])
); // ["Hello", "Example", "hello"]
console.log(duplicateSandwich([0, 0])); // []
console.log(duplicateSandwich([true, false, true])); // [false]
console.log(duplicateSandwich('example')); // "xampl"
console.log(duplicateSandwich('abcdefg')); // "" (no duplicates)
console.log(duplicateSandwich('algomalg')); // "lgm"

/*
### **Explanation:**
1. **String Conversion Handling:**
   - Check if the input is a string using `typeof arr === 'string'`.
   - Convert it to an array with `split('')` for consistent processing.

2. **Tracking Occurrences:**
   - Use a `Map` to track the first occurrence of each element.
   - When encountering a duplicate, store the first and last occurrence indices.

3. **Returning the Result:**
   - Slice the section between the duplicates.
   - If the original input was a string, return the result as a **string** using `join('')`.
   - Otherwise, return it as an **array**.

### **Efficiency:**
- **Time complexity:** \(O(n)\) → Iterates through the array once.
- **Space complexity:** \(O(n)\) → For storing the indices in the map.
*/
