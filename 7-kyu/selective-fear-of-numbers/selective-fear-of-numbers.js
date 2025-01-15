function amIAfraid(day, number) {
  // Define the conditions for each day
  const conditions = {
    Monday: (num) => num === 12, // Fear of the number 12
    Tuesday: (num) => num > 95, // Fear of numbers greater than 95
    Wednesday: (num) => num === 34, // Fear of the number 34
    Thursday: (num) => num === 0, // Fear of the number 0
    Friday: (num) => num % 2 === 0, // Fear of numbers divisible by 2
    Saturday: (num) => num === 56, // Fear of the number 56
    Sunday: (num) => num === 666 || num === -666, // Fear of 666 or -666
  };

  // Check if the given number matches the condition for the day
  return conditions[day](number);
}

console.log(amIAfraid('Monday', 12)); // true
console.log(amIAfraid('Tuesday', 100)); // true
console.log(amIAfraid('Wednesday', 33)); // false
console.log(amIAfraid('Friday', 4)); // true

/* 
Explanation:

Conditions Mapping: A conditions object maps each day of the week to a function that describes the fear condition for that day.
The function for each day takes a number and returns true if the number matches the fear condition, otherwise false.

Dynamic Evaluation: Based on the day string, the corresponding function is dynamically accessed and executed with the given number.

Efficient and Concise: The use of an object for conditions ensures clarity and avoids repetitive if-else or switch statements.

Boolean Return: The function directly returns the result of the condition check, making it concise and easy to read.
*/
