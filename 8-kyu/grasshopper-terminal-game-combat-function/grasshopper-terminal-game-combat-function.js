function combat(health, damage) {
  // Subtract damage from health and ensure the result is at least 0
  return Math.max(0, health - damage);
}

/* 
Explanation:
Subtraction: health - damage calculates the new health by reducing the current health by the damage amount.
Boundary Check with Math.max: The Math.max function ensures the new health is not less than 0, even if the damage exceeds the current health.
*/
