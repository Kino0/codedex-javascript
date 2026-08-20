let firstFib = 0;
let secondFib = 1;

console.log(firstFib);
console.log(secondFib);

// Inicia o for em 2 pois 0 e 1 já contam 2 casas de 10
for (let i = 2; i < 10; i++) {
    let nextFib = firstFib + secondFib;
    console.log(nextFib);
    
    // Reatribui os valores deslocando 1 casa 
    firstFib = secondFib;
    secondFib = nextFib;
}