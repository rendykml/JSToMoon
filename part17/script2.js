// kode saya

const inputUser = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn"); 
const result = document.getElementById("results-div");

const regex1 = /^(1[\s])?(\d{3}|1?\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;

const validList = [regex1];

const isValid = (input) => validList.some((regex)=>regex.test(input));

checkBtn.addEventListener("click", ()=>{
  if(inputUser.value === ""){
    alert("Please provide a phone number");
    return;
  }

  result.textContent = isValid(inputUser.value) 
    ? `Valid US number: ${inputUser.value}`
    : `Invalid US number: ${inputUser.value}`;
});

clearBtn.addEventListener("click", ()=>result.textContent = "");