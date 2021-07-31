// ---------------------------------- Number ----------------------------------
const num = 42
const float = 42.42
const pow = 10e3

 let  str = +'42'
 let  str1 = Number.parseInt('42')
//  console.log(str1);

// console.log(typeof str, typeof str1)
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.isFinite(42));

const nan = Number.NaN
// console.log(nan); // number
// console.log(Number.isNaN(nan)); // true

const float1 = 4.123456789
// console.log(float1.toFixed(2)); //will return string 

const bigInt1 = 15n
// console.log(typeof bigInt1);



Math.sqrt(25)
Math.pow(5, 3)
Math.abs(-42)
Math.max(42, 12, 14, 68, 5)
Math.min(42, 12, 14, 68, 5)
Math.floor(4.9)
Math.ceil(4.9)
Math.round(4.4)
Math.trunc(4.9)

Math.random()
let getRandome = (min, max) => Math.floor( Math.random() * (max - min + 1) + min)
// console.log( getRandome(14, 43) )