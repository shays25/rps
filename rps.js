

const choices = ['rock', 'paper', 'scissors']
function getComputerChoice (choices) {
    return choices [Math.floor(Math.random()*choices.length)];
}

const computerSelection = getComputerChoice(choices);

console.log("The computer chooses " + computerSelection)

let playerSelection = prompt("Select: rock, paper, or scissors?")

function playRound(playerSelection, computerSelection) {
   
    if (playerSelection === "rock" && computerSelection === "rock")
    return 'It is a tie!';

        else if(playerSelection === "rock" && computerSelection === "paper")
        return 'Paper beats rock, you lose!';

        else if (playerSelection === "rock" && computerSelection === "scissors")
        return 'Rock beats scissors, you win!';

        else if (playerSelection === "paper" && computerSelection === "rock")
        return 'Paper beats rock, you win!';

        else if (playerSelection === "paper" && computerSelection === "paper")
        return 'It is a tie!';

        else if (playerSelection === "paper" && computerSelection === "scissors")
        return 'Scissors beat paper, you lose!';

        else if (playerSelection === "scissors" && computerSelection === "rock")
        return 'Rock beats scissors, you lose!';

        else if (playerSelection === "scissors" && computerSelection === "paper")
        return 'Scissors beat paper, you win!';

        else if (playerSelection === "scissors" && computerSelection === "scissors")
        return 'It is a tie!';
}

function game (playRound) {
    for (let i = 0; i < 5; i++) {

    }
}
console.log(playRound(playerSelection, computerSelection));


//const playerSelection = "rock";