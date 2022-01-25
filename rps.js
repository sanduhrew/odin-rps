
const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'

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

function playRound (playerSelection, compSelect)  {
    playerSelection = playerSelection.toUpperCase();
    return compSelect === playerSelection ? 'It is a tie. Play again!'
    :  compSelect === 'ROCK' && playerSelection === 'SCISSORS' ? 'You lose. Rock beats scissors'
    :  compSelect === 'PAPER' && playerSelection === 'ROCK' ? 'You lose. Paper beats rock.' 
    :  compSelect === 'SCISSORS' && playerSelection === 'PAPER' ? 'You lose. Scissors beat paper.'
    :  playerSelection === 'ROCK' && compSelect === 'SCISSORS' ? 'You win! Rock beats scissors.'
    :  playerSelection === 'PAPER' && compSelect === 'ROCK' ? 'You win! Paper beats rock'
    :  playerSelection === 'SCISSORS' && compSelect === 'PAPER' ? 'You win! Scissors beat rock.'
    :  'Invalid play. Please try again.'
}

/* fml forgot to pass the numbers through computerPlay and wrote it again. Think if else is
eaiser to read anyway

function playRound (playerSelection, compSelect)  {
    playerSelection = playerSelection.toUpperCase();
    if (compSelect === playerSelection) {
        return 'It is a tie. Play again!';
    }
    else if (compSelect === 'ROCK' && playerSelection === 'SCISSORS') {
        return 'You lost. Rock beats scissors.';
    }
    else if (compSelect === 'PAPER' && playerSelection === 'ROCK') {
        return 'You lost. Paper beats rock.';
    }
    else if (compSelect === 'SCISSORS' && playerSelection === 'PAPER') {
        return 'You lost. Rock beats scissors.';
    }
    else if (playerSelection === 'ROCK' && compSelect === 'SCISSORS'){
        return 'You win! Rock beats scissors.'; 
    }
    else if (playerSelection === 'PAPER' && compSelect === 'ROCK'){
        return 'You win! Paper beats rock.'; 
    }
    else if (playerSelection === 'SCISSORS' && compSelect === 'SCISSORS'){
        return 'You win! Scissor beat paper.'; 
    }
} */

const playerSelection = 'ROCK';
const compSelect = computerPlay(1,3);
console.log(playRound(playerSelection, compSelect));