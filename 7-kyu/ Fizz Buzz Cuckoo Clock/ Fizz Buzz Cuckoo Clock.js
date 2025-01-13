function fizzBuzzCuckooClock(time) {
  // Split the input time into hours and minutes
  const [hours, minutes] = time.split(':').map(Number);

  // Handle the special cases for the hour and half-hour
  if (minutes === 0) {
    // On the hour, cuckoo 1 to 12 times based on the 12-hour clock
    const hourCount = hours % 12 || 12; // Convert 24-hour clock to 12-hour clock
    return 'Cuckoo '.repeat(hourCount).trim();
  }
  if (minutes === 30) {
    // On the half-hour, cuckoo once
    return 'Cuckoo';
  }

  // Handle Fizz, Buzz, and Fizz Buzz cases
  if (minutes % 15 === 0) {
    return 'Fizz Buzz';
  }
  if (minutes % 3 === 0) {
    return 'Fizz';
  }
  if (minutes % 5 === 0) {
    return 'Buzz';
  }

  // For all other minutes, return 'tick'
  return 'tick';
}

// Test cases
console.log(fizzBuzzCuckooClock('13:34')); // "tick"
console.log(fizzBuzzCuckooClock('21:00')); // "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
console.log(fizzBuzzCuckooClock('11:15')); // "Fizz Buzz"
console.log(fizzBuzzCuckooClock('03:03')); // "Fizz"
console.log(fizzBuzzCuckooClock('14:30')); // "Cuckoo"
console.log(fizzBuzzCuckooClock('08:55')); // "Buzz"
console.log(fizzBuzzCuckooClock('00:00')); // "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
console.log(fizzBuzzCuckooClock('12:00')); // "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"

/* 
Explanation of the Code

Parsing Input: The input time string is split into hours and minutes using split(':'). The map(Number) ensures these values are converted to numbers.

Special Cases:
On the Hour (minutes === 0): The clock "cuckoos" between 1 to 12 times, corresponding to the hour in 12-hour format. The modulo operation % 12 handles the conversion, with || 12 ensuring midnight and noon are treated correctly.
Half-Hour (minutes === 30): The clock "cuckoos" once.

Fizz Buzz Logic:
minutes % 15 === 0: For minutes divisible by both 3 and 5, return "Fizz Buzz".
minutes % 3 === 0: For minutes divisible by 3, return "Fizz".
minutes % 5 === 0: For minutes divisible by 5, return "Buzz".

Default Case: For all other minutes, return "tick".
*/
