function classifyNumber(n) {
  // Convert the number to its binary representation and count the number of '1's
  const onesCount = n.toString(2).split('1').length - 1;

  // Check if the count of '1's is even or odd and return the appropriate result
  return onesCount % 2 === 0 ? "It's Evil!" : "It's Odious!";
}

/* 
Explanation:

Binary Conversion:
The toString(2) method converts the number n to its binary representation.

Counting '1's:
.split('1') splits the binary string at each occurrence of '1'.
The length of the resulting array minus 1 gives the total count of '1's.

Evil or Odious:
If the count of '1's is divisible by 2 (even), return "It's Evil!"`.
Otherwise (odd), return "It's Odious!".
*/
