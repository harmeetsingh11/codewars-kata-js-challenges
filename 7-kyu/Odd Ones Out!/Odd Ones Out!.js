function oddOnesOut(arr) {
  // Create an object to count the occurrences of each number
  const counts = {};

  // Loop through the array to populate the counts object
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  // Filter the array to keep only numbers that appear an even number of times
  return arr.filter((num) => counts[num] % 2 === 0);
}

/* 
Explanation:

Count occurrences:
We first create a counts object to store how many times each number appears in the array.
We iterate through the array, and for each number, we increment its count in the counts object.

Filter array:
Next, we use the .filter() method to return a new array, which includes only the numbers that appear an even number of times. We check this by using the condition counts[num] % 2 === 0.

Example Walkthrough:
Input: [1, 2, 3, 1, 3, 3]
The counts object will be: { 1: 2, 2: 1, 3: 3 }
The numbers 1 and 2 are the ones that repeat an even number of times, so the output will be [1, 1].

Time Complexity:
O(n): The solution iterates through the array twice (once for counting and once for filtering), so the overall time complexity is linear in terms of the array length.
*/
