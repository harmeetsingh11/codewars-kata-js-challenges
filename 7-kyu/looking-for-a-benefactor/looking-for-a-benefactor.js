function new_avg(arr, navg) {
  // Calculate the total sum of existing donations
  const currentSum = arr.reduce((sum, donation) => sum + donation, 0);

  // Calculate the required total sum to reach the desired average
  const requiredSum = navg * (arr.length + 1);

  // Determine the next donation needed
  const nextDonation = Math.ceil(requiredSum - currentSum);

  // If the calculated donation is non-positive, throw an error
  if (nextDonation <= 0) throw new Error('Expected New Average is too low');

  return nextDonation;
}

// Examples
console.log(new_avg([14, 30, 5, 7, 9, 11, 15], 30)); // Output: 149
console.log(new_avg([14, 30, 5, 7, 9, 11, 15], 92)); // Output: 645
try {
  console.log(new_avg([14, 30, 5, 7, 9, 11, 15], 2)); // Should throw an error
} catch (e) {
  console.error(e.message); // Output: Expected donation is non-positive.
}

/*  
Explanation:

Calculate Current Sum: Use the reduce method to calculate the sum of the donations in arr.

Calculate Required Sum: Multiply the desired average navg by (n + 1) where n is the length of the arr. This gives the total amount needed to achieve the desired average after the next donation.

Find Next Donation: Subtract the current sum from the required sum to find the next donation, then use Math.ceil to round it up to the nearest integer.

Check for Validity: If the calculated donation is less than or equal to zero, throw an error to indicate invalid expectations.

Return Result: If valid, return the calculated donation.

Efficiency:

Time Complexity: 
O(n) where n is the size of the arr, as we only traverse the array once.

Space Complexity: 
O(1), since we are using a constant amount of space.
*/
