function nextItem(sequence, item) {
  // Handle strings or arrays directly
  let found = false; // Tracks if the specified item was found

  // Iterate through the sequence using a `for...of` loop for efficiency
  for (const element of sequence) {
    if (found) return element; // Return the next item after the match
    if (element === item) found = true; // Mark the item as found
  }

  // If no next item exists or the item is not found, return undefined
  return undefined;
}

// Examples
console.log(nextItem([1, 2, 3, 4, 5, 6, 7], 3)); // Output: 4
console.log(nextItem('testing', 't')); // Output: "e"
console.log(nextItem([1, 2, 3], 4)); // Output: undefined
console.log(nextItem('abc', 'c')); // Output: undefined

/* 
Key Steps

Handle Any Iterable:
The function accepts any sequence (string, array, or any iterable object).
Instead of converting the sequence to an array, it directly iterates over it using a for...of loop. This avoids unnecessary memory usage for large sequences. By iterating directly over the sequence, we avoid creating a new array with Array.from(), reducing memory overhead.

Tracking the Item:
A boolean variable found is initialized as false. It is used to track if the specified item has been found in the sequence.
The loop checks each element in the sequence.
If found is true (the specified item has already been encountered), the next element is returned immediately.
If the current element matches the specified item, found is set to true to mark its position.

Early Exit:
Once the next item after the specified item is found, the loop exits early, saving time by avoiding unnecessary iterations.

Edge Cases:
If the item is not found (found remains false) or there is no element following the item, the loop completes without returning any value. In this case, the function explicitly returns undefined.

Efficiency:
The for...of loop ensures the solution is efficient for all iterables, processing each element only once and stopping as soon as the next item is found.
*/
