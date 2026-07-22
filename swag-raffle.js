let count = 0;
// Target vai gerar de 0 ~ 99 (excluindo 100) e 
let targetNumber = Math.floor(Math.random() * 10);
// Contador de tentativas para atingir o requesito
let targetAttempts = 0;

while (count <= 10){
  targetAttempts++;

  let drawNumber = Math.floor(Math.random() * 10);

  if (drawNumber === targetNumber){
    count++
    console.log("Match < --- >")
  } else {
    console.log("No Match")
  }
}
console.log("The number " + targetNumber + " was found 10 times.")
console.log("To find the target, it was needed " + targetAttempts + " attempts.")