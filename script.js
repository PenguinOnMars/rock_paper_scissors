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

let playerSelection;

while ((playerSelection != "rock") && (playerSelection != "paper") && (playerSelection != "scissors")){
  playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
  console.log(playerSelection);
  
  compare(playerSelection, computerSelection);
}

function compare(playerSelection, computerSelection){
  if (playerSelection == "scissors"){
    if (computerSelection == "rock"){
      console.log("computer wins :(");
    }
    else if (computerSelection == "paper"){
      console.log("you win! :)");
    }
    else {
      console.log("it's a tie");
    }
  }
  else if (playerSelection == "rock"){
    if (computerSelection == "paper"){
      console.log("computer wins :(");
    }
    else if(computerSelection == "scissors"){
      console.log("you win! :)");
    }
    else {
      console.log("it's a tie");
    }
  }
  else if (playerSelection == "paper"){
    if (computerSelection == "rock"){
      console.log("you win! :)");
    }
    else if(computerSelection == "scissors"){
      console.log("computer wins :(");
    }
    else {
      console.log("it's a tie");
    }
  }
}

/* compare user vs computer
  if paper vs rock 
  paper wins
  if rock vs scissors
  rock win
  if scissors vs rock
  scissors wins
  else its a tie







// let playerSelection = getUserChoice();

//let playerPrompt = prompt("rock, paper, or scissors?").toLowerCase();
//console.log(playerPrompt);

//let playerSelection = 0;

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
