// ---------------------------------- function ----------------------------------


// greet1('pete')

function greet1(name) {                 // Function decloration
    console.log(name)
}


const greet2 = function (name) {        //function expression
    console.log(name)
}
// greet2('molly')


// let counter = 0
// const interval = setInterval(() => {     // anonimous function
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         counter++
//         console.log(counter);
//     }
// }, 200)


const greet3 = (name, age) => {            // arrow function
    console.log(name, age)
}
// greet3('pete', 42)


const greet4 = name => console.log(name)    // lambda function
// greet4('pete')


const summ = (a, b = 1) => console.log(a + b)  // default values
// summ(41)


const sumAll = (...all) => {                  // rest
    let result = 0;

    for (item of all) {
        result += item
    }
    return result
}
const res2 = sumAll(1, 2, 3, 4, 5, 6)
// console.log(res2);



function createMember(name) {                   //closures

    return function (lastName) {
        console.log(name, lastName);
    }
}
const logWithLastName = createMember('Pete')

// console.log(logWithLastName('anderson'));
// console.log(logWithLastName('swenson'));