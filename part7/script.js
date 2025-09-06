const input = document.getElementById('text-input');
const chekBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
// const textInput = document.getElementById('text-input');
const reset = document.getElementById('resetButton');


const cleanInputString = (str) => {
    const regex = /[_\/.:,)(+-\s]/g;
 return str.toLowerCase().replace(regex, "");
}


const chekPalindrome = (str) => {
   
    const reversedStr = cleanInputString(str.split('').reverse().join(''));
     if (str === '') return '';
    return str === reversedStr;
}

const clearInput = () => {
    input.value = '';
}

const outputResult = (str)=> {
    const hasilInput = input.value;
    const clearInput = cleanInputString(hasilInput);
    if(chekPalindrome(clearInput)){
        result.style.color = 'green';
        return result.textContent = `${hasilInput} is a palindrome`
    } else if (chekPalindrome(cleanInputString(input.value)) === ''){
        result.style.color = 'red';
        console.log(alert('Please input a value'))
        return result.textContent = 'Please input a value'
    } else if(!chekPalindrome(clearInput)){
        result.style.color = 'orange';
        return result.textConntent = `${hasilInput} is not a palindrome`
    } else {
        return result.textContent = 'Error'
    }
}

reset.addEventListener('click', clearInput);

chekBtn.addEventListener('click', () => {
    const inputValue = input.value;
    console.log(chekPalindrome(inputValue));
    result.textContent = outputResult(inputValue)
    console.log(input.value);
    console.log(cleanInputString(input.value))
});


