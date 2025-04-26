// Siege Mode: tank cannot move, high damage
class SiegeState {
  canMove = false;
  damage = 20;
}

// Tank Mode: tank can move, low damage
class TankState {
  canMove = true;
  damage = 5;
}

// Tank class
class Tank {
  constructor() {
    this.state = new TankState(); // Start in TankState
  }

  // getter for canMove, dynamically read from current state
  get canMove() {
    return this.state.canMove;
  }

  // getter for damage, dynamically read from current state
  get damage() {
    return this.state.damage;
  }

  // Switch to SiegeState
  siegeMode() {
    this.state = new SiegeState();
  }

  // Switch to TankState
  tankMode() {
    this.state = new TankState();
  }
}

// Example
const tank = new Tank();
console.log(tank.canMove, tank.damage); // true, 5

tank.siegeMode();
console.log(tank.canMove, tank.damage); // false, 20

tank.tankMode();
console.log(tank.canMove, tank.damage); // true, 5
