# [Cost of my ride](https://www.codewars.com/kata/586430a5b3a675296a000395)

### Difficulty: `7 kyu`

### Tags: `Fundamentals` `Parsing` `Strings`

## Description

Create a function, called insurance(), that computes the cost of renting a car. The function takes 3 arguments: the age of the renter, the size of the car, and the number days for the rental. The function should return an integer number of the calculated total cost of the rental.

Age (integer) : There is a daily charge of $10 if the driver is under 25

Car Size (string) : There may be an additional daily charge based on the car size:

car size surcharge "economy" $0 "medium" $10 "full-size" $15

Rental Days (integer) : There is a base daily charge of $50 for renting a car. Simply multiply the one day cost by the number of days the car is rented in order to get the full cost.

Note: Negative rental days should return 0 cost. Any other car size NOT listed should come with a same surcharge as the "full-size", $15.

```js
insurance(18, "medium", 7); // => 490
insurance(30,"full-size",30); // => 1950
insurance(21,"economy",-10); // => 0
insurance(42,"my custom car",7); // => 455
```