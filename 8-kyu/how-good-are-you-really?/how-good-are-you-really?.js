function betterThanAverage(classPoints, yourPoints) {
  // Calculate the class average by summing up all class points and dividing by the number of scores
  const average =
    classPoints.reduce((sum, points) => sum + points, 0) / classPoints.length;

  // Compare your score with the class average
  return yourPoints > average;
}

/* 
Explanation:

Calculate Class Average:
reduce() is used to calculate the sum of all scores in the classPoints array.
Divide the total sum by the number of scores (classPoints.length) to get the average.

Compare Your Points:
Check if yourPoints is greater than the calculated average.
Return true if it is, otherwise return false.

This solution is optimal with an O(n) time complexity for the summation process (reduce) and is concise, leveraging JavaScript's built-in array methods.
*/
