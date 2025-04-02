class Plugboard {
  constructor(wires = '') {
    if (wires.length > 20 || wires.length % 2 !== 0) {
      throw new Error('Invalid wiring configuration');
    }

    this.map = new Map();
    for (let i = 0; i < wires.length; i += 2) {
      const a = wires[i],
        b = wires[i + 1];
      if (this.map.has(a) || this.map.has(b)) {
        throw new Error('Duplicate wire assignment');
      }
      this.map.set(a, b);
      this.map.set(b, a);
    }
  }

  process(char) {
    return this.map.get(char) || char; // If char is mapped, return its pair, else return unchanged
  }
}

const plugboard = new Plugboard('ABCDEFGHIJKLMNOPQRST');
console.log(plugboard.process('A')); // "B"
console.log(plugboard.process('B')); // "A"
console.log(plugboard.process('X')); // "X"
console.log(plugboard.process('.')); // "."

/* 
### Explanation:
1. **Validation**:  
   - Ensures the `wires` string length is at most **20** (max 10 pairs).
   - Ensures the length is even (each letter must have a pair).
   - Checks for duplicate letter assignments.

2. **Mapping Wires**:  
   - Uses a `Map` to store bidirectional mappings between letters.

3. **Processing a Character**:  
   - If the character exists in the map, return its paired letter.
   - Otherwise, return the character unchanged.

This ensures an **efficient** O(1) lookup for character translations.
*/
