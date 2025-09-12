const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn')
const result = document.getElementById('output')


const resultNumber = (input)=>{
  if (input === 9){
    return "IX"
  }
  return input
}


const checkResultNumber = ()=>{

  const inputInt = parseInt(inputNumber.value) 

  if(!inputNumber.value ||  isNaN(inputInt)){
    result.textContent = "Please enter a number greater than or equal to 1"
  } else if(inputInt >= 4000){
    result.textContent = "Please enter a number less than or equal to 3999"
  } else if (inputInt <= 0){
    result.textContent = "Please enter a number greater than or equal to 1"
  } else{
    result.textContent = resultNumber(inputInt)
  }


}

convertBtn.addEventListener("click", ()=>{
  console.log(20)
})