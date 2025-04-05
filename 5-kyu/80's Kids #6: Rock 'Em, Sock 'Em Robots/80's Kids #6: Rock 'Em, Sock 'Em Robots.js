function fight(robot1, robot2, tactics) {
  // Clone health and tactics to avoid mutating the original objects
  let r1Health = robot1.health;
  let r2Health = robot2.health;
  let r1Tactics = [...robot1.tactics];
  let r2Tactics = [...robot2.tactics];

  // Decide who attacks first based on speed or input order
  let turn = robot1.speed >= robot2.speed ? 0 : 1; // 0: robot1, 1: robot2

  // Loop continues as long as at least one robot has tactics left and both are alive
  while (
    (r1Tactics.length || r2Tactics.length) &&
    r1Health > 0 &&
    r2Health > 0
  ) {
    if (turn === 0 && r1Tactics.length) {
      r2Health -= tactics[r1Tactics.shift()] || 0;
    } else if (turn === 1 && r2Tactics.length) {
      r1Health -= tactics[r2Tactics.shift()] || 0;
    }
    // Alternate turn
    turn = 1 - turn;
  }

  // Decide winner or draw based on final health
  if (r1Health > r2Health) return `${robot1.name} has won the fight.`;
  if (r2Health > r1Health) return `${robot2.name} has won the fight.`;
  return 'The fight was a draw.';
}

/* 
## **Intuition:**
Imagine two robots taking turns hitting each other using their unique tactics (like moves in a turn-based game). Each robot starts with some health and a list of attacks that deal specific damage. They alternate turns — one attack at a time — until one robot's health hits zero or both run out of attacks.

---

## **Approach:**

### 1. **Determine Turn Order**
- The robot with **higher speed attacks first**.
- If both have the same speed, **robot1 attacks first** (as per problem statement).

### 2. **Set Up Robot States**
- Clone the `health` and `tactics` from each robot — this prevents mutating the original input.
- Track whose turn it is (`turn = 0` for robot1, `turn = 1` for robot2).

### 3. **Battle Loop**
- Keep fighting **as long as**:
  - At least **one robot has tactics left**, **and**
  - Both robots are **still alive** (`health > 0`).
  
- On each turn:
  - If the attacking robot has a tactic left, apply that tactic’s damage to the opponent's health.
  - Switch turn to the other robot.

### 4. **Determine the Winner**
- After the loop ends (someone dies or both run out of tactics):
  - If one robot’s health is greater → they win.
  - If healths are equal → it’s a draw.

---

## Example Flow:

```js
robot1: { health: 100, speed: 20, tactics: ['punch', 'laser'] }
robot2: { health: 100, speed: 25, tactics: ['missile'] }

tactics: { punch: 20, laser: 30, missile: 35 }
```

- robot2 attacks first → uses "missile" → robot1 health becomes 65.
- robot1 attacks → uses "punch" → robot2 health becomes 80.
- robot2 has no more tactics, skips next.
- robot1 attacks again → uses "laser" → robot2 health becomes 50.
- Both out of tactics → robot1 health (65) > robot2 health (50) → robot1 wins.

*/
