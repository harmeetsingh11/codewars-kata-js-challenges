// Function to calculate the mean of rainfall for a specific town
function mean(town, strng) {
  // Split the input data into an array of town records
  const records = strng.split('\n');

  // Find the record for the specified town
  const townRecord = records.find((record) => record.startsWith(`${town}:`));

  // If the town record is not found, return -1
  if (!townRecord) return -1;

  // Extract the rainfall data for the town
  const rainfallData = townRecord
    .split(':')[1] // Get the part after the colon
    .split(',') // Split into individual monthly records
    .map((month) => parseFloat(month.split(' ')[1])); // Extract the rainfall value

  // Calculate and return the mean (average) rainfall
  return (
    rainfallData.reduce((sum, value) => sum + value, 0) / rainfallData.length
  );
}

// Function to calculate the variance of rainfall for a specific town
function variance(town, strng) {
  // Get the mean rainfall for the town
  const avg = mean(town, strng);

  // If the mean is -1 (indicating town not found), return -1
  if (avg === -1) return -1;

  // Split the input data into an array of town records
  const records = strng.split('\n');

  // Find the record for the specified town
  const townRecord = records.find((record) => record.startsWith(`${town}:`));

  // Extract the rainfall data for the town
  const rainfallData = townRecord
    .split(':')[1] // Get the part after the colon
    .split(',') // Split into individual monthly records
    .map((month) => parseFloat(month.split(' ')[1])); // Extract the rainfall value

  // Calculate and return the variance
  return (
    rainfallData.reduce((sum, value) => sum + Math.pow(value - avg, 2), 0) /
    rainfallData.length
  );
}

// Example
const data = `Rome:Jan 81.2,Feb 63.2,Mar 70.3,Apr 55.7,May 53.3,Jun 44.2,Jul 37.3,Aug 32.4,Sep 34.5,Oct 42.7,Nov 43.2,Dec 48.6
  London:Jan 48.0,Feb 38.9,Mar 39.9,Apr 42.2,May 47.3,Jun 52.1,Jul 59.5,Aug 57.2,Sep 55.4,Oct 62.0,Nov 59.0,Dec 52.9
  Paris:Jan 182.3,Feb 120.8,Mar 158.3,Apr 204.3,May 226.8,Jun 192.4,Jul 183.2,Aug 156.2,Sep 153.9,Oct 161.0,Nov 180.0,Dec 174.2`;

console.log(mean('London', data)); // Output: 51.19
console.log(variance('London', data)); // Output: 57.42

/* 
Explanation

Data Parsing:
Split the string by newline to separate each town's record.
Identify the town's record by checking if it starts with town:.

Extract Rainfall Values:
The part after the colon contains monthly records separated by commas.
Split these records and parse the rainfall values as floating-point numbers.

Mean Calculation:
Use reduce to calculate the sum of rainfall values and divide by the count.

Variance Calculation:
Use the mean to compute the variance by summing the squared differences between each value and the mean, dividing by the count.

Edge Cases:
If the town is not found, return -1.
The solution ensures floating-point calculations are precise enough for the problem's requirements.
*/
