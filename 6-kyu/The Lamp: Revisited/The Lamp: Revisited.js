// Define the Lamp class
class Lamp {
  // Constructor initializes color and sets 'on' to false
  constructor(color) {
    this.color = color; // Store lamp color
    this.on = false; // Lamp is initially off
  }

  // Method to toggle the on/off state
  toggleSwitch() {
    this.on = !this.on; // Flip the boolean value
  }

  // Method to return the current state as a string
  state() {
    return `The lamp is ${this.on ? 'on' : 'off'}.`; // Use ternary for concise check
  }
}

const lamp = new Lamp('blue');
console.log(lamp.state()); // The lamp is off.
lamp.toggleSwitch();
console.log(lamp.state()); // The lamp is on.

/*
### Explanation:
- **`constructor(color)`**: Sets the color and initializes `on` to `false`.
- **`toggleSwitch()`**: Uses a simple boolean flip (`!`) to toggle the lamp.
- **`state()`**: Returns a string describing whether the lamp is on or off, using a ternary operator for brevity.
*/
