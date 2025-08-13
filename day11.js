function studentMsg(totalScores, studentScore) {
  
  let rataRata = getAverage(totalScores);
  let grade = getGrade(rataRata);
  let classAverage = studentScore;

  if (totalScores => studentScore){
    return `Class average: ${classAverage}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${classAverage}. Your grade: ${grade}. You failed the course.`;
  }

  return 
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));