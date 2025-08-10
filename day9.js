while (rows.length < count) {
  done++;
  rows.push(padRow(rows.length + 1, count));
}

for (let i = count; i > 0 ; i--){
    rows.push(padRow(i, count));

}

const numbers = [1, 2, 3];
const shifted = numbers.shift();
const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);
console.log(shifted)

let inverted = true;
for (let i = 1; i <= count; i++) {

  rows.unshift(padRow(i, count));
}