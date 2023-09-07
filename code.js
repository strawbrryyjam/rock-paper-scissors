function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length);

    let computer = (choices[computerChoice]);
    let computer_second = computer.toLowerCase();

    return computer_second;
}

function playerChoice(playerSelection, getComputerChoice) {
    let playerChoice = playerSelection.toLowerCase();

    console.log(playerChoice, getComputerChoice)

    if (playerChoice == getComputerChoice) {
        console.log("it's a tie!")
    } else if (playerChoice == "rock" && getComputerChoice == "scissors") {
        console.log("rock beats scissors. YOU WIN!")

    } else if (playerChoice == "rock" && getComputerChoice == "paper") {
        console.log("paper beats rock. YOU LOSE")

    } else if (playerChoice == "scissors" && getComputerChoice == "rock") {
        console.log("rock beats scissors. YOU LOSE")

    } else if (playerChoice == "scissors" && getComputerChoice == "paper") {
        console.log("scissors beats paper. YOU WIN!")

    } else if (playerChoice == "paper" && getComputerChoice == "rock") {
        console.log("paper beats rock. YOU WIN!")
        
    } else if (playerChoice == "paper" && getComputerChoice == "scissors") {
        console.log("scissors beats paper. YOU LOSE.")
    }

}

playerChoice("paper", getComputerChoice())

