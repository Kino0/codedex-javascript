const day =  Math.floor(Math.random() * 7) + 1;

if (day <= 4){
  console.log("Not Friday, yet!")
} else if (day === 5){
  console.log("TGIF 🕺")
} else if (day > 5 && day <= 7){
  console.log("Yay, weekends! 🙌")
} else {
  console.log("Wait, what day is it?")
}