let rps = ["rock", "paper", "scissors"];
let rock = rps[0];
let paper = rps[1];
let scissors = rps[2];
let pCounter = 0;
let cCounter = 0;
function playRound(playerSelection) {
  let playerWin = "";
  let num = Math.floor(Math.random() * rps.length);
  let computerSelection = rps[num];
  if (pCounter < 6 && cCounter < 6) {
    if (playerSelection === computerSelection) {
      console.log("This is a tie!");
    }
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      pCounter++;
      playerWin = "You win!";
      console.log(playerWin);
    }
    {
      if (
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")
      ) {
        cCounter++;
        playerWin = "You lost!";
        console.log(playerWin);
      }
    }
  } else {
    return "game over";
  }
  console.log(`Your score:${pCounter} Computer score:${cCounter}`);
}
