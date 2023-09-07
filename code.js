function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length);

    console.log(choices[computerChoice]);
}

getComputerChoice()