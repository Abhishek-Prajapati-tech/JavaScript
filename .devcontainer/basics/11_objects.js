// singleton

//// object litrals

//Object.create

const mysym = Symbol("key1")
const mysym1 = Symbol("key1")

const user = {
    name: "Abhishek",// dote(.) se acces kar sakte he ids value lp
    "fullname": "Abhishek prajapati", // is ko (.) se access kar sakte he
    [mysym]: "mykey1",
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
Object.freeze(user)
user.email = "Abhip7470@gmail.com"
console.log(user);

// functions

user.gree