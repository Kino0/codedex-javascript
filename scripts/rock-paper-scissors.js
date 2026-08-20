// 0 = Rock | 1 = Paper | 2 = Scissors
let playerPick = 1;
let compPick = Math.floor(Math.random() * 3);

if (playerPick === compPick) {
    console.log("Draw");
} 
// All player winning conditions 
else if (
    (playerPick === 0 && compPick === 2) || 
    (playerPick === 1 && compPick === 0) || 
    (playerPick === 2 && compPick === 1)    
) {
    console.log("Player Wins!");
} else {
    console.log("Computer Wins!");
}