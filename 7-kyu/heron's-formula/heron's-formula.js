function heron(a, b, c) {
  // Calculate the semi-perimeter of the triangle
  const s = (a + b + c) / 2;

  // Calculate the area using Heron's formula
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  // Return the area rounded to 2 decimal places
  return parseFloat(area.toFixed(2));
}

// Example
console.log(heron(3, 4, 5)); // 6.00

/* 
Explanation:

Semi-perimeter Calculation:
The semi-perimeter s is calculated as (a + b + c) / 2.

Area Calculation:
The area is calculated using Heron's formula:
area= sqrt(s⋅(s−a)⋅(s−b)⋅(s−c))
​
Precision:
The result is rounded to 2 decimal places using toFixed(2) and converted back to a number using parseFloat.

Efficient & Concise:
The function is short, and all calculations are performed in constant time O(1).
*/
