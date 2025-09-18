// Base Marine class
class Marine {
  constructor(_damage, _armor) {
    this._damage = _damage; // base damage
    this._armor = _armor; // base armor
  }

  // Getters and setters for encapsulation
  get damage() {
    return this._damage;
  }
  set damage(value) {
    this._damage = value;
  }

  get armor() {
    return this._armor;
  }
  set armor(value) {
    this._armor = value;
  }
}

// Decorator: Weapon Upgrade
class MarineWeaponUpgrade {
  constructor(marine) {
    this.marine = marine; // store original marine instance
  }

  // Damage is incremented by 1 compared to base marine
  get damage() {
    return this.marine.damage + 1;
  }
  set damage(value) {
    this.marine.damage = value;
  }

  // Armor stays the same
  get armor() {
    return this.marine.armor;
  }
  set armor(value) {
    this.marine.armor = value;
  }
}

// Decorator: Armor Upgrade
class MarineArmorUpgrade {
  constructor(marine) {
    this.marine = marine; // store original marine instance
  }

  // Damage stays the same
  get damage() {
    return this.marine.damage;
  }
  set damage(value) {
    this.marine.damage = value;
  }

  // Armor is incremented by 1 compared to base marine
  get armor() {
    return this.marine.armor + 1;
  }
  set armor(value) {
    this.marine.armor = value;
  }
}

// example:
let marine = new Marine(5, 2);
console.log(marine.damage, marine.armor); // 5 2

marine = new MarineWeaponUpgrade(marine);
console.log(marine.damage, marine.armor); // 6 2

marine = new MarineArmorUpgrade(marine);
console.log(marine.damage, marine.armor); // 6 3

/*
### 🔎 Explanation

* **Marine class**:
  Holds the base stats (`damage`, `armor`).
  Uses getters and setters so values can be updated dynamically.

* **Decorator classes (Weapon/Armor Upgrade)**:

  * They **wrap** an existing `Marine` object.
  * They delegate unchanged properties back to the original marine.
  * They **add +1** to either `damage` (Weapon Upgrade) or `armor` (Armor Upgrade).
  * This allows stacking upgrades by passing an already upgraded marine into another decorator.

*/
