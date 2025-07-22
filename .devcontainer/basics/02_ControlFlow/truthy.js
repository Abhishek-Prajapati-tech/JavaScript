const usrmail = [] //true  //"" fals // Abhi7470@gmail.com"  true
if (usrmail) {
    console.log("got th usrmail");
} else{
    console.log("dont hav usr mail");
}

//falsy valu

// fals , 0, -0, BigInt, "" , null , unddfined, NaN

//truthy valu
// "0", 'fals', " " , [], {}, function()

if (usrmail.length === 0) {
    console.log("Array is emmpaty"); 
}
//nullish Coalescing Opeertaor (??): null undefine

let val1;
let val2, val3 , val4;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// ternary operator

// condition ? tru6e : false

const icecream = 50
icecream >= 80 ? console.log("less than 80"): console.log("more than 80");




