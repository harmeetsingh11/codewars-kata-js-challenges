function feast(beast, dish) {
  // Check if the first and last letters of beast match those of the dish
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

/* 
Explanation:

First and Last Letter Comparison:
We check if the first letter of beast (beast[0]) is the same as the first letter of dish (dish[0]).
We also check if the last letter of beast (beast[beast.length - 1]) matches the last letter of dish (dish[dish.length - 1]).

Return Result:
If both the first and last letters match, the function returns true, allowing the animal to bring the dish. Otherwise, it returns false.
*/
