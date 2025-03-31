const findEmployeeRole = (name, employees) => {
  // Split the name into first and last names, handling cases with only one name.
  const [firstName, lastName = ''] = name.split(' ');

  // Find the matching employee by first and last names.
  const employee = employees.find(
    (emp) => emp.firstName === firstName && emp.lastName === lastName
  );

  // Return the role or "Does not work here!" if not found.
  return employee ? employee.role : 'Does not work here!';
};

// example
let employees = [
  { firstName: 'Dipper', lastName: 'Pines', role: 'Boss' },
  { firstName: 'Mabel', lastName: 'Pines', role: 'Co-Boss' },
  { firstName: 'Wendy', lastName: 'Corduroy', role: 'Assistant' },
];

console.log(findEmployeeRole('Dipper Pines', employees)); // Output: "Boss"
console.log(findEmployeeRole('Mabel Pines', employees)); // Output: "Co-Boss"
console.log(findEmployeeRole('Stan Pines', employees)); // Output: "Does not work here!"
console.log(findEmployeeRole('Wendy', employees)); // Output: "Assistant"

/*
**Explanation:**
1. **Splitting the name:**  
   - `const [firstName, lastName = ""] = name.split(" ")` → This destructures the name into `firstName` and `lastName`. If only one name is provided, `lastName` defaults to an empty string.
   
2. **Finding the employee:**  
   - `.find()` → Iterates over the `employees` array and returns the first match where `firstName` and `lastName` both match the provided name.

3. **Return statement:**  
   - If an employee is found, their `role` is returned.  
   - If not, it returns `"Does not work here!"`.

This solution is concise, efficient, and readable, using find() for O(n) time complexity, which is optimal for this task.
*/
