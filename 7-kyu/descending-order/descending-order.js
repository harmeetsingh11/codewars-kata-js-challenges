// SOLUTION 1
function descendingOrder(n) {
  return Number(
    // Convert the final string back into a number
    n
      .toString() // Convert the number 'n' to a string
      .split('') // Split the string into an array of its digits
      .sort((a, b) => b - a) // Sort the digits in descending order (comparing as numbers)
      .join('') // Join the array of digits back into a single string
  );
}

// SOLUTION 2
function descendingOrder(n) {
  return parseInt(
    // Convert the final string back into an integer
    String(n) // Convert the number 'n' to a string
      .split('') // Split the string into an array of its digits
      .sort() // Sort the digits in ascending lexicographical order
      .reverse() // Reverse the array to get descending order
      .join('') // Join the array of digits back into a single string
  );
}
