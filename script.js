let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const RPS = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * RPS.length);
    const computerSelection = RPS[random];
    return computerSelection
}

function playRPS(playerSelection, compSelection) {
    const playerInput = prompt('Rock, paper, scissors').toLowerCase();
    playerSelection = playerInput;
    compSelection = computerPlay();

    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') {
        if (playerSelection === compSelection) {
            return console.log(`DRAW - You both chose ${playerSelection}`);
        } else if (playerSelection === 'rock' && compSelection === 'scissors') {
            playerScore++;
            return console.log(`${playerSelection} beats ${compSelection}, player wins`);
        } else if (playerSelection === 'paper' && compSelection === 'rock') {
            playerScore++;
            return console.log(`${playerSelection} beats ${compSelection}, player wins`);
        } else if (playerSelection === 'scissors' && compSelection === 'paper') {
            playerScore++; 
            return console.log(`${playerSelection} beats ${compSelection}, player wins`);
        } else if (compSelection === 'rock' && playerSelection === 'scissors') {
            computerScore++;
            return console.log(`${compSelection} beats ${playerSelection}, computer wins`);
        } else if (compSelection === 'paper' && playerSelection === 'rock') {
            computerScore++;
            return console.log(`${compSelection} beats ${playerSelection}, computer wins`);
        } else if (compSelection === 'scissors' && playerSelection === 'paper') {
            computerScore++;
            return console.log(`${compSelection} beats ${playerSelection}, computer wins`);
        }        
    } else {
        console.error('incorrect input');
        return playRPS();
    }

}


function game() {
    
    for (let i = 0; i < 5; i++) {
        playRPS();
        console.log(playerScore, computerScore)
    }

     if (playerScore === computerScore) {
        console.log(`The final score is a draw, both players ended with ${playerScore} points.`);
     } else if (playerScore > computerScore) {
        console.log(`The final score is ${playerScore}:${computerScore}, the player won by ${playerScore - computerScore} point/s.`);
     } else if (computerScore > playerScore) {
        console.log(`The final score is ${playerScore}:${computerScore}, the computer won by ${computerScore - playerScore} point/s.`)
     }
}

game();
