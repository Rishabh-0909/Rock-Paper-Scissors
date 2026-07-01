
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
    const randomnumber = Math.floor(Math.random() * 3);
    if (randomnumber == 0) {
        return "rock";
    } else if (randomnumber == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {

    if (gameOver) return; // ignore clicks after game has ended

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        displayResult("You win! Rock beats Scissors");
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        displayResult("You win! Paper beats Rock");
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        displayResult("You win! Scissors beats Paper");
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        displayResult("You lose! Paper beats Rock");
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        displayResult("You lose! Scissors beats Paper");
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        displayResult("You lose! Rock beats Scissors");
    }
    else {
        displayResult("Both choices are equal");
    }

    updateScore();
    checkForWinner();
}

function displayResult(message) {
    const resultEntry = document.createElement('p');
    resultEntry.textContent = message;
    resultsDiv.appendChild(resultEntry);
}

function updateScore() {
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkForWinner() {
    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;
        const winner = humanScore === 5 ? "Human" : "Computer";
        const winnerMessage = document.createElement('h2');
        winnerMessage.textContent = `${winner} wins the game!`;
        resultsDiv.appendChild(winnerMessage);
    }
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultsDiv = document.querySelector('#results');
const scoreDiv = document.querySelector('#score');

rockButton.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

paperButton.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});

const newGameButton = document.querySelector('#newGame');

newGameButton.addEventListener('click', resetGame);

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    resultsDiv.textContent = ''; // clear all past round messages
    updateScore(); // reset the score display back to 0 | 0
}