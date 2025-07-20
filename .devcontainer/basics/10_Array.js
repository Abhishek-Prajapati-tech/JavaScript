const heros = ["thox" , "Ironman" , " spiderman"]
const heros1 = ["superman" , "flash" , "batman"]

// heros.push(heros1)
console.log(heros);

// console.log(heros[3][1]);
const allherose = heros.concat(heros1)
console.log(allherose)
const allherose1 = [...heros, ...heros1]

console.log(allherose1);

const another  = [ 1,2,3,[4,5,6],7,[5,2,3,5,[48,5,6,8,8]]]
const real_heros = another.flat(Infinity)
console.log(real_heros);
console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"}));
let score = 100
let score1 = 200
let score2 = 300
console.log(Array.of(score,score1,score2));
