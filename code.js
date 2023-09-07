function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length);

    let computer = (choices[computerChoice]);
    let computer_second = computer.toLowerCase();

    if (computer_second == "rock") {
        computer_second = 1;
        return computer_second;

    } else if (computer_second == "scissors") {
        computer_second = 2;
        return computer_second;

    } else if (computer_second == "paper") {
        computer_second = 3;
        return computer_second;
    }
}

function playerChoice(playerSelection, getComputerChoice) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice == "rock") {
        playerChoice = 1;

    } else if (playerChoice == "scissors") {
        playerChoice = 2;

    } else if (playerChoice == "paper") {
        playerChoice = 3;
    }

    console.log(playerChoice, getComputerChoice);

    if (playerChoice == getComputerChoice) {
        console.log("PLEASE");
    }
}

playerChoice("rock", getComputerChoice())

