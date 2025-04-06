// Predefined CHANGE object with values for each coin type
const CHANGE = {
  penny: 0.01,
  nickel: 0.05,
  dime: 0.1,
  quarter: 0.25,
  dollar: 1.0,
};

// Function to calculate total change
function changeCount(str) {
  // Split the input string into individual coin names
  // Map each coin to its dollar value using the CHANGE object
  // Reduce the array of values to get the total sum
  const total = str
    .split(' ')
    .map((coin) => CHANGE[coin])
    .reduce((sum, value) => sum + value, 0);

  // Format the total to 2 decimal places with a dollar sign
  return `$${total.toFixed(2)}`;
}

console.log(changeCount('nickel penny dime dollar')); // $1.16
console.log(changeCount('dollar dollar quarter dime dime')); // $2.45
console.log(changeCount('penny')); // $0.01
console.log(changeCount('dime')); // $0.10
