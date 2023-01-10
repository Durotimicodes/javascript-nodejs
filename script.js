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