function xor(a, b) {
  // Return true if exactly one of a or b is true, otherwise return false
  return a !== b;
}

/*
Explanation:

Using Inequality (!==):
The expression a !== b returns true if a and b have different boolean values (i.e., one is true and the other is false).
If a and b are the same (both true or both false), a !== b returns false.

Behavior of xor:
This mirrors the behavior of an XOR (exclusive or) operation, where it only returns true if one of the operands is true and the other is false.
*/
