// Simulate user question input
const userInput = "Question here"

// The system use random independent of user question
const randomNumber = Math.floor(Math.random() * 9) + 1
let response = "";

if (randomNumber === 1) {
    response = "Yes - definitely.";
} else if (randomNumber === 2) {
    response = "It is decidedly so.";
} else if (randomNumber === 3) {
    response = "Without a doubt.";
} else if (randomNumber === 4) {
    response = "Reply hazy, try again.";
} else if (randomNumber === 5) {
    response = "Ask again later.";
} else if (randomNumber === 6) {
    response = "Better not tell you now.";
} else if (randomNumber === 7) {
    response = "My sources say no.";
} else if (randomNumber === 8) {
    response = "Outlook not so good.";
} else if (randomNumber === 9) {
    response = "Very doubtful.";
} else {
    response = "Invalid input.";
}

console.log(userInput);
console.log(response);