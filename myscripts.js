

const playerSelection = 'Rock';
game ();


function game (){
    for (let i = 1; i <= 5; i++){
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function playRound (playerSelection, computerSelection) {
    console.log(`computerSelection:${computerSelection}\n playerSelection: ${playerSelection}`)
    if ( (playerSelection === 'Rock' && computerSelection === 'Paper')
    || (playerSelection === 'Paper' && computerSelection === 'Scissors')
    || (playerSelection === 'Scissors' && computerSelection === 'Rock')){
        return(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === computerSelection){
        return (`Draw! ${playerSelection} is equal to ${computerSelection}`);
    } else {
        return(`You win! ${playerSelection} beats ${computerSelection}`);
    }

}

function computerPlay () {
    let randomNum = getRandomIntInclusive(0,2);
    let computerChoice;
    switch (randomNum){
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Paper';
            break;
        case 2:
            computerChoice = 'Scissors';
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


