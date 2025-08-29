function juicePrice(fruits) {
  // Price mapping for known fruits
  const prices = {
    banana: 5,
    orange: 5,
    apple: 5,
    lemon: 5,
    grapes: 5,
    avocado: 7,
    strawberry: 7,
    mango: 7,
  };

  // Convert fruit names to lowercase and map them to prices
  const total = fruits.reduce((sum, fruit) => {
    const price = prices[fruit.toLowerCase()] || 9; // 9 for extra special fruits
    return sum + price;
  }, 0);

  // Calculate average and round to nearest integer
  return Math.round(total / fruits.length);
}

// Input:
juicePrice(['Mango', 'Banana', 'Avocado']);

/*
Steps:

* Mango → \$7
* Banana → \$5
* Avocado → \$7

Total = `7 + 5 + 7 = 19`
Average = `19 / 3 = 6.33`
Rounded = **6**

Output: 6
*/

/*
We need to calculate the **average cost of selected fruits** based on their categories (regular, special, extra special) and then round it to the nearest integer.

---
### 💡 Approach

1. Define a **price lookup table** for fruits:

   * Regular fruits → `$5`
   * Special fruits → `$7`
   * Any other fruit → `$9`
2. Convert input fruit names to **lowercase** for case-insensitive matching.
3. Map each fruit to its corresponding price.
4. Compute the **mean (average)**.
5. Return the **rounded result** (`Math.round`).

---
This solution is:

* **Optimized** → single pass with `reduce`
* **Concise** → minimal logic, direct lookup
* **Efficient** → O(n) where n = number of fruits
*/
