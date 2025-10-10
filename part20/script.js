const scoreInputs = document.querySelectorAll("#score-options input")
const scoreSpans = document.querySelectorAll("#score-options span")
const roundElement = document.getElementById("current-round")
const rollsElement = document.getElementById("current-round-rolls")
const totalScoreElement = document.getElementById("total-score")
const scoreHistory = document.getElementById("score-history")
const listOfAllDice = document.querySelectorAll(".die")
const rulesBtn = document.getElementById("rules-btn")
const rulesContainer = document.querySelector(".rules-container")
const rollDiceBtn = document.getElementById("roll-dice-btn")
const keepScoreBtn = document.getElementById("keep-score-btn")

let diceValuesArr = []
let rolls = 0
let score = 0
let round = 1
let isModalShowing = false;



