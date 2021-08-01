// ---------------------------------- String ----------------------------------

const name1 = new String('Konstantin') // object
// console.log(typeof name1.valueOf());

const pete = 'Pete'
const molly = 'Molly'
let isMaleName = true
const greet = `Hi there, i'm ${isMaleName ? pete : molly}!`
// console.log(greet);

const name4 = 'Veniamin'

// console.log(name4.length);
// console.log(name4.toUpperCase());
// console.log(name4.toLowerCase());
// console.log(name4.charAt(3));
// console.log(name4.indexOf('iam'));  // if SubString didnt find, show -1, you can use it for comparing
// console.log(name4.toLowerCase().startsWith('Ven')); //the register is important!
// console.log(name4.startsWith('Ven'));
// console.log(name4.endsWith('min'));
// console.log(name4.repeat(3));
// console.log(name4.split(''));


const password = '     password     '
// console.log(password.trim());
// console.log(password.trimLeft());
// console.log(password.trimRight());
