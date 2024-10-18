function bump(road) {
  // Count the occurrences of 'n' (bumps) in the road string
  const bumps = road.split('n').length - 1;

  // If there are 15 or fewer bumps, return "Woohoo!", otherwise return "Car Dead"
  return bumps <= 15 ? 'Woohoo!' : 'Car Dead';
}

/* 
Explanation:

road.split('n'):
The split method breaks the string at every occurrence of 'n' (bump), returning an array.
For example, "__n_n_" becomes ["__", "_", "_"]. The length of this array is the number of segments between bumps plus one, so subtracting 1 gives the actual count of 'n'.

Check the number of bumps:
The variable bumps holds the number of bumps in the road.
If the number of bumps is less than or equal to 15, it returns "Woohoo!", otherwise it returns "Car Dead".

This approach is both concise and efficient since it uses built-in methods to count bumps and then directly checks the condition, resulting in optimal time complexity.
*/
