let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length);

    let computer = (choices[computerChoice]);
    let computer_second = computer.toLowerCase();

    return computer_second;
}

function playerChoice(playerSelection, getComputerChoice) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice == getComputerChoice) {
        console.log("it's a tie!")
        playerScore += 1
        computerScore += 1

    } else if (playerChoice == "rock" && getComputerChoice == "scissors") {
        console.log("rock beats scissors. YOU WIN!")
        playerScore += 1

    } else if (playerChoice == "rock" && getComputerChoice == "paper") {
        console.log("paper beats rock. YOU LOSE")
        computerScore += 1

    } else if (playerChoice == "scissors" && getComputerChoice == "rock") {
        console.log("rock beats scissors. YOU LOSE")
        computerScore += 1

    } else if (playerChoice == "scissors" && getComputerChoice == "paper") {
        console.log("scissors beats paper. YOU WIN!")
        playerScore += 1

    } else if (playerChoice == "paper" && getComputerChoice == "rock") {
        console.log("paper beats rock. YOU WIN!")
        playerScore += 1

    } else if (playerChoice == "paper" && getComputerChoice == "scissors") {
        console.log("scissors beats paper. YOU LOSE.")
        computerScore += 1

    }

}


function game() {
    console.log("First to 5 wins..")
    console.log("Round 1. FIGHT!");
    
    for (let rounds = 0; computerScore < 5 & playerScore < 5 ; rounds++) {
        let round1 = prompt();
        playerChoice(round1, getComputerChoice())
        console.log("the score is " + playerScore + "-" + computerScore)
    }
}

game()