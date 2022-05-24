const container = document.querySelector("#container");
let gameResultPlayer = 0;
let gameResultComputer = 0;

playerButton();

//Format buttons to send rock paper or scissors when clicked to playRound
function playerButton() {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      removeAllChildNodes(container);
      playRound(btn.textContent);
    });
  });
}

//Takes 2 variables and plays a round of rock paper scissors with them
function playRound(playerSelection) {
  let computerSelection = computerPlay();

  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    roundResultDisplay(
      `You lose the round! ${computerSelection} beats ${playerSelection}`
    );
  } else if (playerSelection === computerSelection) {
    roundResultDisplay(
      `Draw! ${playerSelection} is equal to ${computerSelection}`
    );
  } else {
    roundResultDisplay(
      `You win the round! ${playerSelection} beats ${computerSelection}`
    );
  }
}

function roundResultDisplay(roundResult) {
  const resultDiv = document.createElement("div");
  resultDiv.classList.add("resultClass");
  resultDiv.textContent = roundResult;
  container.appendChild(resultDiv);
  gameResultDisplay(roundResult);
}

function gameResultDisplay(roundResult) {
  const gameResultDiv = document.createElement("div");
  gameResultDiv.classList.add("resultClass");
  gameResultDiv.textContent = roundResult;

  if (roundResult.includes("win")) {
    gameResultPlayer++;
  } else if (roundResult.includes("lose")) {
    gameResultComputer++;
  }

  const scoreTracker = document.createElement("div");
  scoreTracker.textContent = `player: ${gameResultPlayer} computer: ${gameResultComputer}`;
  container.appendChild(scoreTracker);

  if (gameResultPlayer > gameResultComputer && gameResultPlayer == 5) {
    gameResultDiv.textContent = `You won the game! ${gameResultPlayer} to ${gameResultComputer}`;
    gameResultComputer -= gameResultComputer;
    gameResultPlayer -= gameResultPlayer;
    container.appendChild(gameResultDiv);
  } else if (gameResultComputer > gameResultPlayer && gameResultComputer == 5) {
    gameResultDiv.textContent = `You lose the game! ${gameResultComputer} to ${gameResultPlayer}`;
    gameResultComputer -= gameResultComputer;
    gameResultPlayer -= gameResultPlayer;
    container.appendChild(gameResultDiv);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
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
