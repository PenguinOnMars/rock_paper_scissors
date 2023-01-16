//make rock/paper/scissors game
// x randomly generate # (0.1.2) 
// x assign # to computer's choice - rock(0)/paper(1)/scissors(2)
// x prompt user rock/paper/scissors
// x compare userInput vs computerInput
//return winner
//record winner
//prompt user again, record winner 1st to 5 wins

let userWinCount = 0;
let computerWinCount = 0;

//for (i = 0; i < 5; i++){
function getComputerChoice(){
    function randomNumber(){
        return Math.floor(Math.random() * 3);
    }
    let numberAssign = randomNumber(3);
    //console.log(numberAssign);

    if (numberAssign === 0){
        return "rock";
    }
    else if (numberAssign === 1){
        return "paper";
    }
    else if (numberAssign === 2){
        return "scissors";
    }
}

let computerSelection = getComputerChoice();
//console.log(computerSelection);

const rock = document.createElement('button');
rock.innerText = 'rock';

const paper = document.createElement('button');
paper.innerText = 'paper';

const scissors = document.createElement('button');
paper.innerText = 'scissors';

function getUserChoice(){
    
}    

let playerSelection = getUserChoice();
//console.log(playerSelection);

function playRound(){
    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            alert("computer wins :(");
            return "computer";
        }
        else if (computerSelection === "rock"){
            alert("it's a tie");
            return "tie";
        }
        alert("you win! :D");
        return "user";
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            alert("computer wins :(");
            return "computer";
        }
        else if (computerSelection === "paper"){
            alert("it's a tie");
            return "tie";
        }
        alert("you win! :D");
        return "user";
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            alert("computer wins :(");
            return "computer";
        }
        else if (computerSelection === "scissors"){
            alert("it's a tie");
            return "tie";
        }
        alert("you win! :D");
        return "user";
    }
}

let winner = playRound();
if (winner == "user"){
    userWinCount++;
}
else if (winner == "computer"){
    computerWinCount++;
}



//let computerSelection = getComputerChoice();
//console.log(computerSelection);
//let playerSelection = getUserChoice();
//console.log(playerSelection);


alert("player score: " + userWinCount + "\ncomputer score: " + computerWinCount);
//}
if (userWinCount > computerWinCount){
    alert("YOU WIN!");
}
else if (userWinCount < computerWinCount){
    alert("YOU LOSE!");
}
else alert("IT'S A TIE");
