function quadratic(x1, x2) {
  // Coefficients of the quadratic equation:
  // a = 1 (fixed),
  // b = -(x1 + x2) (sum of roots, with a negative sign),
  // c = x1 * x2 (product of roots).
  return [1, -(x1 + x2), x1 * x2];
}

/*
Explanation:

Roots of Quadratic Equation:
The quadratic equation can be expressed as (x−x1)(x−x2)=0. Expanding this, we get:
x^2 −(x1+x2)x+(x1⋅x2)=0
Coefficient a=1 (fixed).
Coefficient b=−(x1+x2) (negative sum of the roots).
Coefficient c=x1⋅x2 (product of the roots).

Efficient Calculation:
Using the above relations, we directly compute the coefficients and return them as an array.

Edge Cases:
when x1=x2, the equation still holds, representing a root with multiplicity two.
*/
