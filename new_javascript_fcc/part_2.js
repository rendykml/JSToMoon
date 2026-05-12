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

//--------------------------------------//

const regex = /freeCodeCamp/;
console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("freeCodeCamp is great")); // true
console.log(regex.test("I love freeCodeCamp")); // true
console.log(regex.test("freecodecamp")); // false
console.log(regex.test("FREECODECAMP")); // false
console.log(regex.test("free")); // false
console.log(regex.test("code")); // false
console.log(regex.test("camp")); // false

const regex = /freeCodeCamp/i; //This can also work for a string with a random mix of uppercase and lowercase letters:
console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("freeCodeCamp is great")); // true
console.log(regex.test("I love freeCodeCamp")); // true
console.log(regex.test("freecodecamp")); // true
console.log(regex.test("FREECODECAMP")); // true
console.log(regex.test("free")); // false
console.log(regex.test("code")); // false
console.log(regex.test("camp")); // false

const regex = /freeCodeCamp/gi;

console.log(regex.lastIndex); // 0
console.log(regex.test("freeCodeCamp")); // true
console.log(regex.lastIndex); // 12
console.log(regex.test("freeCodeCamp is great")); // false
console.log(regex.lastIndex); // 0
console.log(regex.test("I love freeCodeCamp")); // true
console.log(regex.lastIndex); // 19
console.log(regex.test("freecodecamp")); // false
console.log(regex.lastIndex); // 0
console.log(regex.test("FREECODECAMP")); // true
console.log(regex.lastIndex); // 12
console.log(regex.test("free")); // false
console.log(regex.lastIndex); // 0
console.log(regex.test("code")); // false
console.log(regex.lastIndex); // 0
console.log(regex.test("camp")); // false

const start = /^freecodecamp/i;
const end = /freecodecamp$/i;
console.log(start.test("freecodecamp")); // true
console.log(end.test("freecodecamp")); // true
console.log(start.test("freecodecamp is great")); // true
console.log(end.test("freecodecamp is great")); // false
console.log(start.test("i love freecodecamp")); // false
console.log(end.test("i love freecodecamp")); // true
console.log(start.test("have met freecodecamp's founder")); // false
console.log(end.test("have met freecodecamp's founder")); // false
