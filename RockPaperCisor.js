function getComputerChoice() {
  const choices = ["Rock", "Paper", "Cisor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const computerchoice = getComputerChoice();
console.log(computerchoice);

