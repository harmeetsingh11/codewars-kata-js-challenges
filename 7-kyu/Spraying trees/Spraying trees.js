function task(w, n, c) {
  // Define an object with weekdays as keys and worker names as values
  const workers = {
    Monday: 'James',
    Tuesday: 'John',
    Wednesday: 'Robert',
    Thursday: 'Michael',
    Friday: 'William',
  };

  // Calculate the total cost of liquid
  const totalCost = n * c;

  // Return the formatted string with the appropriate details
  return `It is ${w} today, ${workers[w]}, you have to work, you must spray ${n} trees and you need ${totalCost} dollars to buy liquid`;
}

console.log(task('Monday', 15, 2));
// Output: 'It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid'

/* 
Explanation:

Workers Mapping: We use an object workers to map the weekdays to the corresponding worker names, making it easy to look up the worker based on the day.

Cost Calculation: The total cost totalCost is calculated by multiplying the number of trees (n) by the cost per 
litre (c).

String Formatting: We use template literals to create the output string, inserting the weekday, worker name, number of trees, and total cost dynamically.
*/
