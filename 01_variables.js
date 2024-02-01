
const accountId = 1234556
let accountEmail = "amit@google.com"
var accountPassword = "123456"
accountCity = "Silchar"
let accountState; // only declared variable// using semicolon or not is same

// accountId = 2 //Uncaught TypeError TypeError: Assignment to constant variable// not allowed

console.log(accountId);

accountEmail = "smriti@amit.com"
accountPassword = "1472215"
accountCity = "Guwahati"

/*
Prefr not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // prints values in tabular form