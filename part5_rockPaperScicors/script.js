function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  const check = hasPlayerWonTheRound(userOption, computerResult);
  let message = ""
  if(check === true){
    message = "Player wins! " + userOption + " beats " + computerResult; 
    playerScore += 1
  } else if(userOption === computerResult){
    message = `It's a tie! Both chose ${userOption}`
  } else {
    message = `Computer wins! ${computerResult} beats ${userOption}`
    computerScore += 1
  }

  return message;
 
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);