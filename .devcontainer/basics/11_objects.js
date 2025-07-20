// singleton hamesha constructor se banega
//
//// object litrals se ye singleton nhi (banta) hota iske multiple instensec ban jate he

//Object.create

// object litrals
const mysym = Symbol("key1")
const mysym1 = Symbol("key1")

const user = {
    name: "Abhishek",// dote(.) se acces kar sakte he ids value lp
    "fullname": "Abhishek prajapati", // is ko (.) se access kar sakte he
    [mysym]: "mykey1",//symbolekey jab tak squre breket lage ager breket hatag to normal key hogi
    
    age: 10,
    location: "bhopal",
    email: "Abhishekrajapati7470@gmail.com",
    IsLoggedIn: false,
    LastloginDay: ["monday","Saturday"]
}
console.log(user.email);
console.log(user["email"]);
console.log(user["fullname"]);
console.log(typeof(user["mysym"]));
console.log(user[mysym]);

user.email = "Abhiprajapati7470@gmail.com"
// Object.freeze(user)
user.email = "Abhip7470@gmail.com"
console.log(user);

// functions

user.greeting = function(){
    console.log("hello abhishek");
    
}
console.log(user.greeting);

user.greeting1 = function(){
    console.log(`hello abhishek, ${this.name}`);
    
}
// console.log(user.greeting);
console.log(user.greeting());
console.log(user.greeting1());