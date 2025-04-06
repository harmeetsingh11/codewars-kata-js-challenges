function controller(input) {
  let position = 0;
  let direction = 0; // 1 = opening, -1 = closing, 0 = paused
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const event = input[i];

    if (event === 'P') {
      // If paused, start moving. If moving, pause.
      if (direction === 0) {
        if (position === 0) direction = 1; // Start opening
        else if (position === 5) direction = -1; // Start closing
        else direction = lastDirection || 1; // Resume previous direction
      } else {
        lastDirection = direction; // Save current direction before pausing
        direction = 0;
      }
    } else if (event === 'O') {
      // Reverse direction immediately on obstacle
      direction = -direction || (position === 0 ? 1 : -1);
    }

    // Move door if direction is set
    if (direction !== 0) {
      position += direction;

      // Stop if we hit a boundary
      if (position <= 0) {
        position = 0;
        direction = 0;
      } else if (position >= 5) {
        position = 5;
        direction = 0;
      }
    }

    result.push(position);
  }

  return result.join('');
}

console.log(controller('..P...O.....')); // "001234321000"
console.log(controller('P.O.P...')); // "1222345555555555"
console.log(controller('P....O....P.....')); // "123455543233334555"
console.log(controller('..P..P...')); // "001122210"

/* 
### 🧠 **Intuition Behind the Problem**

You're simulating a **finite state machine** — at each second:
- The door is either **opening**, **closing**, or **paused**.
- It can **switch direction** when it hits an obstacle.
- It can **pause/resume** based on a button press.
- The position should update **immediately** when moving.

---

### ⚙️ Core Concepts:

| State        | Meaning                          |
|--------------|----------------------------------|
| `position`   | Door's current position (0–5)     |
| `direction`  | 1 = opening, -1 = closing, 0 = paused |
| `lastDirection` | Used to resume movement after a pause |

---

### 🧩 **How We Process Each Character (Second)**
1. **If 'P' is pressed:**
   - If door is **moving**, **pause** it.
   - If door is **paused**:
     - If at position `0`, begin **opening** (`direction = 1`)
     - If at `5`, begin **closing** (`direction = -1`)
     - Else, **resume** in the last direction.

2. **If 'O' (obstacle) is detected:**
   - Immediately **reverse** direction (e.g. from opening to closing).

3. **Update position**:
   - If `direction != 0`, move `+1` or `-1` accordingly.
   - Clamp position between 0 and 5.
   - If position hits 0 or 5, stop (`direction = 0`).

---

### ✅ **Approach Summary (Step-by-step):**

1. **Initialize**:
   - `position = 0` (fully closed)
   - `direction = 0` (stopped)
   - `lastDirection = null`
   - `result = []` to store each second's position.

2. **Iterate over input string**:
   - Process each character `'P'`, `'O'`, or `'.'` (nothing).
   - Based on event, modify `direction` and update `position`.
   - Save current `position` to `result`.

3. **Return result as string**.

---

### 🔁 Example Walkthrough: `"P.O.P..."`

| Sec | Event | Action                         | Pos | Dir |
|-----|-------|--------------------------------|-----|-----|
| 0   | P     | Start opening                  | 1   | 1   |
| 1   | .     | Move opening                   | 2   | 1   |
| 2   | O     | Reverse → closing              | 1   | -1  |
| 3   | .     | Move closing                   | 0   | 0   |
| 4   | P     | Start opening again            | 1   | 1   |
| 5   | .     | Move opening                   | 2   | 1   |
| 6   | .     | Move opening                   | 3   | 1   |
| 7   | .     | Move opening                   | 4   | 1   |

➡️ Output: `"12223455"`

---

This approach ensures:
- **Correct sequencing**
- **Immediate movement**
- **Safe boundary handling**
- **Obstacle and pause behavior** is respected precisely
*/
