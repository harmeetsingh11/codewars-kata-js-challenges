function zombieShootout(zombies, range, ammo) {
  const time = range * 2; // total seconds before zombies reach you
  const shots = Math.min(zombies, ammo, time); // actual zombies you can shoot

  if (shots === zombies) {
    return `You shot all ${shots} zombies.`;
  }

  // Edge case: ran out of ammo exactly when zombies reached you
  if (shots === ammo && shots === time) {
    return `You shot ${shots} zombies before being eaten: overwhelmed.`;
  }

  if (shots === ammo) {
    return `You shot ${shots} zombies before being eaten: ran out of ammo.`;
  }

  return `You shot ${shots} zombies before being eaten: overwhelmed.`;
}

console.log(zombieShootout(100, 10, 20));
// Output: "You shot 20 zombies before being eaten: overwhelmed."

/* 
### **Thought Process Behind the Solution:**

1. **Understand the Timeline**
   Zombies move at `0.5 m/s`, so:

   * If zombies start at `range` meters,
   * They take `range / 0.5 = range * 2` seconds to reach you.

2. **Shooting Logic**

   * You can shoot **1 zombie per second**.
   * You only have **`ammo`** bullets.
   * So, you can shoot at most `min(zombies, ammo, time)` zombies.

3. **Determine the Outcome**

   * If you shoot all zombies → you're safe.
   * If you run out of **ammo before time ends** → you get eaten (`ran out of ammo`).
   * If **zombies reach you before or exactly when you run out of ammo** → you get eaten (`overwhelmed`).
   * Special edge case: if **ammo runs out exactly when zombies reach you**, it counts as `overwhelmed` (not `ran out of ammo`).

---

### ⚡ **Quick Explanation:**

* Calculate how long until zombies reach you (`range * 2`).
* Calculate how many you can shoot (`min(zombies, ammo, time)`).
* Return:

  * **"You shot all X zombies"** if you kill all.
  * **"overwhelmed"** if zombies reach you (even if ammo runs out at the same time).
  * **"ran out of ammo"** if you still had time but no bullets left.

*/
