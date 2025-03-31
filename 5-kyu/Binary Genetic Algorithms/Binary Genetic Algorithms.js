class GeneticAlgorithm {
  // Generate a random binary chromosome of given length
  generate(length) {
    return Array.from({ length }, () => (Math.random() < 0.5 ? '0' : '1')).join(
      ''
    );
  }

  // Perform crossover on two chromosomes with a given probability
  crossover(chromosome1, chromosome2, pC) {
    if (Math.random() > pC) return [chromosome1, chromosome2]; // No crossover
    const point = Math.floor(Math.random() * chromosome1.length);
    const child1 = chromosome1.slice(0, point) + chromosome2.slice(point);
    const child2 = chromosome2.slice(0, point) + chromosome1.slice(point);
    return [child1, child2];
  }

  // Mutate a chromosome with a given probability
  mutate(chromosome, pM) {
    return chromosome
      .split('')
      .map((bit) => (Math.random() < pM ? (bit === '0' ? '1' : '0') : bit))
      .join('');
  }

  // Select two chromosomes from the population using roulette wheel selection
  select(population, fitnesses) {
    const totalFitness = fitnesses.reduce((sum, f) => sum + f, 0);
    const pick = () => {
      let r = Math.random() * totalFitness;
      for (let i = 0; i < population.length; i++) {
        r -= fitnesses[i];
        if (r <= 0) return population[i];
      }
      return population[population.length - 1];
    };
    return [pick(), pick()];
  }

  // Main execution method
  run(fitnessFn, length, pC = 0.6, pM = 0.002, iterations = 100) {
    const populationSize = 100;
    let population = Array.from({ length: populationSize }, () =>
      this.generate(length)
    );

    for (let iter = 0; iter < iterations; iter++) {
      const fitnesses = population.map(fitnessFn);

      // Create new population
      const newPopulation = [];
      while (newPopulation.length < populationSize) {
        const [p1, p2] = this.select(population, fitnesses);
        let [child1, child2] = this.crossover(p1, p2, pC);
        child1 = this.mutate(child1, pM);
        child2 = this.mutate(child2, pM);
        newPopulation.push(child1, child2);
      }

      population = newPopulation.slice(0, populationSize);
    }

    // Return the fittest chromosome
    const fitnesses = population.map(fitnessFn);
    const fittestIndex = fitnesses.indexOf(Math.max(...fitnesses));
    return population[fittestIndex];
  }
}

// Example
const goal = '110101100111001101010101111000101'; // Random goal chromosome
const fitnessFn = (chromosome) => {
  // Fitness is based on how many bits match the goal
  return chromosome
    .split('')
    .reduce((acc, bit, i) => acc + (bit === goal[i] ? 1 : 0), 0);
};

// Run the algorithm
const ga = new GeneticAlgorithm();
const best = ga.run(fitnessFn, goal.length);
console.log(`Goal:    ${goal}`);
console.log(`Best:    ${best}`);
console.log(`Fitness: ${fitnessFn(best)} / ${goal.length}`);

/*
### **Explanation**

1. **Chromosome Representation**
   - Each chromosome is a binary string.
   - `generate()` creates a random binary string of given length.

2. **Crossover**
   - With a `pC` (crossover probability of 0.6), chromosomes swap portions at a random point.

3. **Mutation**
   - With a `pM` (mutation probability of 0.002), individual bits are flipped randomly.

4. **Roulette Wheel Selection**
   - Chromosomes are selected based on fitness proportionate to their score.
   - Higher fitness chromosomes have a higher probability of being selected.

5. **Execution Loop**
   - The algorithm iterates through the population, applying crossover and mutation to generate a new population.
   - After the iterations, the fittest chromosome is returned.

### **Key Points**
- **Efficient Selection:** Roulette wheel selection favors fitter chromosomes.
- **Concise Logic:** Compact and modularized functions.
- **Scalable:** Works efficiently with larger chromosome sizes and populations.
- **Configurable:** Crossover and mutation probabilities are easily adjustable.
*/
