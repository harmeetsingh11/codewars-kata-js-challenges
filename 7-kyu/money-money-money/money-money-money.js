function calculateYears(P, I, T, D) {
  let years = 0; // Initialize the number of years to 0

  // Loop until the principal (P) reaches or exceeds the desired sum (D)
  while (P < D) {
    // Calculate the interest accrued for the year, then apply tax to get net interest
    P += P * I * (1 - T); // Update the principal with the net interest
    years++; // Increment the year count
  }

  return years; // Return the total number of years needed
}

/* 
Explanation:

Initialize Years:
We start with years = 0, as no years have passed initially.

Loop Until Desired Sum:
We continue looping until the principal P becomes equal to or greater than the desired sum D.

Interest Calculation:
Each year, we calculate the net interest: P * I * (1 - T).
P * I gives the total interest for the year.
(1 - T) applies the tax, leaving only the post-tax interest.
We add this net interest to P to get the new principal for the next year.

Increment Year Count:
For each loop iteration, we increment years to track the number of years passed.

Return Result:
When P meets or exceeds D, we exit the loop and return years as the result.
*/
