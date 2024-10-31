function highestRank(arr) {
  const freqMap = {}; // Object to store the frequency of each number

  // Build the frequency map
  for (let num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1; // Increment count for each number
  }

  // Find the most frequent number with the highest value in case of a tie
  return Object.keys(freqMap).reduce((mostFreq, num) => {
    num = +num; // Convert key back to number
    return freqMap[num] > freqMap[mostFreq] ||
      (freqMap[num] === freqMap[mostFreq] && num > mostFreq)
      ? num
      : mostFreq;
  }, arr[0]);
}

/* 
Explanation:

Frequency Map Construction:
We loop through each number in the array and create a frequency map (freqMap) where each key is a number from the array, and its value is the count of occurrences.

Finding the Most Frequent Number:
We use reduce on the Object.keys(freqMap) to identify the most frequent number.

For each number, we check:
If its frequency is higher than the current mostFreq.
If the frequency is equal but the number itself is larger (to handle ties).
If either condition is true, we update mostFreq with the current number.

Return Result:
The reduce function returns the most frequent number, or the largest number among those tied for highest frequency.
*/
