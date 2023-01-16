//make rock/paper/scissors game
// x randomly generate # (0.1.2) 
// x assign # to computer's choice - rock(0)/paper(1)/scissors(2)
// x prompt user rock/paper/scissors
// x compare userInput vs computerInput
//return winner
//record winner
//prompt user again, record winner 1st to 5 wins

// const userScore = document.getElementById('data-user-score');
// const computerScore = document.getElementById('data-computer-score');
let uScore = 0;
let cScore = 0;

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

//console.log(computerSelection);


let playerSelection;
let computerSelection;
let winner;

const selectionButtons = document.querySelectorAll('[data-selection]')

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        
        playerSelection = selectionButton.dataset.selection;
        computerSelection = getComputerChoice();
        winner = playRound(playerSelection, computerSelection);

        console.log(playerSelection);
        console.log(computerSelection);
        console.log(winner);

        if (winner == "user") parseInt(userScore) + 1;
        if (winner == "computer") parseInt(computerScore) + 1;
    })
    //console.log(playerSelection);
})
//console.log(playerSelection);
// function makeSelection(selection) {
//     console.log(selection);
// }

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            //alert("computer wins :(");
            cScore++;
            updateScore();
            return "computer";
        }
        else if (computerSelection === "rock"){
            //alert("it's a tie");
            return "tie";
        }
        //alert("you win! :D");
        uScore++;
        updateScore();
        return "user";
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            //alert("computer wins :(");
            cScore++;
            updateScore();
            return "computer";
        }
        else if (computerSelection === "paper"){
            //alert("it's a tie");
            return "tie";
        }
        //alert("you win! :D");
        uScore++;
        updateScore();
        return "user";
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            //alert("computer wins :(");
            cScore++;
            updateScore();
            return "computer";
        }
        else if (computerSelection === "scissors"){
            //alert("it's a tie");
            return "tie";
        }
        //alert("you win! :D");
        uScore++;
        updateScore();
        return "user";
    }
}

const updateScore = () => {
    const userScore = document.getElementById('userScore');
    const computerScore = document.getElementById('computerScore');
    const bigWinner = document.getElementById('bigWinner');
    userScore.textContent = uScore;
    computerScore.textContent = cScore;
    if (cScore == 5) {
        bigWinner.textContent = 'computer wins :('
    }
    else if (uScore == 5) {
        bigWinner.textContent = 'you win! :D'
    }
}



// const updateScore = () => {
//     // let userScore = document.querySelector('userScore');
//     // let computerScore = document.querySelector('computerScore');
//     userScore.textContent = uScore;
//     computerScore.textContent = cScore;
// };


//let computerSelection = getComputerChoice();
//console.log(computerSelection);
//let playerSelection = getUserChoice();
//console.log(playerSelection);


// alert("player score: " + userWinCount + "\ncomputer score: " + computerWinCount);
// //}
// if (userWinCount > computerWinCount){
//     alert("YOU WIN!");
// }
// else if (userWinCount < computerWinCount){
//     alert("YOU LOSE!");
// }
// else alert("IT'S A TIE");
