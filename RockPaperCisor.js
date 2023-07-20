function getComputerChoice() {
  const choices = ["Rock", "Paper", "Cisor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

var computerSelection = getComputerChoice();
console.log(computerSelection);

var playerInput = "ROCK";
const playerSelection = playerInput.toLowerCase();

function computerPlayRock(computerSelection, playerSelection) {

    if (playerSelection == "Cisor") {
      console.log("You loose, " + computerSelection + " beat " + playerSelection);
    } else if (playerSelection == "Paper") {
      console.log("You win, " + playerSelection + " beat " + computerSelection);
    }
}

function computerPlayPaper(computerSelection, playerSelection) {

    if (playerSelection == "Cisor") {
      console.log("You win, " + playerSelection + " beat " + computerSelection);
    } else if (playerSelection == "Rock") {
      console.log("You loose, " + computerSelection + " beat " + playerSelection);
    }
}

function computerPlayCisor(computerSelection, playerSelection) {

    if (playerSelection == "Paper") {
      console.log("You loose, " + computerSelection + " beat " + playerSelection);
    } else if (playerSelection == "Rock") {
      console.log("You win, " + playerSelection + " beat " + computerSelection);
    }
}

function playRound(playerSelection, computerSelection) {

  getComputerChoice();
  console.log(computerSelection);

      if (computerSelection == "Rock") {
        computerPlayRock();
      } else if (computerSelection == "Paper") {
        computerPlayPaper();
      } else if (computerSelection == "Cisor") {
        computerPlayCisor();
      } else if (computerSelection == playerSelection) {
        console.log("Equality, play another round!");
      }

}

  playRound(playerSelection, computerSelection);