const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn')
const result = document.getElementById('output')


const resultNumber = (input)=>{


  if(input === 1000){
    return + "M"
  }else if(input >= 40){
    return resultNumber(input - 40) + "LX"
  } else if (input >= 10){
    return resultNumber(input - 10)  + "X"
  } else if (input === 9){
    return resultNumber(input - 9) + "IX"
  }else if (input >= 5){
    return resultNumber(input - 5) + "V"
  } else if(input === 4){
    return resultNumber(input-4)+ "IV"
  } else if(input >= 1){
    return resultNumber(input-1 )+ "I"
  } else if (input === 0){
    return ""
  } else{
    return input
  }
}


const checkResultNumber = ()=>{

  const inputInt = parseInt(inputNumber.value) 

  if(!inputNumber.value ||  isNaN(inputInt)){
    result.textContent = "Please enter a valid number"
  } else if(inputInt >= 4000){
    result.textContent = "Please enter a number less than or equal to 3999"
  } else if (inputInt < 0){
    result.textContent = "Please enter a number greater than or equal to 1"
  } else{
    result.textContent = resultNumber(inputInt).split("").reverse().join("")
    numberInput.value = "";
  }



}


convertBtn.addEventListener("click", ()=>{
  checkResultNumber()
}
)