function tankvol(h, d, vt) {
  // Calculate the radius of the cylinder base
  const r = d / 2;

  // Calculate the full area of the cylinder's circular base
  const baseArea = Math.PI * r ** 2;

  // Calculate the total height of the cylinder using volume and base area
  const totalHeight = vt / baseArea;

  // Remaining volume calculation using circular segment area formula
  const theta = Math.acos((r - h) / r); // Angle subtended by liquid at the cylinder's center
  const segmentArea = r ** 2 * (theta - Math.sin(2 * theta) / 2); // Area of liquid segment
  const remainingVolume = segmentArea * totalHeight; // Volume is proportional to height

  // Return the truncated (floor) value of the calculated volume
  return Math.floor(remainingVolume);
}

/* 
Explanation:

Calculate the radius:
The radius r is half the diameter (r=d/2)

Calculate the base area:
The base area is the area of a circle: baseArea=πr^2

Determine the total cylinder height:
Using the formula for the volume of a cylinder, V=baseArea×totalHeight, the total height is totalHeight=vt/baseArea
​
Calculate the remaining volume using the circular segment area:
Use the angle θ=cos^−1 (r−h)/r to calculate the circular segment.
The segment area formula is A=r^2 (θ− (sin(2θ)/2))
​
 ), which gives the cross-sectional area of the liquid in the cylinder.
Multiply the segment area by the total cylinder height to get the remaining liquid volume.
Return the truncated result:

Use Math.floor to truncate the volume to an integer.

Example Outputs:
tankvol(40, 120, 3500) → 1021 (approx 1021.27).
tankvol(60, 120, 3500) → 1750
tankvol(80, 120, 3500) → 2478 (approx 2478.73).
*/
