function isValidFormula(formula) {
  // Convert formula array to a Set for faster lookup
  const set = new Set(formula);

  // Rule 1: material1 and material2 cannot be selected at the same time
  if (set.has(1) && set.has(2)) return false;

  // Rule 2: material3 and material4 cannot be selected at the same time
  if (set.has(3) && set.has(4)) return false;

  // Rule 3: material5 and material6 must be selected at the same time
  if (set.has(5) !== set.has(6)) return false;

  // Rule 4: material7 or material8 must be selected (at least one)
  if (!set.has(7) && !set.has(8)) return false;

  // If all rules are satisfied, the formula is valid
  return true;
}

// Test Cases
console.log(isValidFormula([1, 3, 7])); // true
console.log(isValidFormula([7, 1, 2, 3])); // false
console.log(isValidFormula([1, 3, 5, 7])); // false
console.log(isValidFormula([1, 5, 6, 7, 3])); // true
console.log(isValidFormula([5, 6, 7])); // true
console.log(isValidFormula([5, 6, 7, 8])); // true
console.log(isValidFormula([6, 7, 8])); // false
console.log(isValidFormula([7, 8])); // true

/* 
Explanation:

Use of a Set: Converting the formula array to a Set allows for efficient O(1) lookup for each material.
Rule 1 and Rule 2: Checks if conflicting materials (e.g., 1 & 2, or 3 & 4) are both present in the Set.
Rule 3: Ensures materials 5 and 6 are either both present or both absent using a strict equality check.
Rule 4: Ensures at least one of material 7 or 8 is present using a logical OR condition.
Return true if all rules are satisfied: The function returns true only if all conditions are met.

This solution is efficient, with a time complexity of O(n), where n is the size of the input array.
*/
