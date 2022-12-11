// If you select a block of code and use the key sequence Ctrl+K+C, 
// you'll comment out the section of code. Ctrl+K+U will uncomment the code.
let winner;


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

function game(){
    while ((playerSelection != "rock") && (playerSelection != "paper") && (playerSelection != "scissors")){
      playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
      console.log(playerSelection);
      playRound(playerSelection, computerSelection);
      pickWinner();
    }
}

function playRound(playerSelection, computerSelection){
  if (playerSelection === "scissors"){
    if (computerSelection === "rock"){
      return winner = "computer";
    }
    else if (computerSelection === "paper"){
      return winner = "user";
    }
  }
  else if (playerSelection === "rock"){
    if (computerSelection === "paper"){
      return winner = "computer";
    }
    else if(computerSelection === "scissors"){
      return winner = "user";
    }
  }
  else if (playerSelection === "paper"){
    if (computerSelection === "rock"){
      return winner = "user";
    }
    else if(computerSelection === "scissors"){
      return winner = "computer";
    }
  }
  return winner, playerSelection = null;
}

function pickWinner(){
  if (winner === "computer"){
    return("computer wins :(");
  }
  else if (winner === "user"){
    return("you win! :)");
  }
  else {
    return("it's a tie");
  }
}

console.log(pickWinner());
//console.log(playRound(playerSelection, computerSelection));
// /* compare user vs computer
//   if paper vs rock 
//   paper wins
//   if rock vs scissors
//   rock win
//   if scissors vs rock
//   scissors wins
//   else its a tie





// playRound(playerSelection, computerSelection);


// let user;
// let computer;
// let noOne;

// function playRound(playerSelection, computerSelection){
//   if (playerSelection === "scissors"){
//     if (computerSelection === "rock"){
//       return winner = computer;
//     }
//     else if (computerSelection === "paper"){
//       return winner = user;
//     }
//   }
//   else if (playerSelection === "rock"){
//     if (computerSelection === "paper"){
//       return winner = computer;
//     }
//     else if(computerSelection === "scissors"){
//       return winner = user;
//     }
//   }
//   else if (playerSelection === "paper"){
//     if (computerSelection === "rock"){
//       return winner = user;
//     }
//     else if(computerSelection === "scissors"){
//       return winner = computer;
//     }
//   }
//   else {
//     return winner = noOne;
//   }
//   return winner;
// }

// function pickWinner(){
//   if (winner === computer){
//     return("computer wins :(");
//   }
//   else if (winner === user){
//     return("you win! :)");
//   }
//   else {
//     return("it's a tie");
//   }
// }