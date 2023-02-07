

const choices = ['rock', 'paper', 'scissors']
function getComputerChoice (choices) {
    return choices [Math.floor(Math.random()*choices.length)];
}

const computerSelection = getComputerChoice(choices);

console.log("The computer chooses " + computerSelection)

let playerSelection = "rock"

console.log("The player chooses " + playerSelection)
function playRound(playerSelection, computerSelection) {
   
    if (computerSelection === "rock")
    return 'It is a tie!';

        else if(computerSelection === "paper")
        return 'Player loses!';

        else (computerSelection === "scissors")
        return 'Player wins!';
    
}

console.log(playRound(playerSelection, computerSelection));


//const playerSelection = "rock";