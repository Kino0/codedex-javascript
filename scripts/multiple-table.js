let multiple = 9; 
const numbers = []; 


for (let i = 0; i < 10; i++) {
    // Valor é adicionado no começo do array com uso de .unshift(i)

    numbers.unshift(i);
    /*
    O loop começa com i = 0 -> O array vira: [0]
    O loop vai para i = 1 -> O 1 entra na frente e empurra a posiçao do 0: [1, 0]
    O loop vai para i = 2 -> O 2 entra na frente e empurra a posiçao do 1: [2, 1, 0] 
    */
}

console.log("Array gerado:", numbers);
// Resultado no console: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// Aqui  loop percorre normal, mas de forma invertida
for (let i = 0; i < numbers.length; i++) {
    let resultado = multiple * numbers[i];
    console.log(multiple + " x " + numbers[i] + " = " + resultado);
}