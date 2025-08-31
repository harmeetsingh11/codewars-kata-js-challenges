// Marine class (Light unit)
class Marine {
  constructor() {
    this.health = 100; // initial health
  }

  // Delegate to visitor's method for Light units
  accept(visitor) {
    visitor.visitLight(this);
  }
}

// Marauder class (Armored unit)
class Marauder {
  constructor() {
    this.health = 125; // initial health
  }

  // Delegate to visitor's method for Armored units
  accept(visitor) {
    visitor.visitArmored(this);
  }
}

// Visitor: TankBullet knows how to deal damage based on unit type
class TankBullet {
  // Marines are Light → 21 damage
  visitLight(unit) {
    unit.health -= 21;
  }

  // Marauders are Armored → 32 damage
  visitArmored(unit) {
    unit.health -= 32;
  }
}

// Example usage:
const marine = new Marine();
const marauder = new Marauder();
const bullet = new TankBullet();

marine.accept(bullet); // Marine takes 21 damage
marauder.accept(bullet); // Marauder takes 32 damage

console.log(marine.health); // 79
console.log(marauder.health); // 93

/*
We’ll solve this using the **Visitor Design Pattern**. The key idea is that the `TankBullet` (visitor) knows how to handle different unit types (`Marine`, `Marauder`). Each unit delegates the handling to the visitor through `accept`.

### 🔎 Explanation

1. **Marine** and **Marauder** both have a `health` property and an `accept(visitor)` method.

   * `Marine.accept(visitor)` calls `visitor.visitLight(this)`.
   * `Marauder.accept(visitor)` calls `visitor.visitArmored(this)`.

2. **TankBullet** (the visitor) defines:

   * `visitLight(unit)` → subtracts **21** health.
   * `visitArmored(unit)` → subtracts **32** health.

3. **Polymorphism in action**:
   Instead of `TankBullet` having to check `if (unit is Marine)` or `if (unit is Marauder)`,
   each unit tells the visitor which method to call. This keeps the design clean, extensible, and follows the **Visitor Design Pattern**.
*/
