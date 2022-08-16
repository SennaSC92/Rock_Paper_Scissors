// choices for the game
const choices = ["rock", "paper", "scissors"]

// computer choice - random selection
function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}

// Check who the winner is

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie"
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player"
    }    
    else{
        return "Computer"
    }      
}

//Play one round 

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "it's a tie!"
    }
    else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}` //use backticks to display 
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }  
}

//Player choice

function getplayerChoice(){
   let validatedInput = false;
   while(validatedInput == false){
    const playerChoice = prompt("Rock Paper Scissors");
    if (playerChoice == null){
        continue;
    }
    // so it doesn't matter if upper/lower case used, or both.
    const choiceInLower = playerChoice.toLowerCase();
    if(choices.includes(choiceInLower)){
        validatedInput = true;
        return choiceInLower;

    }
   }
}

//game function - loop 5x

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("welcome")
    for(let i = 0; i < 5; i++){
        const playerSelection = getplayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("----------") // shows seperate rounds.
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++
        }
    }
    console.log("Gamer Over!")
    if(scorePlayer > scoreComputer){
        console.log("Player Wins!")
    }
    else if(scorePlayer<scoreComputer){
        console.log("Computer Wins!")
    }
    else{
        console.log("Tie!!")
    }
}

game();