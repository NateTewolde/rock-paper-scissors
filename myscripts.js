function computerPlay () {
    let randomNum = getRandomIntInclusive(0,2);
    let computerChoice = " ";
    switch (randomNum){
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
        case 2:
            computerChoice = 'scissors';
        default: 
            console.log("Something went wrong with randomNum");
    }
    console.log("test" + computerChoice);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }