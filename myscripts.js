function playRound (playerSelection, computerSelection) {
    if ( (playerSelection === 'rock' && computerSelection === 'paper')
    || (playerSelection === 'paper' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'rock')){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    }

}

const playerSelection = "rock"
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function computerPlay () {
    let randomNum = getRandomIntInclusive(0,2);
    let computerChoice;
    switch (randomNum){
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        default: 
            console.log("Something went wrong with randomNum");
    }
    return computerChoice;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }


