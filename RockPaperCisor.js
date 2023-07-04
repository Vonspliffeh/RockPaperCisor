const choices = ["Rock", "Paper", "Scissors"];

    function getComputerChoice(choices) {
      return choices[Math.floor(Math.random() * choices.length)];
    }

const rockWin = "You win! Rock beats Scissors";
const rockLoose = "You loose! Paper beats the Rock";
const paperWin = "You win! Paper beats Rock";
const paperLoose = "You loose! Scissors beats Paper";
const scissorsWin = "You win! Scissors beats Papers";
const scissorsLoose = "You loose! Rock beats Scissors";
const equality = "Equality!"

const playerWin = 0;
const computerWin = 0;

      function playRound(playerSelection,computerSelection, playerWin, computerWin) {
        
        computerSelection;

        if (computerSelection == "Scissors") {
          return rockWin;
          playerWin = (playerWin ++);
        }

        else if (computerSelection == "Paper") {
          return rockLoose;
          computerWin = (computerWin ++);
        }

        else if (computerSelection == "Rock") {
          return equality;
        }

        console.log(roundResult, playerWin, computerWin);

      }

      function game(playerSelection,computerSelection, playerWin, computerWin) {
        
        playRound();

      }
      
      

      var playerInput = "ROCK";
      const playerSelection = playerInput.toLowerCase();
      const computerSelection = getComputerChoice(choices);
      const roundResult = playRound(playerSelection,computerSelection, playerWin, computerWin);
      const gameResult = game(playerSelection, computerSelection, playerWin, computerWin)
