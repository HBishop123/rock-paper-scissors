//global scores
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let roundWinner = "";

//global selector for human choice
const ROCK = document.querySelector("#ROCK");
const PAPER = document.querySelector("#PAPER");
const SCISSORS = document.querySelector("#SCISSORS");

//global selector for scoreboards
const playerCount = document.querySelector("#playerScore");
const computerCount = document.querySelector("#computerScore");
const drawCount = document.querySelector("#roundsDrawn");
const reset = document.querySelector("#reset");
const humanChoice = document.querySelector("#you-chose");
const computerChoice = document.querySelector("#computer-chose");

//getting a randomised choice from the computer
function getComputerChoice() {
  const options = ["ROCK", "SCISSORS", "PAPER"];
  const choice = options[Math.floor(Math.random() * options.length)];

  return choice;
}

//event listeners for rock, paper scissors buttons
//and decide player selection value.
ROCK.addEventListener("click", function () {
  let playerSelection = "ROCK";
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

SCISSORS.addEventListener("click", function () {
  let playerSelection = "SCISSORS";
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

PAPER.addEventListener("click", function () {
  let playerSelection = "PAPER";
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

//event listener for resetting the game
reset.addEventListener("click", function () {
  resetGame();
});

// plays one round based off the computer
// and human choice

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    drawScore++;
    roundWinner = "tie";
    drawCount.innerHTML = "The number of draws is currently: " + drawScore;
    humanChoice.innerHTML = "You Chose: " + playerSelection;
    computerChoice.innerHTML = "Computer Chose: " + computerSelection;
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    roundWinner = "player";
    playerCount.innerHTML = "Your score is currently: " + playerScore;
    humanChoice.innerHTML = "You Chose: " + playerSelection;
    computerChoice.innerHTML = "Computer Chose: " + computerSelection;
  } else if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerScore++;
    roundWinner = "computer";
    computerCount.innerHTML =
      "The computer score is currently: " + computerScore;
    humanChoice.innerHTML = "You Chose: " + playerSelection;
    computerChoice.innerHTML = "Computer Chose: " + computerSelection;
  }

  if (playerScore === 5) {
    return alert("You win!");
  } else if (computerScore === 5) {
    return alert("you lose!");
  }
}

function resetGame() {
  playerCount.innerHTML = "Your score is currently: 0";
  computerCount.innerHTML = "The computer score is currently: 0";
  drawCount.innerHTML = "The number of draws is currently: 0";
  humanChoice.innerHTML = "You Chose:";
  computerChoice.innerHTML = "Computer Chose:";
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
}

//play intro to website
const splash = document.querySelector(".splash");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2000);
});
