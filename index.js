
function getComputerChoice() {

    const options = ['Computer: Rock', 'Computer: Paper', 'Computer: Scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];

   return console.log(choice)
}
    

getComputerChoice()