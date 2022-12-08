// If you select a block of code and use the key sequence Ctrl+K+C, 
// you'll comment out the section of code. Ctrl+K+U will uncomment the code.
function getComputerChoice(){
  return Math.floor(Math.random() * 3);
} 

let computerSelection = getComputerChoice(3);
console.log(computerSelection);

if(computerSelection === 0){
  computerSelection = "rock";
}
else if(computerSelection === 1){
  computerSelection = "paper";
}
else{
  computerSelection = "scissors";
}
console.log(computerSelection);

// let playerSelection = getUserChoice();

//let playerPrompt = prompt("rock, paper, or scissors?").toLowerCase();
//console.log(playerPrompt);

//let playerSelection = 0;
let playerPrompt;

while ((playerPrompt != "rock") && (playerPrompt != "paper") && (playerPrompt != "scissors")){
  playerPrompt = prompt("rock, paper, or scissors?").toLowerCase();
  console.log(playerPrompt);
}


/*function getUserChoice(){
  if (playerPrompt === "rock"){
    playerSelection = "rock";
    return playerSelection;
  } 
  else if (playerSelection === "paper"){
    playerSelection = "paper";
    return playerSelection;
  }
  else if (playerSelection === "scissors"){
    playerSelection = "scissors";
    return playerSelection; 
  }
  else {
  }
}
*/
//getUserChoice();

//console.log(playerSelection);

//function whoWins(){

//}
