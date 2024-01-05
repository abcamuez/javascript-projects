// Declare and assign the variables below
let spaceShuttleName = 'Determination'; 
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToTheMoonKm = 384400;
let milesPerKm = 0.621; 
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToTheMoonKm);
console.log(typeof milesPerKm);
// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKm;
console.log(milesToMars);

let hoursToMars = milesToMars / shuttleSpeedMph;
console.log(hoursToMars);

let daysToMars = hoursToMars / 24;
console.log(daysToMars);
// Print the results of the space mission calculations below
console.log(spaceShuttleName, "will take", daysToMars, "days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = distanceToTheMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log(daysToMoon);
// Print the results of the trip to the moon below
console.log(spaceShuttleName, "will take", daysToMoon, "days to reach the Moon");