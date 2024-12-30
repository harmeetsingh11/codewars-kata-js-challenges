function findKiller(suspects, dead) {
  // Iterate over the suspects object
  for (const [suspect, seenPeople] of Object.entries(suspects)) {
    // Check if all dead people are in the list of people seen by the suspect
    if (dead.every((person) => seenPeople.includes(person))) {
      return suspect; // Return the suspect if all conditions are met
    }
  }
  return null; // Return null if no killer is found
}

// Example
const suspects = {
  James: ['Jacob', 'Bill', 'Lucas'],
  Johnny: ['David', 'Kyle', 'Lucas'],
  Peter: ['Lucy', 'Kyle'],
};
const dead = ['Lucas', 'Bill'];

// Find the killer
const killer = findKiller(suspects, dead);
console.log(killer); // Output: 'James'

/* 
Explanation:
Iterate through suspects: Use Object.entries to get key-value pairs of the suspects object for iteration.
Check all dead people: Use the every method to ensure all elements in the dead list are present in the seenPeople array.
Return the killer: If the condition is met, return the suspect's name immediately.
Default case: Return null if no suspect satisfies the condition.
*/
