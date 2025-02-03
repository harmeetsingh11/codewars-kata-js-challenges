function transformStrings(str1, str2) {
  // Helper function to reverse a string and invert its case
  const reverseInvertCase = (s) =>
    [...s]
      .reverse()
      // Iterate over each character, reverse order, and swap case
      .map((c) => (c >= 'a' && c <= 'z' ? c.toUpperCase() : c.toLowerCase()))
      .join('');

  // Reverse and invert case of str2
  const part1 = reverseInvertCase(str2);

  // Reverse and invert case of str1
  const reversedStr1 = reverseInvertCase(str1);

  // Mirror str1 by appending it with inverted case
  const part3 =
    reversedStr1 +
    [...str1]
      // Swap case of original str1 before appending
      .map((c) => (c >= 'a' && c <= 'z' ? c.toUpperCase() : c.toLowerCase()))
      .join('');

  // Concatenate with separator '@@@' and return the final result
  return `${part1}@@@${part3}`;
}

console.log(transformStrings('Water', 'Fish')); // Expected output: "HSIf@@@RETAwwATER"

/* 
## Explanation of `transformStrings` Function

### Overview
This function takes two string inputs (`str1` and `str2`), processes them by reversing their order, swapping their case, and concatenating them in a specific format.

### Steps Breakdown

#### Step 1: Define a Helper Function
```javascript
const reverseInvertCase = s => [...s].reverse()
    .map(c => c >= 'a' && c <= 'z' ? c.toUpperCase() : c.toLowerCase())
    .join('');
```
- **Purpose**: This helper function reverses the input string and swaps the case of each character.
- **Implementation**:
  - `reverse()`: Reverses the order of characters.
  - `map()`: Iterates over characters, converting lowercase to uppercase and vice versa.
  - `join('')`: Converts the modified character array back into a string.

#### Step 2: Process `str2`
```javascript
const part1 = reverseInvertCase(str2);
```
- **Reverses** `str2` and **inverts** its case.

#### Step 3: Process `str1`
```javascript
const reversedStr1 = reverseInvertCase(str1);
```
- **Reverses** `str1` and **inverts** its case.

#### Step 4: Create a Mirrored Version of `str1`
```javascript
const part3 = reversedStr1 + [...str1]
    .map(c => c >= 'a' && c <= 'z' ? c.toUpperCase() : c.toLowerCase())
    .join('');
```
- **Appends** `str1` but with **inverted** case to the reversed version.

#### Step 5: Concatenate the Parts
```javascript
return `${part1}@@@${part3}`;
```
- Joins `part1`, `part3`, and the separator `@@@` into the final output.

### Example Execution
```javascript
console.log(transformStrings("Water", "Fish")); // Expected output: "HSIf@@@RETAwwATER"
```

- `Fish` → reversed to `hsiF` → case swapped → `HSIf`
- `Water` → reversed to `retaW` → case swapped → `RETAw`
- Mirrored `Water`: `RETAwwATER`
- Final output: `HSIf@@@RETAwwATER`
*/
