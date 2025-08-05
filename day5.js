function getName() {
  const name = "Camper cat";
  return name;
}

console.log(getName()); // "Camper cat"

const capturedReturnValue = getName();
console.log(capturedReturnValue); // "Camper cat"

console.log(name); // reference error
function padRow(name) {
  const test = "Testing";  
  return test;
}

console.log(padRow());
const ambilPadrow = padRow();
console.log(ambilPadrow);

function padRow(name) {
  const test = "Testing";
  console.log("This works!");
  return test; //menyetopkan nilai test ke variabel yang memanggil fungsi ini
  console.log("This works!");//funsi ini tidak akan pernah dieksekusi karena sudah ada return sebelumnya
}


function padRow(rowNumber) {
  let rowNumber = 3;
  let stars = "*".repeat(rowNumber); // menjadi "*".repeat(3)
  return rowNumber;
}

padRow();
character.repeat(3); // menghasilkan "***"