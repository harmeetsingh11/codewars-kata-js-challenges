function removeSmallest(numbers) {
  // Check if the input array is empty
  // If the array is empty, return an empty array immediately
  if (numbers.length === 0) return [];

  // Find the index of the smallest element in the array
  // Math.min(...numbers) finds the smallest number in the array
  // numbers.indexOf(...) returns the index of the first occurrence of this smallest number
  const minIndex = numbers.indexOf(Math.min(...numbers));

  // Create a new array by excluding the element at minIndex
  // numbers.slice(0, minIndex) creates a subarray from the start of the array up to, but not including, minIndex
  // numbers.slice(minIndex + 1) creates a subarray from the element after minIndex to the end of the array
  // The two subarrays are then concatenated to form a new array without the smallest element
  return numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));
}
