

//these variables will be used inside the functions
 let playerScore = 0;
 let computerScore = 0;
 let rock = "rock";
 let paper = "paper";
 let scissors = "scissors"

 //invoke the game function
 game(); 

//function that will continue to play until player or computer gets 5 points
function game () { 
    const choices = [rock, paper, scissors]
   
    while (playerScore <5 || computerScore <5 ) {
        let userPrompt = prompt("Enter: rock, paper, or scissors?");
        let playerSelection = userPrompt.toLowerCase();
        const computerSelection = getComputerChoice(choices);
        alert ("The computer chose " + computerSelection)
        alert(playRound(playerSelection, computerSelection));
        //why does roundResult need to be inside? Why can't it be a global variable? Because it'll only be used in this loop?
        let roundResult = "Your score: " + playerScore + "\nThe computer's score: " + computerScore;
        alert(roundResult);
        if (playerScore >= 5) {
            alert ("You won the game!")
            break;
        }
    
        if (computerScore >= 5) {
            alert ("The computer won the game!")
            break;
        }  
    }

}

//array for computer's randomized choice

function getComputerChoice (choices) {
    return choices [Math.floor(Math.random()*choices.length)];
}

//single round of the game
function playRound(playerSelection, computerSelection) {
   
    if (playerSelection === computerSelection) {
    return 'It is a tie!';
    }

        else if (playerSelection === rock && computerSelection === paper) {
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


     //else (playerSelection === "") {
        //alert ('Error');
        //alert (userPrompt);
        //}