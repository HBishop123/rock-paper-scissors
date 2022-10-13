function playerSelection() {
    let userChoice = prompt("Rock, Paper or Scissors:");

 switch(userChoice) {
    case "rock":
        console.log("Rock");
        break;
    case "paper":
        console.log("Paper");
        break;
    case "scissors":
        console.log("Scissors");
 }

}

playerSelection()

















function getComputerChoice() {

const options = ['Rock', 'Paper', 'Scissors'];
let choice = options[Math.floor(Math.random() * options.length)];
console.log(choice);
    }







    

