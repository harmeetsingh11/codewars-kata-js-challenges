function isAutomorphic(num) {
  // Calculate the square of the number
  const square = num ** 2;

  // Convert both the number and its square to strings for comparison
  const numStr = num.toString();
  const squareStr = square.toString();

  // Check if the square ends with the number
  return squareStr.endsWith(numStr) ? 'Automorphic' : 'Not!!';
}

// Test cases
console.log(isAutomorphic(25)); // Output: "Automorphic"
console.log(isAutomorphic(13)); // Output: "Not!!"
console.log(isAutomorphic(76)); // Output: "Automorphic"
console.log(isAutomorphic(225)); // Output: "Not!!"
console.log(isAutomorphic(625)); // Output: "Automorphic"
console.log(isAutomorphic(1)); // Output: "Automorphic"
console.log(isAutomorphic(6)); // Output: "Automorphic"

/* 
Explanation

Calculate the square of the number:
num ** 2 calculates the square of the input number.

Convert to strings:
Both the original number and its square are converted to strings using toString(). This allows for easy comparison of their digits.

Check the ending:
The endsWith() method checks if the string representation of the square ends with the string representation of the number.

Return result:
The function returns "Automorphic" if the square ends with the number, otherwise it returns "Not!!".
*/
