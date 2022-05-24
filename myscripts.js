game();
//Runs 5 rounds of playRound and displays the results
function game() {
  playerButton();
  let gameResultPlayer = 0;
  let gameResultComputer = 0;
  const playerSelection = capitalize(prompt("Rock Paper Scissors GO!")); // change this to user button click
  computerSelection = computerPlay();
  let roundResult = playRound(playerSelection, computerSelection);
  console.log(roundResult);
  if (roundResult.includes("win")) {
    gameResultPlayer++;
  } else if (roundResult.includes("lose")) {
    gameResultComputer++;
  }
  console.log(`player: ${gameResultPlayer}\ncomputer: ${gameResultComputer}`);
  if (gameResultPlayer > gameResultComputer) {
    console.log(
      `You won the game! ${gameResultPlayer} to ${gameResultComputer}`
    );
  } else if (gameResultComputer > gameResultPlayer) {
    console.log(
      `You lose the game! ${gameResultComputer} to ${gameResultPlayer}`
    );
  }
}

//Format buttons to send rock paper or scissors when clicked to playRound
function playerButton() {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      playRound(btn.textContent);
    });
  });
}

//Takes 2 variables and plays a round of rock paper scissors with them
function playRound(playerSelection) {
  let computerSelection = computerPlay();
  console.log(
    `computerSelection:${computerSelection}\n playerSelection: ${playerSelection}`
  );
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    return `Draw! ${playerSelection} is equal to ${computerSelection}`;
  } else {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
}

//Returns random computer choice of rock paper scissors
function computerPlay() {
  let randomNum = getRandomIntInclusive(0, 2);
  let computerChoice;
  switch (randomNum) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
    default:
      console.log("Something went wrong with randomNum");
  }
  return computerChoice;
}

//Helper function for computerPlay, returns a random number between and including a mix/max
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//Returns a string with only the first letter capitalized.
function capitalize(sent) {
  let rightSent = sent.charAt(0).toUpperCase() + sent.slice(1).toLowerCase();
  return rightSent;
}
