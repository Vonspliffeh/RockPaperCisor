function getComputerChoice() {
  const choices = ["rock", "paper", "cisor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const playerInput = prompt("Let's play! rock, paper or cisor?!");

  if (playerInput !== "rock" || "paper" || "cisor") {
    console.log("Only rock, paper or cisor is accept!");
  } else if (playerInput === null) {
    console.log("you have canceled!");
  } 
  
const playerSelection = playerInput.toLowerCase();

var playerScore = 0;
var computerScore = 0;

function computerPlayRock(computerSelection, playerSelection) {

    if (playerSelection == "cisor") {
      console.log("You loose, " + computerSelection + " beat " + playerSelection);
      computerScore++;
    } else if (playerSelection == "paper") {
      console.log("You win, " + playerSelection + " beat " + computerSelection);
      playerScore++;
    } else if (playerSelection == "rock") {
      console.log("Equality, play another round!");
    }
}

function computerPlayPaper(computerSelection, playerSelection) {

    if (playerSelection == "cisor") {
      console.log("You win, " + playerSelection + " beat " + computerSelection);
      playerScore++;
    } else if (playerSelection == "rock") {
      console.log("You loose, " + computerSelection + " beat " + playerSelection);
      computerScore++;
    } else if (playerSelection == "paper") {
      console.log("Equality, play another round!");
    }
}

function computerPlayCisor(computerSelection, playerSelection) {

    if (playerSelection == "paper") {
      console.log("You loose, " + computerSelection + " beat " + playerSelection);
      computerScore++;
    } else if (playerSelection == "rock") {
      console.log("You win, " + playerSelection + " beat " + computerSelection);
      playerScore++;
    } else if (playerSelection == "cisor") {
      console.log("Equality, play another round!");
    }
}


function playRound(choices) {

  prompt();

    let computerSelection = getComputerChoice(choices);
    console.log(computerSelection);
    console.log(playerSelection);
  
        if (computerSelection == "rock") {
          computerPlayRock(computerSelection, playerSelection);
        } else if (computerSelection == "paper") {
          computerPlayPaper(computerSelection, playerSelection);
        } else if (computerSelection == "cisor") {
          computerPlayCisor(computerSelection, playerSelection);
        } console.log("Computer Score = " + computerScore, "Player Score = " + playerScore);
}


function game() {

  let i = 0;

    while (i < 5) {
      playRound(getComputerChoice(),
      computerPlayRock(),
      computerPlayPaper(),
      computerPlayCisor());
      i++;
    }
  }

game();