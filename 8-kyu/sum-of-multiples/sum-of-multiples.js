function sumMul(n, m) {
  // Check if inputs are valid: n and m should be positive integers, and m > n
  if (n <= 0 || m <= 0 || m <= n) return 'INVALID';

  // Calculate the sum of multiples of n below m
  // Use arithmetic progression: sum = n * (1 + 2 + ... + k), where k = floor((m-1)/n)
  const k = Math.floor((m - 1) / n); // Number of multiples of n below m
  return (n * (k * (k + 1))) / 2; // Sum of first k natural numbers multiplied by n
}

/* 
Explanation:

Input Validation:
The function checks whether n and m are positive integers and whether m > n. If these conditions are not met, it returns "INVALID".

Finding Multiples Below m:
The multiples of n below m are n, 2n, 3n, ..., up to the largest integer multiple of n less than m, which is k * n, where k=(m-1)/n

Using Arithmetic Progression Formula:
The sum of the first k natural numbers is k*(k+1)/2
Multiply this sum by n to get the sum of the multiples: n*(k+1)/2
​
Time Complexity:
The solution is O(1) since it involves only a few arithmetic operations.
*/
