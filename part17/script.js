const inputUser = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn"); 
const result =document.getElementById("results-div")

const regex1 = /^(1[\s])?(\d{3}|1?\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;

const isValid = (input) => regex1.test(input)

checkBtn.addEventListener("click" , ()=>{
  if(inputUser.value === ""){
    alert("Please provide a phone number");
    return
  }

  result.textContent = isValid(inputUser.value) ? `Valid US number: ${inputUser.value}`: `Invalid US number: ${inputUser.value}`
})

clearBtn.onclick = () => result.textContent = ""

