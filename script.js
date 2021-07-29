
//                                  FIRST PART

// ---------------------------------- Types ----------------------------------
const string = "string"
const number = 42
const boolean = true
const object = { name: "pete", age: "20" }
const array = ["one", "two", "three"]
const undefiend = undefined
const nullElemet = null

//  ---------------------------------- Operators and Logical operators ----------------------------------

let operators = `+ - * / % > < >= <= === ++ -- += && || !` //to get to know operator precedence

// ---------------------------------- statements ----------------------------------

let bool = 5
if (bool > 5) {
  // console.log("bigger")
} else if (bool < 5) {
  // console.log("less")
} else {
  // console.log("equals")
}

let res = bool > 5 ? "bigger" : "less"

switch (bool) {
  case bool > 5:
    "bigger"
    break
  case bool < 5:
    "less"
    break
  default:
    "unknown"
}

// ---------------------------------- Functions ----------------------------------

const foo1 = function(name, age) {
  console.log(name , age)
}
// foo1("Pete", 42)

const foo2 = name => console.log(name)
// foo2("molly")

// ---------------------------------- Arrays ----------------------------------

const carsArray1 = ['bmw', 'reno', 'shoha']
const carsArray2 = new Array('bmw', 'reno', 'shoha')

// console.log(carsArray1.length)

carsArray1[0] = 'tesla'
carsArray1[carsArray1.length] = 'subaru'
// console.log(carsArray1)

// ---------------------------------- Loops ----------------------------------

const carsArray3 = new Array('bmw', 'reno', 'shoha')

for(let i = 0; i <= carsArray2.length - 1; i++){
  // console.log(carsArray2[i]);
}

for (let item of carsArray3) {
  // console.log(item);
}

  // ---------------------------------- Object ----------------------------------

const person = {
  firstName: 'Pete',
  lastName: 'Swenson',
  years: 42,
  languales: ['Ru', 'Eng', 'De'],
  hasWife: false,
  sayHallo(greet){
    console.log(greet);
  }
}
// console.log(person.firstName);
// console.log(person['lastName']);
// const key = 'years'
// console.log(person[key]);
// person.hasWife = true
// person.isProgrammer = true
// console.log(person);
// person.sayHallo('Hi there!')


//                                   SECOND PART

