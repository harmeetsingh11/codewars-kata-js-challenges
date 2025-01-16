// SOLUTON 1
function solEquaStr(n) {
  const result = [];

  // Iterate through all factors of n
  for (let a = 1; a * a <= n; a++) {
    if (n % a === 0) {
      // Check if `a` is a factor of `n`
      const b = n / a; // Pair factor of `a`

      // Solve for x and y using the equations derived:
      // x = (a + b) / 2
      // y = (b - a) / 4
      const x = (a + b) / 2;
      const y = (b - a) / 4;

      // Check if x and y are integers and y >= 0
      if (Number.isInteger(x) && Number.isInteger(y) && y >= 0) {
        result.push([x, y]);
      }
    }
  }

  return JSON.stringify(result); // Convert result array to the required string format
}

solEquaStr(90005); // Output: "[[45003,22501],[9003,4499],[981,467],[309,37]]"

/* 
Explanation:

Factorization:
The equation x^2 −4y^2=n can be rewritten as:
x^2−4y^2=(x−2y)(x+2y)=n
Let a=x−2y and b=x+2y. Since a and b are factors of n, iterate through all factors of n.

Finding x and y:
Solve for x and y using the relationships:
x= a+b/2, y=b−a/4
Both x and y must be integers, and y≥0.

Iterate Through Factors:
Loop through a up to root of n. For each factor a, compute b=n/a.

Validate Solutions:
Check if both x and y are integers using Number.isInteger, and ensure y≥0.

Output Format:
Collect valid [x,y] pairs in a results array.
Return the array as a JSON string.
*/

// -----------------------------
// SOLUTON 2

function solequa(n) {
  // Initialize an empty array to store the results (pairs of x and y)
  let result = [];

  // Loop through possible values of i from 1 to the square root of n
  for (let d, x, y, i = 1; i <= Math.sqrt(n); i++) {
    // Check if i is a divisor of n and if x and y are integers
    if (
      Number.isInteger((d = n / i)) && // d is n divided by i, and it should be an integer
      Number.isInteger((x = (d + i) / 2)) && // x should be (d + i) / 2, an integer
      Number.isInteger((y = (d - i) / 4))
    ) {
      // y should be (d - i) / 4, an integer
      result.push([x, y]); // If all conditions are satisfied, add the pair [x, y] to the result array
    }
  }

  // Return the result array which contains all valid pairs of x and y
  return result;
}

/* 
Explanation:

Initialization of the result array:
let result = []: This creates an empty array that will store the pairs of x and y that satisfy the equation.

Iterating through possible divisors:
for ( let d, x, y, i = 1; i <= Math.sqrt(n); i++ ):
The loop starts from i = 1 and continues up to the square root of n (Math.sqrt(n)).
This is because for a number n, any divisor greater than its square root will have a corresponding smaller divisor that is less than the square root. This allows us to limit the iterations to the square root of n for efficiency.

Finding divisors:
d = n / i: This computes d as the quotient when dividing n by i. This is a candidate divisor.
If i divides n, then d will be an integer (i.e., n % i === 0).

Checking if x and y are integers:
The code checks two conditions for each i:
For x:
x = (d + i) / 2: This calculates the value of x as the average of d and i. For x to be an integer, (d + i) must be even.
For y:
y = (d - i) / 4: This calculates the value of y as the difference between d and i divided by 4. For y to be an integer, (d - i) must be divisible by 4.

Adding valid pairs of x and y:
If all conditions are met:
Number.isInteger( d = n / i ): d is an integer (i.e., i divides n).
Number.isInteger( x = (d + i) / 2 ): x is an integer.
Number.isInteger( y = (d - i) / 4 ): y is an integer.
Then the pair [x, y] is added to the result array using result.push([x, y]).

Returning the result:
Finally, the function returns the result array containing all valid pairs [x, y] that satisfy the equation.

Example:
Let's walk through a simple example where n = 90005:
The loop runs for i = 1 to i <= Math.sqrt(90005) (which is approximately 300).
For each i, the code calculates d = n / i, then checks if (d + i) / 2 and (d - i) / 4 are integers.
If valid integer pairs are found, they are stored in the result array.
At the end of the loop, the function returns all the pairs [x, y] that satisfy the equation x^2 - 4*y^2 = n.
*/
