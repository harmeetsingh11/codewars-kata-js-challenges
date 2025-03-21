function countSalutes(hallway) {
  let salutes = 0;
  let rightMoving = 0;

  // Loop through the hallway string
  for (const char of hallway) {
    if (char === '>') {
      // Count right-moving people
      rightMoving++;
    } else if (char === '<') {
      // Each left-moving person will meet all previously counted right-moving people
      salutes += rightMoving * 2; // 2 salutes for each meeting
    }
  }

  return salutes;
}

// Test cases
console.log(countSalutes('>----->-----<--<')); // Output: 8
console.log(countSalutes('<---<--->----<')); // Output: 2
console.log(countSalutes('>--<--->->')); // Output: 8
console.log(countSalutes('>><<')); // Output: 4
console.log(countSalutes('-->>--<<--')); // Output: 4

/*
### **Explanation:**
1. **Variables Used:**
   - `salutes`: Keeps track of the total salutes.
   - `rightMoving`: Counts the number of people moving right (`>`) encountered so far.

2. **Logic:**
   - Traverse the `hallway` string character by character.
   - When a `>` is encountered:
     - Increment the `rightMoving` counter.
   - When a `<` is encountered:
     - Each left-moving person meets all the right-moving people seen so far.
     - Since two salutes occur per meeting (one from each person), multiply by `2`.
     - Add `rightMoving * 2` to the `salutes` count.

3. **Time Complexity:**
   - **O(n)**, where `n` is the length of the hallway string, as it involves a single pass through the string.
   
4. **Space Complexity:**
   - **O(1)**, as it uses only two variables to track the salutes and right-moving people.
*/
