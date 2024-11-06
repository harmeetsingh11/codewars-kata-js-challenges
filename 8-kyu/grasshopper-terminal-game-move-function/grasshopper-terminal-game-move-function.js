function move(position, roll) {
  // Each roll moves the hero 'roll' spaces, and the roll happens twice, so we move 2 * roll spaces.
  return position + roll * 2;
}

/* 
Explanation:

Calculate New Position:
Since the hero moves twice the number indicated by the roll, we multiply roll by 2.
We then add this to the position to get the new position.

Efficiency:
This solution is O(1), as it simply performs a multiplication and an addition, making it optimal.

This approach is both concise and efficient, achieving the result in a single line of code.
*/
