const limit = 7;
let total = 0;

for (let i = 1; i <= limit; i++){
  if (i % 2 !== 0){
    // Sinal += acumula os resultados em total e ñ sobrescreve toda vez ao usar só =
    total += i ** 3;
  }
}
console.log(total)