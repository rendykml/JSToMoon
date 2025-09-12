const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn')
const result = document.getElementById('output')


const resultNumber = (input)=>{

  if(input === 0 || input ===1){
    return "selesai"
  }else if (resultNumber(input) >= 9){
    return retultNumber((input/9) + "IX")
  } else if(input === 4){
    return "IV"
  } else if (input === 40){
    return "XL"
  }
  return input
}


const checkResultNumber = ()=>{

  const inputInt = parseInt(inputNumber.value) 

  if(!inputNumber.value ||  isNaN(inputInt)){
    result.textContent = "Please enter a valid number"
  } else if(inputInt >= 4000){
    result.textContent = "Please enter a number less than or equal to 3999"
  } else if (inputInt <= 0){
    result.textContent = "Please enter a number greater than or equal to 1"
  } else{
    result.textContent = resultNumber(inputInt)
  }



}


convertBtn.addEventListener("click", checkResultNumber
)