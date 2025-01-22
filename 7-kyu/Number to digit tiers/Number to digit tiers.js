function cutOffNumber(num) {
  const str = num.toString(); // Convert number to string
  let result = []; // Initialize an empty array to store the results

  // Loop through the string length and push progressively sliced strings
  for (let i = 1; i <= str.length; i++) {
    result.push(str.slice(0, i)); // Slice from the beginning up to the current index
  }

  return result; // Return the final array of sliced strings
}

console.log(cutOffNumber(420)); // ["4", "42", "420"]
console.log(cutOffNumber(2017)); // ["2", "20", "201", "2017"]
console.log(cutOffNumber(2010)); // ["2", "20", "201", "2010"]
console.log(cutOffNumber(4020)); // ["4", "40", "402", "4020"]
console.log(cutOffNumber(80200)); // ["8", "80", "802", "8020", "80200"]
