const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const resultNumber = (input) => {
  if (input >= 1000) {
    return "M" + resultNumber(input - 1000);
  }else if (input >= 900) {
    return "CM" + resultNumber(input - 900);
  }else if (input >= 500) {
    return "D" + resultNumber(input - 500);
  } else if (input >= 400) {
    return "CD" + resultNumber(input - 400);
  } else if (input >= 100) {
    return "C" + resultNumber(input - 100);
  } else if (input >= 90) {
    return "XC" + resultNumber(input - 90);
  } else if (input >= 50) {
    return "L" + resultNumber(input - 50);
  } else if (input >= 40) {
    return "XL" + resultNumber(input - 40);
  } else if (input >= 10) {
    return "X" + resultNumber(input - 10);
  } else if (input === 9) {
    return "IX";
  } else if (input >= 5) {
    return "V" + resultNumber(input - 5);
  } else if (input === 4) {
    return "IV";
  } else if (input >= 1) {
    return "I" + resultNumber(input - 1);
  } else {
    return "";
  }
};

const checkResultNumber = () => {
  const inputInt = parseInt(inputNumber.value);

  if (!inputNumber.value || isNaN(inputInt)) {
    result.textContent = "Please enter a valid number";
  } else if (inputInt >= 4000) {
    result.textContent = "Please enter a number less than or equal to 3999";
  } else if (inputInt < 0) {
    result.textContent = "Please enter a number greater than or equal to 1";
  } else {
    result.textContent = resultNumber(inputInt)
    inputNumber.value = "";
  }
};

convertBtn.addEventListener("click", () => {
  checkResultNumber();
});
