const Array2 = ["Abhi" , "nimi" , "praja" , "vicky"]
console.log(Array2[2]);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(fruits.sort());
const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);

const ar = new Array(1, 2, 3, 4, 5, 6);
console.log(ar);
const person = {firstName:"John", lastName:"Doe", age:46};
console.log(person);

// Array methods

cars.push(5,5,6)
console.log(cars);
cars.pop()//only last value remove hoti he
console.log(cars);

cars.unshift(9)
console.log(cars);
cars.shift()

console.log(cars);
console.log(cars.includes("Volvo"));
console.log(cars.indexOf(5));

const myArray =  cars.join()
console.log(myArray);
console.log(cars);

// slice splice

console.log("A ", cars);
const myn1 = cars.slice(1,3)
console.log(myn1);
console.log("B ", myArray);

const myn2 = cars.splice(1,3)
console.log(myn2);

