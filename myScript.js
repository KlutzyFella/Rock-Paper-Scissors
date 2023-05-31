let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function singleGameRound(playerSelection, computerSelection) {

    if (computerSelection === "rock") {

        if ((playerSelection.toLowerCase()) === "rock") {
            return "You Tied! Rock ties Rock";
        }

        else if (playerSelection.toLowerCase() === "paper") {
            playerWins++;
            return "You Won! Paper beats Rock";
        }

        else {
            computerWins++;
            return "You Lose! Rock beats Scissors";
        }
    }

    else if (computerSelection == "paper") {

        if (playerSelection.toLowerCase() === "rock") {
            computerWins++;
            return "You Lose! Paper beats Rock";
        }

        else if (playerSelection.toLowerCase() === "paper") {
            return "You Tied! Paper ties Paper";
        }

        else {
            playerWins++;
            return "You Won! Scissor beats Paper";
        }
    }

    else {

        if (playerSelection.toLowerCase() === "rock") {
            playerWins++;
            return "You Won! Rock beats Scissors";
        }

        else if (playerSelection.toLowerCase() === "paper") {
            computerWins++;
            return "You Lose! Scissors beats Rock";
        }

        else {
            return "You Tied! Scissors tie Scissors";
        }
    }

}

function game() {
    while ((playerWins < 3) && (computerWins < 3)) {
        
        let computerChoice = getComputerChoice();
        let computerSelection;

        if (computerChoice === 0) {
            computerSelection = "rock";
        }

        else if (computerChoice === 1) {
            computerSelection = "paper";
        }
        
        else {
            computerSelection = "scissors";
        }

        let playerSelection = prompt("Choose Rock/Paper/Scissors!")

        console.log(singleGameRound(playerSelection, computerSelection));
    }

    if (playerWins == 3) {
        console.log("YOU WIN THE GAME !!!")
    }
    else {
        console.log(" :( YOU LOSE... TRY AGAIN NEXT TIME")
    }
}

game();