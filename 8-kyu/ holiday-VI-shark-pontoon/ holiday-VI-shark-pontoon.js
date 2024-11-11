function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  // If dolphin is present, shark speed is halved
  if (dolphin) sharkSpeed /= 2;

  // Calculate time for you and the shark to reach the pontoon
  const yourTime = pontoonDistance / youSpeed;
  const sharkTime = sharkDistance / sharkSpeed;

  // Return "Alive!" if you reach the pontoon first, else "Shark Bait!"
  return yourTime < sharkTime ? 'Alive!' : 'Shark Bait!';
}

/* 
Explanation:

Shark Speed Adjustment:
If dolphin is true, the shark’s speed is halved, as the dolphin distracts it.

Time Calculation:
Calculate yourTime as the time it takes for you to reach the pontoon (pontoonDistance / youSpeed).
Calculate sharkTime as the time it takes for the shark to reach the pontoon (sharkDistance / sharkSpeed).

Comparison:
If yourTime is less than sharkTime, you reach the pontoon before the shark, so return "Alive!". Otherwise, return "Shark Bait!".
*/
