const regex = /freeCodeCamp/;
const test = regex.test("e");
console.log(test);

const regex = /freeCodeCamp/;
const match = "freeCodeCamp".match(regex);
console.log(match);

const regex = /freecodecamp/;
const str = "freecodecamp is rly kewl";
const replaced = str.replace(regex, "freeCodeCamp");
console.log(replaced);