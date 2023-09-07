function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length);

    console.log(choices[computerChoice]);
}

function playRound(playerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice == "rock") {
        console.log("rock");

    } else if (playerChoice == "scissors") {
        console.log("scissors");

    } else if (playerChoice == "paper") {
        console.log("paper");
    } else {
        console.log("null");
    }
}

playRound("paper");