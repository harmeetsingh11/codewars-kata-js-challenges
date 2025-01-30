function smallest(n) {
  let str = n.toString(); // Convert number to string to access digits easily
  let minNum = n,
    minI = 0,
    minJ = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i === j) continue; // Skip if same index

      // Remove digit at index i and insert it at index j
      let temp = str.slice(0, i) + str.slice(i + 1);
      let newNum = temp.slice(0, j) + str[i] + temp.slice(j);
      let newValue = Number(newNum);

      // Check if new number is smaller
      if (newValue < minNum) {
        minNum = newValue;
        minI = i;
        minJ = j;
      }
    }
  }
  return [minNum, minI, minJ];
}

// Test cases
console.log(smallest(261235)); // [126235, 2, 0]
console.log(smallest(209917)); // [29917, 0, 1]
console.log(smallest(1000000)); // [1, 0, 6]

/* 
Explanation:

Convert n to a string for easy digit manipulation.

Initialize minNum with n and track the indices minI and minJ.

Use nested loops to:
Remove the digit at index i.
Insert it at index j.
Convert back to a number and compare.

Update minNum, minI, and minJ if a smaller number is found.

Return the smallest number and indices in an array.
*/
