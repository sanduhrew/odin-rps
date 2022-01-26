
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

const compSelect = computerPlay(1,3);

/*function playRound (playerSelection, compSelect)  {
    return compSelect === playerSelection ? 'T'
    :  compSelect === 'ROCK' && playerSelection === 'SCISSORS' ? 'L'
    :  compSelect === 'PAPER' && playerSelection === 'ROCK' ? 'L' 
    :  compSelect === 'SCISSORS' && playerSelection === 'PAPER' ? 'L'
    :  playerSelection === 'ROCK' && compSelect === 'SCISSORS' ? 'W'
    :  playerSelection === 'PAPER' && compSelect === 'ROCK' ? 'W'
    :  playerSelection === 'SCISSORS' && compSelect === 'PAPER' ? 'W'
    :  'Invalid play. Please try again.'
} */


function playRound (playerSelection, compSelect)  {
    return compSelect === playerSelection ? 'It is a tie. Play again!'
    :  compSelect === 'ROCK' && playerSelection === 'SCISSORS' ? 'You lose. Rock beats scissors.'
    :  compSelect === 'PAPER' && playerSelection === 'ROCK' ? 'You lose. Paper beats rock.' 
    :  compSelect === 'SCISSORS' && playerSelection === 'PAPER' ? 'You lose. Scissors beat paper.'
    :  playerSelection === 'ROCK' && compSelect === 'SCISSORS' ? 'You win! Rock beats scissors.'
    :  playerSelection === 'PAPER' && compSelect === 'ROCK' ? 'You win! Paper beats rock.'
    :  playerSelection === 'SCISSORS' && compSelect === 'PAPER' ? 'You win! Scissors beat rock.'
    :  'Invalid play. Please try again.'
} 


/* fml forgot to pass the numbers 1,3 through computerPlay and wrote it again. Think if else is
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


/* 
const compSelect = computerPlay(1,3);
const playerSelection = 'rock'; 
console.log(playRound(playerSelection, compSelect));
this was working. why can't game() see playRound?? scope stack hoist wtf? 
need a whisky
*/

let playerWins = 0
let computerWins = 0
let ties = 0
let playerSelection

/* Could change the long strings in playRound to simple single characters. 
   Could also declare global const RL PL SL RW PW SW = e.g. 'You lose. Rock beats scissors.' Use those to avoid time consuming spelling issues, fk. 
   Use those within game()

function game(playRound) { 
    if (playRound === 'W') {
        playerWins = playerWins + 1; 
        console.log('You win!');
    }
    else if (playRound === 'L'){
        computerWins = computerWins + 1;
        console.log('You lose!')
    }
    else if (playRound === 'T') {
        ties = ties + 1;
        console.log('It\'s a tie.')
    }
    console.log('Player wins: ' + playerWins);
    console.log('Computer wins: ' + computerWins);
    console.log('Ties:' + ties);
} */

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