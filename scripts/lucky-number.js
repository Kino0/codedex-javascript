const luckyNumber = 6
let guess = Math.floor(Math.random() * 10) + 1;

while (luckyNumber !== guess){
  console.log("Nope, it isn't " + guess)
  guess = Math.floor(Math.random() * 10) + 1;
}

console.log("My luck number is " + guess + " !")