function factorial(n) {
  // Base case: factorial of 0 is 1
  if (n === 0) return 1;
  // Recursive call: n * factorial of (n-1)
  return n * factorial(n - 1);
}

/* 
Explanation:
Base Case: If n is 0, return 1 (since 0! is defined as 1).
Recursive Case: For any n > 0, the factorial of n is n * factorial(n - 1). This recursively reduces the problem until n reaches 0.
*/
