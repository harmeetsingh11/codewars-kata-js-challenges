function removeSpacesAndTrack(arr) {
  // Initialize an empty string to keep track of the concatenated result
  let result = [];
  let concatenated = '';

  // Iterate over the array
  for (let word of arr) {
    // Remove spaces and concatenate the current word
    concatenated += word;
    // Push the current concatenated string to the result array
    result.push(concatenated);
  }

  return result;
}

// Example
const input = ['i', 'have', 'no', 'space'];
console.log(removeSpacesAndTrack(input));
// Output: ['i', 'ihave', 'ihaveno', 'ihavenospace']

/* 
Explanation:

Concatenation Tracker (concatenated):
This variable keeps track of the progressively concatenated string as we iterate through the array.
Each word is added to it in every iteration.

Iterate Through Array:
For each element in the array (word), the current word is appended to the concatenated string.

Build Result Array:
After updating concatenated, its current state is pushed into the result array.

Return Result:
At the end of the loop, the result array contains all progressively concatenated strings.
This approach ensures the operation is done in O(n) time complexity, where n is the length of the array, making it efficient. 
*/
