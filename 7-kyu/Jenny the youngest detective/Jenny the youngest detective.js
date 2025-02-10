const missingWord = (nums, str) => {
  // Step 1: Remove spaces from the string, convert to lowercase, and split into an array of characters.
  const arr = str.replace(/ /g, '').toLowerCase().split('');

  // Step 2: Check if the largest index in the 'nums' array exceeds the length of the character array.
  // If it does, return "No mission today" as one or more indices are out of bounds.
  if (Math.max(...nums) > arr.length) return 'No mission today';

  // Step 3: Sort the 'nums' array in ascending order to ensure we access characters in the correct order.
  // Then, use 'map' to retrieve the characters from 'arr' based on the indices in 'nums' and join them into a string.
  return nums
    .sort((a, b) => a - b)
    .map((cur) => arr[cur])
    .join('');
};

/*

Explanation:

1. **Remove spaces and process the string**:  
   - `str.replace(/ /g, '')`: This uses a regular expression to remove all spaces from the input string. The `g` flag ensures it removes all spaces, not just the first one.
   - `.toLowerCase()`: Converts the string to lowercase so that the returned word is in lowercase letters.
   - `.split('')`: Splits the string into an array of individual characters, which makes it easy to access letters by index.

2. **Check if indices are valid**:  
   - `Math.max(...nums)`: This finds the largest number in the `nums` array using the spread syntax (`...`). This represents the maximum index we're trying to access in the character array.
   - `arr.length`: This is the length of the character array we created after removing spaces and converting to lowercase. If the largest index in `nums` is greater than or equal to the length of this array, we know that at least one of the indices is out of bounds.
   - `if (Math.max(...nums) > arr.length) return 'No mission today';`: If the largest index is too large, the function returns `"No mission today"` to indicate that the mission cannot be completed due to invalid indices.

3. **Sort the indices and retrieve the corresponding letters**:  
   - `nums.sort((a, b) => a - b)`: This sorts the `nums` array in ascending order. Sorting ensures that the letters we retrieve will be in the correct order (from smallest to largest index).
   - `.map(cur => arr[cur])`: This maps over the sorted `nums` array, retrieving the letter at each index (`cur`) from the `arr` array.
   - `.join('')`: After gathering the characters, the `join('')` method combines them into a single string.
*/

/*
Example:
For the input:
```javascript
missingWord([5, 0, 3], "I Love You")
```
The steps would be:
- `arr` would become `['i', 'l', 'o', 'v', 'e', 'y', 'o', 'u']` (after removing spaces and converting to lowercase).
- The largest index in `[5, 0, 3]` is `5`, and it is valid because it is within the length of the array.
- The sorted indices are `[0, 3, 5]`, so we retrieve the letters at those positions: `['i', 'v', 'y']`.
- These letters are joined to form the word `"ivy"`.

Output:
```javascript
"ivy"
``` 

If the indices were out of bounds, the function would return `"No mission today"`.
*/
