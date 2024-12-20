function flyBy(lamps, drone) {
  // Determine the length of the drone's path (how many lamps it can turn on)
  const litLamps = Math.min(lamps.length, drone.length);

  // Construct the resulting string:
  // - Take the first `litLamps` characters of lamps and replace them with 'o'
  // - Leave the rest of the lamps as 'x'
  return 'o'.repeat(litLamps) + lamps.slice(litLamps);
}

// Examples
console.log(flyBy('xxxxxx', '====T')); // Output: "ooooox"
console.log(flyBy('xxxxxxxxx', '==T')); // Output: "oooxxxxxx"
console.log(flyBy('xxxxxx', 'T')); // Output: "oxxxxx"

/* 
Explanation:

Math.min(lamps.length, drone.length):
The number of lamps that will turn on is the smaller of the lengths of the lamps string and the drone string. This ensures we don’t try to light lamps outside the lamps string.

'o'.repeat(litLamps):
Creates a string with litLamps number of o characters, representing the lamps that are turned on.

lamps.slice(litLamps):
Extracts the remaining part of the lamps string (those lamps that are still off).

Concatenation:
Combines the lit lamps (o string) and the remaining off lamps (lamps.slice(litLamps)).

Efficiency:
Time complexity: O(n), where n is the length of the lamps string, due to the slicing and concatenation.
Space complexity: O(n), for the resulting string.
*/
