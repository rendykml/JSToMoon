const regex = /freeCodeCamp/;
const test = regex.test("e");
console.log(test);

const regex = /freecodecamp/;
const str = "freecodecamp is rly kewl";
const replaced = str.replace(regex, "freeCodeCamp");
console.log(replaced);