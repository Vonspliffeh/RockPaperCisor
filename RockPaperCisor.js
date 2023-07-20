function getComputerChoice() {
  const choices = ["rock", "paper", "cisor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const playerInput = "ROCK";
const playerSelection = playerInput.toLowerCase();

function computerPlayRock(computerSelection, playerSelection) {

    if (playerSelection == "cisor") {
      console.log("You loose, " + computerSelection + " beat " + playerSelection);
    } else if (playerSelection == "paper") {
      console.log("You win, " + playerSelection + " beat " + computerSelection);
    } else if (playerSelection == "rock") {
      console.log("Equality, play another round!");
    }
}

function computerPlayPaper(computerSelection, playerSelection) {

    if (playerSelection == "cisor") {
      console.log("You win, " + playerSelection + " beat " + computerSelection);
    } else if (playerSelection == "rock") {
      console.log("You loose, " + computerSelection + " beat " + playerSelection);
    } else if (playerSelection == "paper") {
      console.log("Equality, play another round!");
    }
}

function computerPlayCisor(computerSelection, playerSelection) {

    if (playerSelection == "paper") {
      console.log("You loose, " + computerSelection + " beat " + playerSelection);
    } else if (playerSelection == "rock") {
      console.log("You win, " + playerSelection + " beat " + computerSelection);
    } else if (playerSelection == "cisor") {
      console.log("Equality, play another round!");
    }
}


function playRound(choices) {

  let computerSelection = getComputerChoice(choices);
  console.log(computerSelection);
  console.log(playerSelection);
  
      if (computerSelection == "rock") {
        computerPlayRock(computerSelection, playerSelection);
      } else if (computerSelection == "paper") {
        computerPlayPaper(computerSelection, playerSelection);
      } else if (computerSelection == "cisor") {
        computerPlayCisor(computerSelection, playerSelection);
      }
}

  playRound(getComputerChoice(),
  computerPlayRock(),
  computerPlayPaper(),
  computerPlayCisor());