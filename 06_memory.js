// Stacks (primitive) and Heap (non Primitive)

let myYoutubeName = "ToConcern"

let anotherName = myYoutubeName
anotherName = "dongole"
 console.log(myYoutubeName);
 console.log(anotherName);
// in stacks when one variable is assigned to a new variable it creates a copy of the previous variable. so whenever we change the value of the new variable the value of old variable is not change
let userOne = {
email: "userone@gmail.com",
upi: "user@sbi"
}

let userTwo = userOne

userTwo.email = "amit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
// variable is stored in stack but value stored in heap for reference data type
// but in heap memory when two variable is pointing to the same function or object, if one variable is hanged anotherone will automatically changed
