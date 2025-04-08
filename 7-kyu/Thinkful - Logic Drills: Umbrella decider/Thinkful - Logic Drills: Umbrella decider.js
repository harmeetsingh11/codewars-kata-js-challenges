function take_umbrella(weather, rain_chance) {
  // Return true if:
  // - it's raining
  // - OR it's cloudy AND the chance of rain is more than 20%
  // - OR it's sunny AND the chance of rain is more than 50%
  return (
    weather === 'rainy' ||
    (weather === 'cloudy' && rain_chance > 0.2) ||
    (weather === 'sunny' && rain_chance > 0.5)
  );
}

console.log(take_umbrella('sunny', 0.4)); // false
console.log(take_umbrella('sunny', 0.6)); // true
console.log(take_umbrella('cloudy', 0.25)); // true
console.log(take_umbrella('cloudy', 0.1)); // false
console.log(take_umbrella('rainy', 0.0)); // true

/*
### Explanation:
- `weather === 'rainy'`: Always take an umbrella if it's already raining.
- `weather === 'cloudy' && rain_chance > 0.2`: Take one if it’s cloudy *and* there's a significant chance of rain.
- `weather === 'sunny' && rain_chance > 0.5`: Only take one in sunny weather if rain is **more likely than not**.
*/
