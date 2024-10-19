function reverseBits(data) {
  const segmentSize = 8; // Each segment is 8 bits
  const reversedData = [];

  // Loop through the data in reverse, processing each 8-bit segment
  for (let i = data.length; i > 0; i -= segmentSize) {
    // Slice out the current 8-bit segment and append it to the result
    reversedData.push(...data.slice(i - segmentSize, i));
  }

  return reversedData; // Return the reversed data
}

/* 
Explanation:

Segment Size:
We know that each segment is 8 bits long, so we define segmentSize = 8.

Reversing Process:
The loop iterates from the end of the input array data and moves backward by 8 bits in each iteration (i -= segmentSize).
Inside the loop, we slice out the 8-bit segment (data.slice(i - segmentSize, i)) and use the spread operator (...) to append this segment to the reversedData array.

Return:
Once the loop is complete, reversedData will contain the reversed 8-bit segments, and we return the result.

This approach is efficient because it processes the input in linear time (O(n) complexity), where n is the number of bits in the input data. The slicing ensures that segments are reversed as required with minimal operations.
*/
