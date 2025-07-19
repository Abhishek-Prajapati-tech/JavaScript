const numbr = 400;
console.log(numbr);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const nextvalu = 123.166546

console.log(nextvalu.toPrecision(2));
const h1 = 10000000
console.log(h1.toLocaleString('en-IN'));

//  +++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-45));
console.log(Math.round(4.3));
console.log(Math.ceil(65.164));//66
console.log(Math.floor(65.164));//65
console.log(Math.sqrt(81));
console.log(Math.max(65, 549, 65465,45));
console.log(Math.min(65, 549, 65465,45));
console.log(Math.random());// only 0 and 1 k bich me value dti h
console.log((Math.random()*10) + 1);// 1 se 9 tak ki sabi point value dega
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
