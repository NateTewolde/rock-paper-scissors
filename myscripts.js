

const playerSelection = 'rock';
game ();


function game (){
    for (let i = 1; i <= 5; i++){
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function playRound (playerSelection, computerSelection) {
    console.log(`computerSelection is ${computerSelection}`)
    if ( (playerSelection === 'rock' && computerSelection === 'paper')
    || (playerSelection === 'paper' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'rock')){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === computerSelection){
        console.log(`Draw! ${playerSelection} is equal to ${computerSelection}`)
    } else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }

}

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


