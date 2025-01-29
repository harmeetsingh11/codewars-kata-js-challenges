function solve(a, b) {
  // Continue the loop until one of the values becomes zero
  while (a > 0 && b > 0) {
    // If a is at least twice b, reduce a by 2 * b
    if (a >= 2 * b) a %= 2 * b;
    // If b is at least twice a, reduce b by 2 * a
    else if (b >= 2 * a) b %= 2 * a;
    // If neither condition holds, return the result
    else return [a, b];
  }
  return [a, b];
}

/* 
Explanation:

The function iterates until one of the numbers becomes zero.
It uses the modulo operator % instead of repeated subtraction to optimize performance.
If a is at least twice b, it updates a using a %= 2 * b.
If b is at least twice a, it updates b using b %= 2 * a.
If neither condition is met, it returns [a, b].

This approach ensures an optimal time complexity of approximately O(log N). 
*/
