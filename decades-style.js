const year = Math.floor((Math.random() * (1969.0001 - 1920) + 1920).toFixed(4));

console.log("Year: " + year)

if (year >= 1920 && year <= 1929){
  console.log("Roaring Twenties")
} else if (year >= 1930 && year <= 1939){
  console.log("Dirty Thirties")
} else if (year >= 1940 && year <= 1949){
  console.log("Fighting Forties")
} else if (year >= 1950 && year <= 1959){
  console.log("Fabulous Fifties")
} else if (year >= 1960 && year <= 1969){
  console.log("Swinging Sixties")
} else {
  console.log("Year out of range")
}