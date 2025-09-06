const input = document.getElementById('inputText');
const chekBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
const textInput = document.getElementById('text-input');


function cleanInputString(str) {
  const regex = /[+-_\s]/g;
  return str.replace(regex, '');
}

const chekPalindrome = (str) => {
    const reversedStr = cleanInputString(str.split('').reverse().join(''));
    return str === reversedStr;
}

chekBtn.addEventListener('click', () => {
    const inputValue = input.value;
    textInput.textContent = inputValue;
});

