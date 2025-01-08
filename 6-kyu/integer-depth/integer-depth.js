function computeDepth(n) {
  // Set to keep track of digits we have encountered
  const seenDigits = new Set();
  let multiplier = 0;

  // Continue multiplying until all 10 digits are encountered
  while (seenDigits.size < 10) {
    multiplier++; // Increment multiplier
    const currentNumber = n * multiplier;

    // Add digits of the current number to the set
    for (const digit of String(currentNumber)) {
      seenDigits.add(digit);
    }
  }

  // Return the multiplier when all digits are found
  return multiplier;
}

console.log(computeDepth(42)); // Output: 9

/* 
Explanation:

Track digits seen: Use a Set to track unique digits encountered so far. A Set avoids duplicates, ensuring we only care about new digits.
Increment multiplier: Start with a multiplier of 0 and increment it on each iteration.
Compute multiples: Multiply the input number n by the multiplier to get the next multiple.
Extract digits: Convert the multiple to a string and iterate through its digits, adding them to the Set.
Check completion: Stop once the size of the Set reaches 10, meaning all digits (0-9) have been encountered.
Return result: The function returns the multiplier value that corresponds to the depth.
*/
