function isPythagoreanTriple(nums) {
  // Sort the numbers in ascending order to ensure c (hypotenuse) is the largest
  const [a, b, c] = nums.sort((x, y) => x - y);

  // Check if a² + b² equals c²
  return a * a + b * b === c * c;
}

/* 
Explanation:

Sorting the Numbers:
We use .sort((x, y) => x - y) to sort the array in ascending order.
This ensures that the largest number (c) is always the last element, which represents the hypotenuse in the Pythagorean theorem.

Checking the Pythagorean Condition:
The Pythagorean theorem states that for a right triangle, a2 +b2 =c2, where c is the hypotenuse.
After sorting, the first two numbers (a and b) are the legs, and the last number (c) is the hypotenuse. We simply check 
a2 +b2 === c2 .

Return the Result:
If the condition is true, the function returns true; otherwise, it returns false.
*/
