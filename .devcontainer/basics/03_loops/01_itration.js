// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    if (element == 5) {
        console.log("5 is a best num");
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(`outr loop valu: ${i}`);
    for (let j = 1; j <= 10; j++) {
    //console.log(`Innr loop value ${j} and innr loop valu${i}`);
    //console.log(i + '*' +  j + `=` + i * j);
    
    }
}

let myArray = ["flash" , "batman", "suprman"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const a = myArray[i];
    console.log(a);
    
}

// break and continu
let myArray1 = ["flash" , "batman", "suprman"]
console.log(myArray1.length);
for (let i = 0; i < myArray1.length; i++) {
    const a = myArray1[i];
    console.log(a);
    break;
}
//continu
let myArray2 = ["flash" , "batman", "suprman"]
console.log(myArray2.length);
for (let i = 0; i < myArray2.length; i++) {
    // const a = myArray2[i];
    continue
    console.log(i);
    
}