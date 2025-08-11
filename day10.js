function getAverage(scores)  { // Function to calculate the average of an array of scores
  let sum = 0; 
  let pembagi = scores.length;
  for(let i = 0; i < pembagi; i++){
    sum = sum + scores[i];
    
  }
  return sum/pembagi
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]))

function getGrade(score) { // Function to determine the grade based on the score
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
function hasPassingGrade(score) {
 
  let nilai = getGrade(score);


  if (nilai === "A"){
    lulus = false;
  }
  
  if (lulus){
    return "anda lulus";
  } else {
    return "anda tidak lulus" 
  }

}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

function hasPassingGrade(score) {
    let ambilNilai = getGrade(score);
    let lulus = true;
    if (ambilNilai === "F"){
        lulus = false;
    }
    return lulus;
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));