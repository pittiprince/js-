const accountId = 144553 //constant declaration
let accountEmail ="princey2911@.com" //variables declared
var accountPassword ="12345" //variables declared 
accountCity="Bellary" //directly declared
let accountState; //undefined

/* note - use only const , prefer not to use var because of isssue in block space fucntional scope */

// accountId = 12 not allowed as it is a constant
accountEmail ="p@p.com"
accountPassword = "0000"
accountCity= "karnataka"


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])