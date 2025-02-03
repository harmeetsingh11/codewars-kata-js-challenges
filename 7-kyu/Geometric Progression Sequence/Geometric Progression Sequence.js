function geometricSequenceElements(a, r, n) {
  // Initialize an array to hold the sequence elements
  let sequence = [];

  // Loop to generate the first n elements
  for (let i = 0; i < n; i++) {
    // Push the current element to the sequence
    sequence.push(a * Math.pow(r, i));
  }

  // Join the array elements with a comma and space and return as a string
  return sequence.join(', ');
}

console.log(geometricSequenceElements(2, 3, 5)); // Output: '2, 6, 18, 54, 162'

/* 
Explanation:

sequence.push(a * Math.pow(r, i)): This generates the i-th element of the sequence by multiplying the first element a by r^i. The Math.pow(r, i) calculates r raised to the power i.

The loop runs n times to generate n elements of the sequence.

sequence.join(', '): This joins all the elements of the array into a string, separated by a comma and a space, to match the required format.
*/
