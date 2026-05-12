const regex = /^\d\d\d\d$/;

const regex = /^\d{4}$/;

const regex = /^\d{4}$/;
console.log(regex.test("123")); // false
console.log(regex.test("1234")); // true
console.log(regex.test("12345")); // false
console.log(regex.test("123456")); // false
console.log(regex.test("1234567")); // false

const regex = /^\d{4,}$/;

const regex = /^\d{4,}$/;
console.log(regex.test("123")); // false
console.log(regex.test("1234")); // true
console.log(regex.test("12345")); // true
console.log(regex.test("123456")); // true
console.log(regex.test("1234567")); // true

const regex = /^\d{4,6}$/;

const regex = /^\d{4,6}$/;
console.log(regex.test("123")); // false
console.log(regex.test("1234")); // true
console.log(regex.test("12345")); // true
console.log(regex.test("123456")); // true
console.log(regex.test("1234567")); // false

const regex = /^[a-zA-Z]\d{4,6}$/;

const regex = /^[a-zA-Z]?\d{4,6}$/;
console.log(regex.test("123")); // false
console.log(regex.test("a1234")); // true
console.log(regex.test("12345")); // true
console.log(regex.test("az12345")); // false
console.log(regex.test("X123456")); // true
console.log(regex.test("1234567")); // false

const regex = /^[a-zA-Z]*\d{4,6}$/;
console.log(regex.test("123")); // false
console.log(regex.test("a1234")); // true
console.log(regex.test("12345")); // true
console.log(regex.test("az12345")); // true
console.log(regex.test("X123456")); // true
console.log(regex.test("1234567")); // false

const regex = /^[a-zA-Z]+\d{4,6}$/;
console.log(regex.test("123")); // false
console.log(regex.test("a1234")); // true
console.log(regex.test("12345")); // false
console.log(regex.test("az12345")); // true
console.log(regex.test("X123456")); // true
console.log(regex.test("1234567")); // false
