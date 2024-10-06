function smallEnough(a, limit) {
  // Check if every element in the array is less than or equal to the limit
  return a.every((value) => value <= limit);
}
//   Explanation:
//   every(): This method tests whether all elements in the array pass the provided condition
