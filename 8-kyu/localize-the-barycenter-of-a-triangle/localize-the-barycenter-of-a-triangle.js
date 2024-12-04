function barTriang(A, B, C) {
  // Calculate the x and y coordinates of the centroid using the formula
  const xO = +((A[0] + B[0] + C[0]) / 3).toFixed(4); // Sum x-coordinates, divide by 3, and round to 4 decimals
  const yO = +((A[1] + B[1] + C[1]) / 3).toFixed(4); // Sum y-coordinates, divide by 3, and round to 4 decimals

  return [xO, yO]; // Return the coordinates as an array
}

// Test cases
console.log(barTriang([4, 6], [12, 4], [10, 10])); // Output: [8.6667, 6.6667]
console.log(barTriang([4, 2], [12, 2], [6, 10])); // Output: [7.3333, 4.6667]

/* 
Explanation:

Centroid Formula:
The formula for the x-coordinate of the centroid is: X0=(XA+XB+XC)/3
​Similarly, for the y-coordinate:
Y0=(YA+YB+YC)/3
 
Implementation:
The x and y coordinates of the centroid are calculated separately by summing the respective coordinates of the vertices and dividing by 3.
The .toFixed(4) method ensures the result is rounded to four decimal places. The + operator converts the string output of .toFixed() back to a number.
*/
