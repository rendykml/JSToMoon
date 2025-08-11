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