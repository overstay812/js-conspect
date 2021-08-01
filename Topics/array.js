// ---------------------------------- statements ----------------------------------


const carsArray = ['tesla', 'bmw', 'mersedes', 'kalina']
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [
    { name: 'pete', budget: 5000 },
    { name: 'molly', budget: 6300 },
    { name: 'adam', budget: 2600 }
]

carsArray.push('reno')
carsArray.unshift('suzuki')
// console.log(carsArray);

carsArray.shift()
carsArray.pop()
// console.log(carsArray)

// let elem = carsArray.shift()         //will return value and remove in from array
// let elem2 = carsArray.pop()
// console.log(elem2);

// console.log(carsArray.reverse());       //will mutate original array
// console.log(carsArray.join(' '))           //array to string

const polindrom = 'Аргентина манит негра'
let result2 = polindrom.split('')
    .reverse()
    .join('')
// console.log(result2);

const carIndex = carsArray.indexOf('bmw')
carsArray[carIndex] = 'porshe'
// console.log(carsArray)

const peopleIndex = people.findIndex(item => item.budget === 2600)
// console.log(people[peopleIndex]);

const person1 = people.find(item => item.budget === 6300)
// console.log(person1);

// console.log(carsArray.includes('tesla'))

const pow2 = item => item ** 2
const pow2Fib = fib.map(pow2)             //map will return new array
// console.log(pow2Fib);
const res3 = pow2Fib.filter(item => item > 10)
// console.log(res3);


const people2 = [
    { name: 'pete', budget: 5000 },
    { name: 'molly', budget: 6000 },
    { name: 'adam', budget: 2000 }
]
const sumBudget = people2.reduce((prev, cur) => {
    if (cur.budget > 3000) {
        prev += cur.budget
    }
    return parseInt(prev)
}, 0)
console.log(sumBudget)

const sumBudget2 = people2.filter(item => item.budget > 3000)
    .reduce((prev, cur) => {
        prev += cur.budget
        return prev
    }, 0)
console.log(sumBudget2);








