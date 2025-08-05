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