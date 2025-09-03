function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  let playerMenang = true;

  if(player==="Rock" && computer==="Scissors"){
    playerMenang = true
  }else if(player ==="Scissors" && computer==="Rock"){
    playerMenang = false;
  }else if(player === "Paper" && computer==="Rock"){
    playerMenang = true;
  }else if(player===computer){
    playerMenang = false;
  }else if(player==="Scissors" && computer==="Rock"){
    playerMenang = false;
  } else if(player==="Rock" && computer==="Paper"){
    playerMenang = false;
  }else if(player==="Scissors" && computer==="Paper"){
    playerMenang = true;
  } 
  else {
    playerMenang = false;
  }
  return playerMenang;
}

console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
console.log(hasPlayerWonTheRound("Scissors", "Rock")); 