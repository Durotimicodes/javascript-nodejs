'use strict'

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