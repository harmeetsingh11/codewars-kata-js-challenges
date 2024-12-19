function nbMonths(
  startPriceOld,
  startPriceNew,
  savingPerMonth,
  percentLossByMonth
) {
  // Initialize variables for the calculation
  let months = 0; // Number of months
  let savings = 0; // Total savings accumulated
  let currentPriceOld = startPriceOld; // Price of the old car
  let currentPriceNew = startPriceNew; // Price of the new car

  // Loop until the man can afford the new car
  while (currentPriceOld + savings < currentPriceNew) {
    months++; // Increment the number of months
    // Every two months, increase the percentage loss
    if (months % 2 === 0) {
      percentLossByMonth += 0.5;
    }
    // Decrease the value of both cars based on the percent loss
    currentPriceOld -= currentPriceOld * (percentLossByMonth / 100);
    currentPriceNew -= currentPriceNew * (percentLossByMonth / 100);
    // Add the monthly savings
    savings += savingPerMonth;
  }

  // Calculate leftover money after buying the car
  const leftover = Math.round(currentPriceOld + savings - currentPriceNew);
  return [months, leftover];
}

// Example
console.log(nbMonths(2000, 8000, 1000, 1.5)); // Output: [6, 766]

/* 
Explanation:

Initialization:
Variables months, savings, currentPriceOld, and currentPriceNew are initialized to track time, accumulated savings, and car prices.

Loop:
The loop continues until the combined value of the old car and savings is enough to buy the new car.
At the start of every two months, the depreciation rate (percentLossByMonth) increases by 0.5%.

Car Depreciation:
Both the old car's price and the new car's price are reduced monthly based on the current percentLossByMonth.

Savings Accumulation:
savingPerMonth is added to the total savings at the end of each month.

Leftover Calculation:
Once the loop exits, the leftover money (difference between the sum of the old car value and savings minus the new car price) is calculated and rounded.

Return:
The function returns the number of months and the leftover money as an array.
*/
