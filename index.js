function getComputerChoice() {

    const options = ["ROCK", "PAPER", "SCISSORS"];
    const choice = options[Math.floor(Math.random() * options.length)];

   return choice;
}


function getHumanChoice() {
    const question = prompt("Rock, Paper or Scissors?", "").toUpperCase();
    if (question == "ROCK"){
        return ("ROCK");
    }else if (question == "PAPER"){
        return ("PAPER");
    } else if (question == "SCISSORS"){
        return ("SCISSORS");
    }else{
        return ("IDK that one");
    }
}

 function playRound(playerSelection, computerSelection) {




const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound()


 


