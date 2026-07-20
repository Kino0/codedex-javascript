const earth_weight = 65 * 2.20462; // Convert Kg to Libras

// Earth gravity equals to 9,8 m/s² 
// Moon gravity equals to 1,62 m/s² 
// Mars gravity equals to 3,71 m/s²
// Ratio: Moon x Earth between is 1,62 / 9,8 = 0.165 % Earth gravity
// Ratio: Mars x Earth between is 3,71 / 9,8 = 0.38 % Earth gravity

const moon_weight = earth_weight * 0.165;
const mars_weight = earth_weight * 0.38;

console.log("Your weight on Earth is " + earth_weight.toFixed(0) + " pounds.");
console.log("Your weight on Moon is " + moon_weight.toFixed(0) + " pounds.");
console.log("Your weight on Mars is " + mars_weight.toFixed(0) + " pounds.");