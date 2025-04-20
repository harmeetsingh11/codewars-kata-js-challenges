function insurance(age, size, numofdays) {
  // Step 1: Determine the age surcharge.
  // If age is less than 25, add $10 per day, else $0.
  let ageCharge = age < 25 ? 10 : 0;

  // Step 2: Determine the car size surcharge.
  // If the size is "economy", no extra charge ($0).
  // If it's "medium", add $10 per day.
  // If it's anything else (including "full-size"), add $15 per day.
  let sizeCharge = size === 'economy' ? 0 : size === 'medium' ? 10 : 15;

  // Step 3: If numofdays is negative, return 0 as the cost.
  // Else, calculate the total cost by adding the base charge, age surcharge, and size surcharge, and multiplying by the number of rental days.
  return numofdays < 0 ? 0 : (50 + ageCharge + sizeCharge) * numofdays;
}
/*
### Intuition Behind the Solution

The problem can be broken down into a few steps:
1. **Base Daily Charge**: There's always a base charge of $50 per day for renting a car.
2. **Age Surcharge**: Drivers under the age of 25 have an additional charge of $10 per day. If the driver is 25 or older, there is no surcharge.
3. **Car Size Surcharge**: The car's size affects the daily surcharge:
   - "economy" car has no additional surcharge (charge is $0).
   - "medium" car has a surcharge of $10.
   - "full-size" car has a surcharge of $15.
   - Any car that doesn’t match these sizes is treated as a "full-size" car (surcharge of $15).
4. **Rental Days**: The number of days the car is rented determines the total cost. If the number of days is negative, it should return a cost of 0.

Given these steps, I wanted to create a function that:
- Checks the age to apply the correct age surcharge.
- Checks the car size to apply the appropriate surcharge.
- Handles negative rental days by returning a cost of 0.
- Finally, multiplies the total daily charge by the number of rental days to calculate the total cost.
*/

/*
### How This Solution Works

1. **Age Surcharge (`ageCharge`)**:
   - The ternary operator (`age < 25 ? 10 : 0`) checks if the age is less than 25. If true, it assigns an extra $10 per day. If false (i.e., the renter is 25 or older), it assigns $0 as the surcharge.

2. **Size Surcharge (`sizeCharge`)**:
   - We first check if the size is `'economy'`, which has no surcharge, so the charge is 0.
   - If the size is `'medium'`, it adds a $10 surcharge.
   - If it's anything else (including `'full-size'` or an unrecognized car type), it assigns a $15 surcharge. This ensures that any undefined car type gets the surcharge for a "full-size" car, as per the problem statement.

3. **Rental Days (`numofdays`)**:
   - The ternary operator (`numofdays < 0 ? 0`) checks if the number of rental days is negative. If it is, the function immediately returns 0, as there shouldn't be any charge for negative rental days.
   - If the rental days are valid, we proceed to calculate the total cost by adding the base charge ($50), the age surcharge, and the car size surcharge, and then multiply that total by the number of days rented.

*/
