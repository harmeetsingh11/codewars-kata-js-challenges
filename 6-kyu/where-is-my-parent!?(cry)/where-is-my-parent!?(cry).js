function arrangeDanceParty(input) {
  // Create a map to group children with their mothers
  const groups = {};

  // Iterate over each character in the input string
  for (const char of input) {
    const isMother = char === char.toUpperCase(); // Check if uppercase (mother)
    const key = char.toUpperCase(); // Group by mother's uppercase letter
    groups[key] = (groups[key] || '') + char; // Add the character to its group
  }

  // Sort mothers alphabetically and ensure mothers are followed by children
  return Object.keys(groups)
    .sort() // Alphabetical order of mothers
    .map((mother) => {
      const group = groups[mother];
      const motherChar = mother; // Extract the mother character
      const children = group.replace(motherChar, ''); // Remove the mother to leave only children
      return motherChar + children; // Mother comes first, followed by her children
    })
    .join(''); // Join all groups into a single string
}

// Example
console.log(arrangeDanceParty('bBbeeeE')); // Output: "BbbEeee"

/* 
Explanation

1. Initialization of Groups:  
   A `groups` object is created to group mothers (uppercase letters) and their corresponding children (lowercase letters) together. Each uppercase letter is treated as a key, and all characters associated with it are added to the value string.

2. Iteration Over Input:  
   The function iterates through the input string character by character. For each character:
   - If it's an uppercase letter (a mother), it's used as the key.
   - If it's a lowercase letter (a child), it's associated with its uppercase equivalent as the key. This ensures that mothers and children are grouped together regardless of their order in the input.

3. Sorting Mothers Alphabetically:  
   The keys of the `groups` object, which represent mothers, are sorted alphabetically. This step ensures that the final arrangement places mothers and their groups in the correct order.

4. Reconstructing the Output:  
   For each mother in the sorted list:
   - The corresponding group is retrieved from the `groups` object.
   - The mother is separated from the children in the group. This ensures that the mother always appears first in the output.
   - The mother and her children are combined back in the correct order.

5. Combining All Groups:  
   After processing each mother, the reconstructed groups are joined together into a single string. This string is the final result, where all mothers are followed by their children, and the mothers are arranged alphabetically.

6. Return Statement:  
   The final arranged string is returned as the output of the function.
*/
