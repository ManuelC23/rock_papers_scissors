let playerWins = 0;
let cpuWins = 0;
let draws = 0;

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
                return "You lose! CPU picked Paper";
            case "Scissors":
                return "You win! CPU picked Scissors";
        }
    }
    if (player == "SCISSORS") {
        switch (computerSelection) {
            case 'Scissors':
                return "Draw!";
            case "Paper":
                return "You win! CPU picked Paper";
            case "Rock":
                return "You lose! CPU picked Rock";
        }
    }
    if (player == "PAPER") {
        switch (computerSelection) {
            case 'Scissors':
                return "You lose! CPU picked Scissors";
            case "Paper":
                return "Draw!";
            case "Rock":
                return "You win! CPU picked Rock";
        }
    }
}

function game(event) {
    roundWinner.innerText = playRound(event.target.id, getComputerChoice())
    if (roundWinner.innerText.includes('You win')) playerWins++;
    if (roundWinner.innerText.includes('You lose')) cpuWins++;
    if (roundWinner.innerText.includes('Draw')) draws++;
    if (cpuWins === 5 || playerWins === 5) {
        if (cpuWins == 5) showAlert("The CPU won the game");
        if (playerWins == 5) showAlert("You won the game!");
        playerWins = 0;
        cpuWins = 0;
        draws = 0;
    }
    playerScore.innerText = `Player Score: ${playerWins}`;
    cpuScore.innerText = `CPU Score: ${cpuWins}`;
    drawsScore.innerText = `Draws: ${draws}`;
}

const roundWinner = document.querySelector('.roundWinner');
const playerScore = document.querySelector('.playerScore');
const cpuScore = document.querySelector('.cpuScore');
const drawsScore = document.querySelector('.drawScore');

const rock = document.querySelector("#rock");
rock.addEventListener('click', (event) => game(event));

const paper = document.querySelector("#paper");
paper.addEventListener('click', (event) => game(event));

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', (event) => game(event));

function showAlert(text) {
    const alertText = document.querySelector('.alert-text');
    alertText.innerText = text + "\nPress Ok to play Again";
    const alertContainer = document.querySelector('.alert-container');
    alertContainer.style.display = 'flex';
}

function hideAlert() {
    const alertContainer = document.querySelector('.alert-container')
    alertContainer.style.display = 'none';
}

const closeAlert = document.querySelector('.alert-button');
closeAlert.addEventListener('click', hideAlert);