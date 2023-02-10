

 let playerScore = 0;
 let computerScore = 0;
 let roundresult = 0;
 let rock = "rock";
 let paper = "paper";
 let scissors = "scissors"
game(); 

function game () { 
    const choices = [rock, paper, scissors]
   
    for (let i = 0; i < 5; i++) {
        let userPrompt = prompt("Enter: rock, paper, or scissors?");
        let playerSelection = userPrompt.toLowerCase();
        const computerSelection = getComputerChoice(choices);
        alert ("The computer chose " + computerSelection)
        alert(playRound(playerSelection, computerSelection));
        if (playerScore >= 3) {
            alert ("You won the game!")
            break;
        }
    
        if (computerScore >= 3) {
            alert ("The computer won the game!")
            break;
        }  
    }
    alert("Your score is " + playerScore);
    alert("The computer's score is " + computerScore)
}

//array for computer's randomized choice

function getComputerChoice (choices) {
    return choices [Math.floor(Math.random()*choices.length)];
}

//single round of the game
function playRound(playerSelection, computerSelection) {
   
    if (playerSelection === computerSelection)
    return 'It is a tie!';

        else if(playerSelection === rock && computerSelection === paper) {
        computerScore = computerScore + 1;
        return 'Paper beats rock, you lose!';
        }

        else if (playerSelection === rock && computerSelection === scissors) {
        playerScore = playerScore + 1;
        return 'Rock beats scissors, you win!';
        }

        else if (playerSelection === paper && computerSelection === rock) {
        playerScore = playerScore + 1;
        return 'Paper beats rock, you win!';
        }

        else if (playerSelection === paper && computerSelection === scissors) {
        computerScore = computerScore + 1;
        return 'Scissors beat paper, you lose!';
        }

        else if (playerSelection === scissors && computerSelection === rock) {
        computerScore = computerScore + 1;    
        return 'Rock beats scissors, you lose!';
        }
    
        else if (playerSelection === scissors && computerSelection === paper) {
        playerScore = playerScore + 1; 
        return 'Scissors beat paper, you win!';
        }
    }