function solution(nums) {
  // Step 1: Check if the input `nums` is an array using Array.isArray().
  // - Array.isArray(nums) returns true if `nums` is an array, false otherwise.
  // - If `nums` is not an array, return an empty array [].

  // Step 2: If `nums` is an array, sort it in ascending order.
  // - The sort() method sorts array elements in place. By default, sort() converts elements to strings
  //   and sorts based on their Unicode values, which is why a custom comparison function (a, b) => a - b
  //   is provided for numerical sorting in ascending order.
  // - a - b ensures that numbers are sorted from smallest to largest.

  // Step 3: If `nums` is not an array (for example, if it's null or another data type), return an empty array [].

  return Array.isArray(nums) ? nums.sort((a, b) => a - b) : [];
}
