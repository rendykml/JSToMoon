const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let round = 1;
let rolls = 0;

const rollDice = () => {
  diceValuesArr = [];

  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice);
  };

  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });
};

const updateStats = () => {
  rollsElement.textContent = rolls;
  roundElement.textContent = round;
};

const updateRadioOption = (index, score) => {
  scoreInputs[index].disabled = false;
  scoreInputs[index].value = score;
  scoreSpans[index].textContent = `, score = ${score}`;
};


const getHighestDuplicates = (diceArr)=>{
  const counts = {}
  let sum  = 0;

  diceArr.forEach((num)=>{
    sum += num
    counts[num] = (counts[num]||0) + 1
  })

   const hasFourOfKind = Object.values(counts).some(count => count >= 4);
  const hasThreeOfKind = Object.values(counts).some(count => count >= 3); 
  
  if (hasFourOfKind && hasThreeOfKind) {
    updateRadioOption(1, sum); 
    updateRadioOption(0, sum); 
  } else if (hasThreeOfKind) {
    updateRadioOption(0, sum); 
  } else {
    updateRadioOption(5, 0); 
}
}

rollDiceBtn.addEventListener("click", () => {
  if (rolls === 100) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rolls++;
    rollDice();
    updateStats();
    getHighestDuplicates(diceValuesArr);
  }
});


rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;

  if (isModalShowing) {
    rulesBtn.textContent = "Hide rules";
    rulesContainer.style.display = "block";
  } else {
    rulesBtn.textContent = "Show rules";
    rulesContainer.style.display = "none";
  }
});