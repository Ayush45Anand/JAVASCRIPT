const accountId =14321
let accountEmail="ayushclg45@gmail.com"
var accountPassword="12345"
accountCity="bihar"
let accountState;

//accountId=2 //not allowed

accountEmail="ayush.com"
accountPassword="23421"
accountCity="delhi"

/* 
prefer not to use var
because of isssue in block scope and functional scope
*/ 
console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])