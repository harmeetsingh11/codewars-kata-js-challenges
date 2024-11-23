function first(arr, n = 1) {
  // Return the first n elements using the slice method.
  // If n is 0, slice(0, 0) returns an empty array.
  return arr.slice(0, n);
}

/*
Explanation:

Default Parameter:
The parameter n defaults to 1 if not provided.

Efficient Use of slice:
The slice method is used to extract a portion of the array.
arr.slice(0, n) extracts the first n elements of the array.
If n is 0, slice(0, 0) correctly returns an empty array.
*/
