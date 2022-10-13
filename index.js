


function playerSelection() {
    let userChoice = prompt("Rock, Paper or Scissors:");

 switch(userChoice.toLowerCase()) {
    case "rock".toLowerCase():
        console.log("Rock");
        break;
    case "paper".toLowerCase():
        console.log("Paper");
        break;
    case "scissors".toLowerCase():
        console.log("Scissors");
        break;
    default:
        console.log("I don't Know that one!:s");  
 }

}

playerSelection()

















function getComputerChoice() {

const options = ['Rock', 'Paper', 'Scissors'];
let choice = options[Math.floor(Math.random() * options.length)];
console.log(choice);
    }







    

