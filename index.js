

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';


function getComputerChoice() {

    const options = ["ROCK", "SCISSORS", "PAPER"];
    const choice = options[Math.floor(Math.random() * options.length)];

   return choice;
}


function getHumanChoice() {
    const question = prompt("Rock, Paper or Scissors?", "").toUpperCase();
    if (question === "ROCK"){
        return "ROCK";
    }else if (question === "PAPER"){
        return "PAPER";
    } else if (question === "SCISSORS"){
        return "SCISSORS";
    }else{
        return console.log("IDK that one");
    }
    
}

 function playRound(playerSelection, computerSelection) {

playerSelection = getHumanChoice();
computerSelection = getComputerChoice();


 if (playerSelection === computerSelection){
  roundWinner = 'tie';
}else if (
   (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
   (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
   (playerSelection === "PAPER" && computerSelection === "ROCK")
   ){
      playerScore++;
      roundWinner = 'player';
}else if (
   (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
   (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
   (computerSelection === "PAPER" && playerSelection === "ROCK")
   ){
      computerScore++;
      roundWinner = 'computer';
   }
   console.log(roundWinner);
 }







function game(){
    for (let i = 0; i < 5; i++){
playRound()}

   if (playerScore > computerScore){
      return console.log("YOU WIN!");
   }else if (playerScore < computerScore){
      return console.log("YOU LOSE!")
   }else{ return console.log("It's a tie!!")}

}

game()