
const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'

const compSelect = computerPlay(1,3);

function computerPlay (min, max) {
    let play;
    let compPlay;
    play = Math.floor(Math.random() * (max-min + 1)) + min;
      if (play === 1) {
          compPlay = ROCK;
      }
      else if (play === 2) {
          compPlay = PAPER;
      }
      else if (play === 3) {
          compPlay = SCISSORS;
      }
    return compPlay;
}

const tieGame = 'It is a tie. Play again!';
const rockLose = 'You lose. Rock beats scissors.';
const paperLose = 'You lose. Scissors beat paper.';
const scissorsLose = 'You lose. Scissors beat paper.';
const rockWin = 'You win! Rock beats scissors.';
const paperWin = 'You win! Paper beats rock.';
const scissorsWin = 'You win! Scissors beat paper.';

let playerSelection; //defined below in gameCount for loop from window.prompt

function playRound (playerSelection, compSelect)  {
    return compSelect === playerSelection ? tieGame
    :  compSelect === ROCK && playerSelection === SCISSORS ? rockLose
    :  compSelect === PAPER && playerSelection === ROCK ? paperLose
    :  compSelect === SCISSORS && playerSelection === PAPER ? scissorsLose
    :  playerSelection === ROCK && compSelect === SCISSORS ? rockWin
    :  playerSelection === PAPER && compSelect === ROCK ? paperWin
    :  playerSelection === SCISSORS && compSelect === PAPER ? scissorsWin
    :  'Invalid play. Please try again.'
    }   
    
let playerWins = 0
let computerWins = 0
let ties = 0

function game(playRound) { 
    if (playRound === 'You win! Rock beats scissors.' || playRound === 'You win! Paper beats rock.' || playRound === 'You win! Scissors beat rock.') {
        playerWins = playerWins + 1; 
    }
    else if (playRound === 'You lose. Rock beats scissors.' || playRound === 'You lose. Paper beats rock.' || playRound === 'You lose. Scissors beat paper.') {
        computerWins = computerWins + 1;
    }
    else if (playRound === 'It is a tie. Play again!') {
        ties = ties + 1;
    }
    console.log(playRound);
    console.log('Player wins: ' + playerWins);
    console.log('Computer wins: ' + computerWins);
    console.log('Ties:' + ties);
}

for (let gameCount = 0; gameCount < 5; gameCount++){
    playerPrompt = prompt('Enter RPS'); 
    let playerSelection = playerPrompt.toUpperCase();
    console.log('Round '+ (gameCount + 1));
    console.log(game(playRound(playerSelection, compSelect)));
}  

console.log('Final Results: ')
if (playerWins > computerWins) {
    console.log('You win. Congrats.');
}
    else if (playerWins === computerWins) {
      console.log('It\'s a tie. Try again.');
    }
    else {console.log('You lost. Better luck next time, sucker.')
}