function minimumSteps(numbers, k) {
  // Step 1: Sort the array in ascending order
  numbers.sort((a, b) => a - b);

  // Step 2: Initialize a running sum
  let sum = 0;

  // Step 3: Iterate through the sorted array
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Add the current number to the running sum
    if (sum >= k) return i; // Return the index (steps) when sum >= k
  }
}

/* 
Explanation of Each Step:

1. Sort the Array:

numbers.sort((a, b) => a - b);

Why? To easily pick the smallest numbers first, we sort the array in ascending order.
Example: For the input [8, 9, 4, 2], after sorting, the array becomes [2, 4, 8, 9].
Sorting is efficient with a time complexity of O(nlogn).

2. Initialize the Running Sum:

let sum = 0;

Why? To keep track of the cumulative total as we add numbers.
Initially, the sum is zero.

3. Iterate Through the Sorted Array:

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Add the smallest number
    if (sum >= k) return i; // Return steps when the condition is met
}
Explanation:

Start with the smallest number (first element of the sorted array).
Add it to sum.
Check if sum is greater than or equal to k.
If the condition is met, return the current index i, which represents the number of steps.

Why return i?
The loop index i is a 0-based counter, meaning it directly corresponds to the number of steps taken.
i=0: Only the smallest number was added.
i=1: The two smallest numbers were added, and so on.


Example 1:

minimumSteps([1, 10, 12, 9, 2, 3], 6);

Sort the Array: [1, 2, 3, 9, 10, 12]
Iteration:

i=0: sum = 1 → Not 
i=1: sum = 1 + 2 = 3 → Not 
i=2: sum = 3 + 3 = 6 → >=6, so return i = 2.
*/
