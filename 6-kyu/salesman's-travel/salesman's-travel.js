function travel(r, zipcode) {
  if (!zipcode) return `${zipcode}:/`; // If zipcode is empty, return the required format.

  // Split the input string into individual addresses.
  const addresses = r.split(',');

  // Filter addresses matching the given zipcode and extract relevant data.
  const results = addresses
    .filter((address) => address.endsWith(zipcode)) // Match addresses ending with the zipcode.
    .map((address) => {
      const [house, ...rest] = address.split(' '); // Split address into house number and the rest.
      const streetAndTown = rest.slice(0, -2).join(' '); // Extract street and town by removing last two elements (state + zipcode).
      return { house, streetAndTown };
    });

  // If no matching addresses, return the required format with no data.
  if (results.length === 0) return `${zipcode}:/`;

  // Combine street and town parts and house numbers into their respective lists.
  const streets = results.map((item) => item.streetAndTown).join(',');
  const houses = results.map((item) => item.house).join(',');

  // Return the result in the required format.
  return `${zipcode}:${streets}/${houses}`;
}

// Example
const r =
  '123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432';
console.log(travel(r, 'OH 43071')); // "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"
console.log(travel(r, 'NY 56432')); // "NY 56432:High Street Pollocksville/786"
console.log(travel(r, 'NY 5643')); // "NY 5643:/"

/* 
Explanation:

Initial Checks:
If the zipcode is empty or invalid, return the format "zipcode:/".

Address Splitting:
Use split(',') to break the string of addresses into an array for processing.

Filtering Addresses:
Check if the address ends with the target zipcode using endsWith(zipcode).
Extract the house number and street + town by splitting the address into parts and removing the last two elements (state and zipcode).

Handling Matches:
If no addresses match, return "zipcode:/".
Otherwise, construct two lists: one for street names and towns, and another for house numbers.

Combining Results:
Use join(',') to concatenate the street names and house numbers into comma-separated strings.
Format the final output string as per the requirements.

Efficiency:
Filter: Linear pass through addresses (O(n)).
Map: Linear transformation of filtered addresses (O(m) where m is the number of matches).
Overall: Efficient for a large list of addresses, as the operations are straightforward and optimized.
*/
