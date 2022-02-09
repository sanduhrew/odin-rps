const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'

function computerPlay (min, max) {
    let play;
    let compPlay;
    play = Math.floor(Math.random() * (max - min + 1) + min);
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
const invalid = 'Invalid play. Try again.'

let playerSelection; //user defined below from window.prompt

function playRound (playerSelection, compSelect)  {
    if (compSelect === playerSelection) {
        return tieGame;
    }
    else if (compSelect === ROCK && playerSelection === SCISSORS) {
        return rockLose; 
    }
    else if (compSelect === PAPER && playerSelection === ROCK) {
        return paperLose;
    }
    else if (compSelect === SCISSORS && playerSelection === PAPER) {
        return scissorsLose;
    }
    else if (playerSelection === ROCK && compSelect === SCISSORS) {
        return rockWin; 
    }
    else if (playerSelection === PAPER && compSelect === ROCK) {
        return paperWin;
    }
    else if (playerSelection === SCISSORS && compSelect === PAPER) {
        return scissorsWin; 
    }
    else {return invalid;
    }      
}

/* function playRound (playerSelection, compSelect)  {
    return compSelect === playerSelection ? tieGame
    :  compSelect === ROCK && playerSelection === SCISSORS ? rockLose
    :  compSelect === PAPER && playerSelection === ROCK ? paperLose
    :  compSelect === SCISSORS && playerSelection === PAPER ? scissorsLose
    :  playerSelection === ROCK && compSelect === SCISSORS ? rockWin
    :  playerSelection === PAPER && compSelect === ROCK ? paperWin
    :  playerSelection === SCISSORS && compSelect === PAPER ? scissorsWin
    :  invalid
    }   
*/

let playerWins = 0
let computerWins = 0
let ties = 0
let roundWinner;

function game() { 
    for (let gameCount = 0; gameCount < 5; gameCount++) {
        playerPrompt = prompt('Enter RPS'); 
        let compSelect = computerPlay(1,3);
        let playerSelection = playerPrompt.toUpperCase();
        console.log('// Round '+ (gameCount + 1)); 
        console.log('Player choice: ' + playerSelection);
        console.log('Computer choice: '+ compSelect); 
        roundWinner = playRound(playerSelection, compSelect);
        console.log(roundWinner); 

        if (roundWinner === rockWin || roundWinner === paperWin || roundWinner === scissorsWin) {
            playerWins++; 
        }
        else if (roundWinner === rockLose || roundWinner === paperLose || roundWinner === scissorsLose) {
            computerWins++;
        }
        else if (roundWinner === tieGame) {
            ties++;
        }
        console.log('Player wins: ' + playerWins);
        console.log('Computer wins: ' + computerWins);
        console.log('Ties:' + ties);
    } 

    console.log('Final Results: ');
    console.log('TOTAL Player wins: ' + playerWins);
    console.log('TOTAL Computer wins: ' + computerWins);
    console.log('Ties:' + ties);

    if (playerWins > computerWins) {
        console.log('You win. Congrats.');
    }
    else if (playerWins === computerWins) {
        console.log('It\'s a tie. Try again.');
    }
    else {
        console.log('You lost. Better luck next time, sucker.');
    }
}

game(); 