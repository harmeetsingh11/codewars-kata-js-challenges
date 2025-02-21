function append(listA, listB) {
  // If either list is null, return the non-null list (or null if both are null)
  if (!listA) return listB;
  if (!listB) return listA;

  // Find the tail of listA
  let current = listA;
  while (current.next) {
    current = current.next;
  }

  // Append listB to the tail of listA
  current.next = listB;

  return listA;
}

/*
### Explanation:
1. **Handle edge cases**:  
   - If `listA` is `null`, return `listB`.  
   - If `listB` is `null`, return `listA`.  
   - If both are `null`, return `null`.  

2. **Find the tail of `listA`**:  
   - Iterate through `listA` until we reach the last node (where `current.next === null`).  

3. **Append `listB` to the tail of `listA`**:  
   - Set `current.next = listB`, linking the two lists together.  

4. **Return the modified `listA`**, now containing both lists concatenated.

### Complexity:
- **Time Complexity**: \(O(N)\), where \(N\) is the length of `listA` (we traverse `listA` once).  
- **Space Complexity**: \(O(1)\), as we modify the existing list in place without extra memory.
*/
