function calculateTip(amount, rating) {
  // Convert the rating to lowercase for case insensitivity
  const normalizedRating = rating.toLowerCase();

  // Define a mapping of ratings to tip percentages
  const tipPercentages = {
    terrible: 0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.2,
  };

  // Check if the rating is recognized
  if (tipPercentages.hasOwnProperty(normalizedRating)) {
    // Calculate the tip, round up, and return
    return Math.ceil(amount * tipPercentages[normalizedRating]);
  }

  // Return message for unrecognized ratings
  return 'Rating not recognised';
}

/* 
Explanation:

Normalize the Rating:
The toLowerCase() method ensures case insensitivity by converting the rating input to lowercase.

Mapping Ratings:
A tipPercentages object is created to map rating descriptions to their respective tip percentages.

Validation:
hasOwnProperty checks if the provided rating exists in the tipPercentages object.

Tip Calculation:
If the rating is recognized, the tip is calculated as amount * percentage and rounded up using Math.ceil() to ensure generosity.

Handle Unrecognized Ratings:
If the rating is not in the tipPercentages object, the function returns "Rating not recognised".
*/
