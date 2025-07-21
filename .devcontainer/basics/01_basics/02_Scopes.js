// let a = 10
// const b = 20
// var c = 30
// console.log(a);
// console.log(b);
// console.log(c);

//var c = 300// golble scope
let a = 300
if(true){// block scope
    let a = 10
const b = 20
console.log("INNER: ", a);
//var c = 30
}


// console.log(a);
// console.log(b);
console.log(a);
