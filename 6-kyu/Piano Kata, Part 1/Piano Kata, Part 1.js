function blackOrWhiteKey(keyPressCount) {
  // Define the repeating pattern of black and white keys in an octave
  const pattern = [
    'white',
    'black',
    'white',
    'white',
    'black',
    'white',
    'black',
    'white',
    'white',
    'black',
    'white',
    'black',
  ];

  // Normalize the key press count to the range [1, 88] since the piano has 88 keys
  const normalizedKey = ((keyPressCount - 1) % 88) + 1;

  // Map the key number (1-88) to its corresponding position in the octave pattern
  const octaveIndex = (normalizedKey - 1) % 12;

  // Return the color of the key (black or white) based on the pattern
  return pattern[octaveIndex];
}

// Test cases
console.log(blackOrWhiteKey(1)); // "white"
console.log(blackOrWhiteKey(5)); // "black"
console.log(blackOrWhiteKey(12)); // "black"
console.log(blackOrWhiteKey(42)); // "white"
console.log(blackOrWhiteKey(88)); // "white"
console.log(blackOrWhiteKey(89)); // "white"
console.log(blackOrWhiteKey(92)); // "white"
console.log(blackOrWhiteKey(100)); // "black"
console.log(blackOrWhiteKey(111)); // "white"
console.log(blackOrWhiteKey(200)); // "black"
console.log(blackOrWhiteKey(2017)); // "white"

/* 
Explanation:

Pattern of Black and White Keys:
The pattern of black and white keys in a single octave is fixed:
["white", "black", "white", "white", "black", "white", "black", "white", "white", "black", "white", "black"].

Normalize Key Count:
Piano keys repeat after every 88 keys. To simplify the calculation, we normalize the input keyPressCount to a value between 1 and 88 using:
(keyPressCount - 1) % 88 + 1.

Map to Octave Pattern:
Each key corresponds to a position in the 12-key octave pattern. To find the position in the pattern, we calculate:
(normalizedKey - 1) % 12.

Retrieve the Key Color:
Use the pattern array to fetch the corresponding color (black or white) for the key.

Time Complexity:
O(1): The calculations and array lookups are constant time.

Space Complexity:
O(1): The solution uses a fixed-size array for the pattern and requires no additional data structures.
*/
