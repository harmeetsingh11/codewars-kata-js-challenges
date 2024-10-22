function rowSumOddNumbers(n) {
  // The sum of the nth row of consecutive odd numbers is simply n^3 (a known mathematical property)
  return n * n * n;
}

/* 
  Explanation:

  Mathematical Property:
  There is a known formula that states the sum of the numbers in the nth row of consecutive odd numbers is n^3 (n cubed).
  This means that for any row number n, you can directly compute the sum by cubing n without needing to generate the numbers or manually sum them.
  
  Efficiency:
  The solution is highly efficient because it avoids generating the triangle and summing the numbers directly. Instead, it uses a mathematical formula, making the time complexity O(1) (constant time).
  Example Calculations:
  
  For n = 1, the sum is 1^3 = 1.
  For n = 2, the sum is 2^3 = 8 (corresponding to 3 + 5).
  For n = 3, the sum is 3^3 = 27 (corresponding to 7 + 9 + 11).

  This approach is optimal as it leverages a mathematical property, resulting in a concise and efficient solution. */
