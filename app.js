// define, redefine and update variables

// VAR
// LET
// CONST

// define
var number = 100;
console.log(number);
// update
number = 200;
console.log(number);
// redefine
var number = 'orange';
console.log(number);

// define
let amount = 100;
console.log(amount);
// update
amout = 200;
console.log(amount);
// redefine
// let amout = 'orange';
// console.log(amount);

// define
const total = 100;
console.log(total);
// update
// total = 200;
// console.log(total);

const person = { name: "bob" };
person.name = "peter";
// person = [];
console.log(person);

// function greeting(params) {
//     // local scope
//     var value = "hello";
// }
// var value = 100;
// console.log(value);

function greeting1(params) {
    // local scope
    let greet = "hello";
}
let value = 100;
console.log(value);
