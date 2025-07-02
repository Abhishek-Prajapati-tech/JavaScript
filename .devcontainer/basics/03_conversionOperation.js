//case 1
let score = 33

console.log(typeof score);
console.log(typeof(score));

let valueNumber1 = Number(score)
console.log(typeof valueNumber1);
console.log(valueNumber1);//33

//case 2
let scor = "33abc"

console.log(typeof scor);
console.log(typeof(scor));

let valueNumber2 = Number(scor)
console.log(typeof valueNumber2);
console.log(valueNumber2);//NaN

//case 3

let sco = null

console.log(typeof sco);
console.log(typeof(sco));

let valueNumber3 = Number(sco)
console.log(typeof valueNumber3);
console.log(valueNumber3);//0

//case 4

let sc = undefined

console.log(typeof sc);
console.log(typeof(sc));

let valueNumber4 = Number(sc)
console.log(typeof valueNumber4);
console.log(valueNumber4);//NanN

// case 5
let s = true

console.log(typeof s);
console.log(typeof(s));

let valueNumber5 = Number(s)
console.log(typeof valueNumber5);
console.log(valueNumber5);//1

// 33 = 33
// "33abc" = NaN
//true => 1 , false => 0

let isLoggedIn = true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true , 0 => false
// "" => false
// "abhisheke" = true

let StringNumber = 423
let Number1 = String(StringNumber)
console.log(Number1);
console.log(typeof Number1);
