//data type ko kis tarike se memory me rakha jata he or acceses kiya jata he
//data type ki 2 catagory he
// 1 => primitive 2 => Nonprimitive{referancing}

//JavaScript is a dynemuc type language
//1=> primitive 
// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100//Number
const value = 103.52//Number

const isloggedIn = false//Boolean
const temp = null//null
let undefined;//undefined

const id = Symbol('123')//Symbole
const anotherId= Symbol('123')

console.log(id == anotherId);//false
const BigNUmber = 34634463464463443434n
console.log(BigNUmber);

//2 => referance{Non primitive}
// Array. object, Functions

const heros = ["shaktiman" , "naagraj" , "abhishek"]
let myobj = {
    name: "abhishek",
    age : 20,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof BigNUmber)
console.log(typeof myfunction);
console.log(heros);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// memory working two type
// Stack(primitive), Heap (non-primitive)

let myYoutubename = "Abhishekprajapati"
anothername = "narendraprajapati"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "Abhishekprajapati7470@gmail.com",
    upi: "7470320905@ybl"
}
let usertwo = userOne
usertwo.email = "Abhipraja7470@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);




