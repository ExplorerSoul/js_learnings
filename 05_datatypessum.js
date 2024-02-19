// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId)
const bigNumber = 2454163956465n

console.log("typeof score: " + typeof score)
console.log("typeof scoreValue: " + typeof scoreValue)
console.log("typeof isLoggedIn: " + typeof isLoggedIn)
console.log("typeof outsideTemp: " + typeof outsideTemp)
console.log("typeof id: " + typeof id)
console.log("typeof anotherId: " + typeof anotherId)
console.log("typeof bigNumber: " + typeof bigNumber)



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Amit",
    age: 21,
}

const myFunction = function(){
    console.log("Hello Amit");
}

console.log("typeof myObj: " + typeof myObj);
console.log("typeof heros: " + typeof heros);
console.log("typeof myFunction: " + typeof myFunction);

// For Reference
// https://262.ecma-international.org/10.0/#sec-ecmascript-data-types-and-values