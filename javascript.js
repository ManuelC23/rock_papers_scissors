function getComputerChoice() {
    const words = ['Rock', 'Paper', 'Scissors'];
    let word = words[Math.floor(Math.random() * words.length)];
    return word;
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    if (player == "ROCK") {
        switch (computerSelection) {
            case 'Rock':
                return "Draw!";
            case "Paper":
                return "You lose! Paper beats Rock";
            case "Scissors":
                return "You win! Rock beats Scissors";
        }
    }
    if (player == "SCISSORS") {
        switch (computerSelection) {
            case 'Scissors':
                return "Draw!";
            case "Paper":
                return "You win! Scissors beats Paper";
            case "Rock":
                return "You lose! Rock beats Scissors";
        }
    }
    if (player == "PAPER") {
        switch (computerSelection) {
            case 'Scissors':
                return "You lose! Scissors beats Paper";
            case "Paper":
                return "Draw!";
            case "Rock":
                return "You win! Paper beats Rock";
        }
    }
}

function game() {
    let playerWins = 0;
    let cpuWins = 0;
    let draws = 0;

    for (let i = 0; i < 5; i++) {
        let userPlay = prompt("Rock, Paper or Scissors?");
        let result = playRound(userPlay, getComputerChoice());
        if (result.includes('You win')) playerWins++;
        if (result.includes('You lose')) cpuWins++;
        if (result.includes('Draw')) draws++;
    }

    if (playerWins == cpuWins) {
        return "It's a draw!"
    } else if (playerWins > cpuWins) {
        return "You won!"
    } else {
        return "Cpu won!"
    }
}