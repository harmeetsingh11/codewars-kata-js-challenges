function findAverage(nums) {
  // Calculate the sum of all numbers and divide by the length of the array
  return nums.reduce((sum, num) => sum + num, 0) / nums.length;
}

/* 
Explanation:

nums.reduce(): This method iterates over the array and accumulates the sum of all the numbers. We start with an initial sum of 0, and for each number num, we add it to the accumulated sum.

Division by Array Length: Once we have the total sum of the numbers, we divide it by the length of the array (nums.length) to calculate the average (mean).

Efficiency:
Time Complexity: O(n), where n is the length of the array. This is because we iterate through the array once to calculate the sum.
Space Complexity: O(1), as we only use a constant amount of extra space.
*/
