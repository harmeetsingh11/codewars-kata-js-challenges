function beggars(values, n) {
  // Initialize an array with 'n' zeros to store the sums for each beggar
  const result = Array(n).fill(0);

  // Iterate over the values and distribute them to the respective beggar
  values.forEach((value, index) => {
    result[index % n] += value; // Use modulo to cycle through beggars
  });

  return result; // Return the resulting sums
}

/* 
Explanation:

Initialize Result Array:
Create an array result of length n filled with zeros to represent the sums each beggar collects.

Iterate and Distribute:
Use the forEach method to iterate through each value in the input values array.
Use the index modulo n (index % n) to determine which beggar gets the current value. This cycles through the beggars repeatedly.

Edge Cases:
If n is 0, return an empty array ([]) since there are no beggars to collect values.
If n is greater than the length of values, the additional beggars will remain at 0.

Return Result:
Return the result array containing the sums collected by each beggar.

This solution is efficient with a time complexity of O(m), where m is the length of the input array. 
*/
