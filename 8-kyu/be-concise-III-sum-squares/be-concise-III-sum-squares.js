const sumSquares = (arr) => arr.reduce((sum, num) => sum + num ** 2, 0);

/* 
Explanation:

Arrow Function: The function is written as an arrow function for brevity.

reduce Method: The reduce method iterates through the array and accumulates the sum:
sum is the accumulator that keeps the running total.
num is the current number in the array.

Exponentiation Operator (**): Each number is squared using the ** operator.

Initial Value: 0 is passed as the initial value of the accumulator sum.

Example Walkthrough:
Input: [1, 2, 3, 4, 5]
Iteration 1: sum = 0 + 1 ** 2 = 1
Iteration 2: sum = 1 + 2 ** 2 = 5
Iteration 3: sum = 5 + 3 ** 2 = 14
Iteration 4: sum = 14 + 4 ** 2 = 30
Iteration 5: sum = 30 + 5 ** 2 = 55
Output: 55

Efficient: Uses the reduce method, iterating through the array only once (O(n) time complexity).
*/
