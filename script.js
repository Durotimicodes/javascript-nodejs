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
}