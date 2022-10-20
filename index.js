// rock = 1
// scissors = 2
// paper = 3


function getComputerChoice() {

    const options = [1, 2, 3];
    const choice = options[Math.floor(Math.random() * options.length)];

   return choice;
}


function getHumanChoice() {
    const question = prompt("Rock, Paper or Scissors?", "").toUpperCase();
    if (question == "ROCK"){
        return 1;
    }else if (question == "PAPER"){
        return 3;
    } else if (question == "SCISSORS"){
        return 2;
    }else{
        return console.log("IDK that one");
    }
    
}

 function playRound(playerSelection, computerSelection) {

    playerSelection = getHumanChoice();
 computerSelection = getComputerChoice();



    if(playerSelection === computerSelection){
        return console.log("it's a draw");
    }else if (playerSelection == 1 && computerSelection == 2){
        return console.log("You win, Rock beats Scissors");
    }else if (playerSelection == 1 && computerSelection == 3){
    return console.log("You lose, Paper beats Rock");
    }else if (playerSelection == 2 && computerSelection == 1){
        return console.log("You lose, Rock beats Scissors");
    }else if (playerSelection == 2 && computerSelection == 3){
        return console.log("You win, Scissors beats Paper");
    }else if (playerSelection == 3 && computerSelection == 1){
        return console.log("You win, Paper beats Rock");
    }else if (playerSelection == 3 && computerSelection == 2){
        return console.log("You lose, Scissors beats Paper");
    }

 }

function game(){
 for (let i = 0; i < 5; i++){
playRound();
}
}
 

   game()
 

 