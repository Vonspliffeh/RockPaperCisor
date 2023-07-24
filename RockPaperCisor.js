// random computer play.
function getComputerChoice() {
  const choices = ["rock", "paper", "cisor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// get player input. 
function getPlayerInput() {

  const playerInput = prompt("Let's play! rock, paper or cisor?!");

  if (playerInput === null) {
    alert("you have canceled!");
    return null;
  }

  const playerSelection = playerInput.toLowerCase();

  if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "cisor") {
    alert("Only rock, paper or cisor is accept!");
    return null;
  }

  return playerSelection;
}

let playerScore = 0;
let computerScore = 0;

function computerPlayRock(computerSelection, playerSelection) {

  if (playerSelection == "cisor") {
    alert("You loose, " + computerSelection + " beat " + playerSelection);
    computerScore++;
  } else if (playerSelection == "paper") {
    alert("You win, " + playerSelection + " beat " + computerSelection);
    playerScore++;
  } else if (playerSelection == "rock") {
    alert("Equality, play another round!");
  }
}

function computerPlayPaper(computerSelection, playerSelection) {

  if (playerSelection == "cisor") {
    alert("You win, " + playerSelection + " beat " + computerSelection);
    playerScore++;
  } else if (playerSelection == "rock") {
    alert("You loose, " + computerSelection + " beat " + playerSelection);
    computerScore++;
  } else if (playerSelection == "paper") {
    alert("Equality, play another round!");
  }
}

function computerPlayCisor(computerSelection, playerSelection) {

  if (playerSelection == "paper") {
    alert("You loose, " + computerSelection + " beat " + playerSelection);
    computerScore++;
  } else if (playerSelection == "rock") {
    alert("You win, " + playerSelection + " beat " + computerSelection);
    playerScore++;
  } else if (playerSelection == "cisor") {
    alert("Equality, play another round!");
  }
}


// complete playing round function.
function playRound() {

  let playerSelection = getPlayerInput();

  let computerSelection = getComputerChoice();

  console.log("Computer plays " + computerSelection);
  console.log("Player plays " + playerSelection);

  if (computerSelection == "rock") {
    computerPlayRock(computerSelection, playerSelection);
  } else if (computerSelection == "paper") {
    computerPlayPaper(computerSelection, playerSelection);
  } else if (computerSelection == "cisor") {
    computerPlayCisor(computerSelection, playerSelection);
  }
  console.log("Computer Score = " + computerScore, "Player Score = " + playerScore);
}


// complete playing game with five rounds.
function game() {

  let i = 0;

  while (i < 5) {
    playRound();
    i++;
  } if (playerScore > computerScore) {
    alert("Well play! You win " + playerScore + " to " + computerScore + "!")
  } else if (playerScore < computerScore) {
    alert("Pity! You loose " + playerScore + " to " + computerScore + "!")
  }
}

game();