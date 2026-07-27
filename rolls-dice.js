let die1 = Math.floor(Math.random() * 4) + 1;
let die2 = Math.floor(Math.random() * 4) + 1;

let numberOfRolls = 0;

while (die1 !== die2) {
  console.log("Roll 1: " + die1)
  console.log("Roll 2: " + die2)
  console.log('-'.repeat(9))
  
  die1 = Math.floor(Math.random() * 4) + 1;
  die2 = Math.floor(Math.random() * 4) + 1;

  numberOfRolls++
}

console.log("Roll 1: " + die1)
console.log("Roll 2: " + die2)
console.log("Number of rolls: " + numberOfRolls)