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

function studentMsg(totalScores, studentScore) {
  let rataRataKelasBrok = getAverage(totalScores)
  let grade = getGrade(studentScore);
  let kataKataLulus= "";

  if(studentScore >= rataRataKelasBrok){
    kataKataLulus = " You passed the course."
  } else{ 
    kataKataLulus = " You failed the course."
  }

  return "Class average: " + rataRataKelasBrok + " Your grade: " + grade + "."+ kataKataLulus
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));