
const AccuntId = 12345678
let AcccountEmail = "Abhi7470@gmail.com"
var Accountpossword = "123456"
accountCity = "bhopal"
console.log([AcccountEmail, Accountpossword, AccuntId, accountCity]);
// accountId = 2 // not allow


//  prefer not to use var 
//  because of issue in block scope and functional scope
AcccountEmail = "Abhi8085@gmail.com"
Accountpossword = "789456"
accountCity = "indore"

console.table([AcccountEmail, Accountpossword, AccuntId, accountCity]);
