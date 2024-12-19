function flickSwitch(arr) {
  let currentValue = true; // Initialize with True
  return arr.map((item) => {
    if (item === 'flick') {
      currentValue = !currentValue; // Toggle the boolean value on encountering 'flick'
    }
    return currentValue; // Return the current boolean value
  });
}

// Examples
console.log(flickSwitch(['codewars', 'flick', 'code', 'wars'])); // ➞ [True, False, False, False]
console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine'])); // ➞ [False, False, False, False]
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])); // ➞ [True, True, False, False, True]

/* 
Explanation:

currentValue Initialization:
The currentValue is initialized as true since the function starts by returning true unless a 'flick' is encountered.

map Method:
The map function is used to iterate over the array, transforming each element into the current boolean value.

Toggle on 'flick':
When the element is 'flick', the currentValue is toggled using !currentValue. This ensures that the boolean value switches between true and false as required.

Return the Value:
For each element, the current value of currentValue (after potential toggling) is returned.

This solution processes the array in a single pass (O(n) complexity) and is concise, leveraging JavaScript's built-in map function for transformation.
*/
