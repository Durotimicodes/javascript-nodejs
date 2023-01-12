'use strict';

let num = 21
let firstName = 'Oluwadurotimi'
let middleName = 'Edmond'
let lastName = 'Fagbuyi'
const templLiteral = `My new age is ${21}, but my names remain ${firstName} ${middleName} ${lastName}`

console.log(templLiteral)


//switch statement

const day = 'Tuesday'

switch(day) {
    case 'Monday': 
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    console.log(`Today is ${day}`)
    break

    default:
    console.log(`Todat is unknown`)
}

//specifying arrays
let arrayOne = ['Micheal', 'Chucks', 'Timi', 'Joseph']

let arrayTwo = new Array('Micheal 2', 'Chucks2', 'Timi2', 'Joseph')

console.log(arrayOne, arrayTwo)

const myObj = {
    firstName : 'Oluwadurotimi',
    middleName : 'Edmond',
    birthYear: 1991,
    surName : 'Fagbuyi',
    calAge : function() {
        this.age = 2023 - this.birthYear
        return this.age;
    }
}



console.log(`My name is ${myObj.firstName} ${myObj.middleName}
${myObj.surName} and i am going to be ${myObj.calAge()}
this year July
`)



// let rep = 1;
//  while(rep <= 10) {
//     console.log(`Exercise repetition is ${rep}`);
//     rep++;
//  }

 //dice
 let randNumb = Math.trunc(Math.random() * 6) + 1

while( randNumb != 6 ){
    console.log(`This is the random number ${randNumb}`)
    randNumb++
}

//Advanced Javascript
const first = () => {
    const greet = 'Hi';
    const second = () => {
        
    }
    return second
}

const newFunc = first();
newFunc();

//Closures := a function ran ,the function executed. Its never going to exercute again,
//but its going to remember that there are references to those variables so the child scope function always have access to the parent scope function

//Currying
//is a process of converting a function that takes multiple arguments into
//a function that takes it one at a time.
//why curry ? because it makes code extensible

const multip = (a, b) => a * b ;
const curriedMultiPly = (a) => (b) => a * b ;

const multiplyBy5 = curriedMultiPly(5);
multiplyBy5(5)

//Compose:= this is act of putting two functions together to form a 3rd function
//where the output of one function is the input of the other

const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num +1 ;

console.log(compose(sum, sum)(5))

//ForEach 
const oneArray = [1,2,3,4]
const newArray = []

const doubleNum = oneArray.forEach((num) => {
    newArray.push(num * 2);
})

console.log('forEach iteration', newArray)

//map , filter and reduce 
//map :does the exact samething as forEach just that its better because map has a restriction you
//need to return a value
const myMap = oneArray.map(num =>  num * 3);

console.log('map iteration',myMap)

const filterArray = myMap.filter(num => num > 2)
console.log(filterArray)

//reduce : you can filter and iterate with reduce
const reduceArray = myMap.reduce((accumulator, num) => {
    return accumulator > num
}, 2)

console.log('The accumulator',reduceArray)

//reference type
const object1 = {prop : 10}
const object2 = object1
const object3 = {prop : 10}

object1 == object2 //true
//context

const object4 = {
    a : function(){
        console.log(this)
    }
}

//instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('Wizard', this);
    }
    play() {
        console.log(`Hey i am a ${this.type}`)
    }
}

const wizard1 = new Wizard('Edmond', 'Water Power');
const wizard2  = new Wizard('Tara', 'Fire Power')

//Passed by reference, how to clone an object without passing by reference
const obj1 = {a : 'a', b: 'b', c: 'c'}
const obj2 =  Object.assign({d:'d'}, obj1) //Object.assign or use the spread operator
const obj3 = {...obj1}// however this is called shallow cloning 

console.log('object 2',obj2)
console.log('object 3',obj3)

//deep cloning
const superaClone = JSON.parse(JSON.stringify(obj1))
console.log(superaClone)


//ES7 
/*
methods : .includes() can be used on arrays and strings
exponential function
*/

let s = 'Hellooo'
console.log(s.includes('o'))

let pets = ['Dog', 'Cat', 'Bear']
console.log(pets.includes('tiger'))

const expo = (x) => x**2 ;

console.log(expo(2))

//ES8 
/*
string.padding
.padStart()
.padEnd()

object.keys
object.values
object.entries
*/

let testObj = {
    'username1' : "Pamela",
    'username2' : 'Tayo',
    'username3' : 'Raman'
}

Object.keys(testObj).forEach((key, ind) => {
    console.log(ind+1, key, testObj[key])
})


Object.values(testObj).forEach(value => console.log(value));
Object.entries(testObj).forEach(value => console.log(value));

//ES10
/*
.flat() :used to flatten nested arrays and remove unwanted trailing commas

.flatMap()

.trimStart()
.trimEnd()

Object.fromEntries : transforms a arrays of key value pair into an object

try {

} catch {

}
*/

//ES 2020
/*
BigInt
typeof 3n //this is a bigInt



*/

//Opetional Chaining Operator
let will_pokemon = {
    pikachu : {
        species: 'Mouse Pokemon',
        height: 0.6,
        weight: 8
    }
}

let andre_pokemon = {
    raichu : {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30
    }
}

//used to check for properties in a object
let weight3 = andre_pokemon?.raichu?.weight

console.log("Weight",weight3)

//Nullish Coalescing Operator ??
let weight4 = andre_pokemon?.raichu?.power ?? 'no power'
console.log(weight4)