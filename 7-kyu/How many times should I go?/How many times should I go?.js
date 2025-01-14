function howManyTimes(annual_price, individual_price) {
  // Calculate the minimum number of visits needed for the annual pass to be worth it.
  return Math.ceil(annual_price / individual_price);
}

console.log(howManyTimes(100, 15)); // Output: 7
console.log(howManyTimes(50, 20)); // Output: 3

/* 
Explanation:

Annual Price vs. Individual Price:
The function calculates how many individual visits (at individualPrice each) would equal or exceed the cost of an annualPrice membership.

Calculation:
annualPrice / individualPrice gives the exact number of visits required to break even.
Use Math.ceil to round up to the nearest whole number since you can't have a fraction of a visit.

Output:
The function returns the minimum number of visits after which purchasing the annual pass is more cost-effective.
This approach ensures the solution is both concise and efficient, with a constant time complexity O(1).
*/
