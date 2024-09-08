function tribonacci(signature, n) {
  // If n is 0, return an empty array since no elements are requested
  if (n === 0) return [];

  // If n is 1, return an array with just the first element of the signature
  if (n === 1) return [signature[0]];

  // If n is 2, return an array with the first two elements of the signature
  if (n === 2) return [signature[0], signature[1]];

  // Loop from the 3rd position up to the nth position (not inclusive)
  for (let i = 3; i < n; i++) {
    // Calculate the next number in the sequence by summing the last three numbers
    signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
  }

  // Return the first n elements of the sequence (in case n is less than the length of the signature)
  return signature.slice(0, n);
}
