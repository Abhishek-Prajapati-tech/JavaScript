
function sayMyName(){
    console.log("A");
console.log("b");
console.log("h");
console.log("i");
console.log("s");
console.log("h");
console.log("e");
console.log("k");
}

sayMyName()// sayMyname isonly referance () ye uska execution

// function addtwonumbers(num1,num2){

//     console.log(num1 + num2);
// }

 function addtwonumbers(num1,num2){
   // let result = num1 + num2
    //  console.log("Abhishek");
     return num1 + num2
}
// addtwonumbers(4, "4")//4
// addtwonumbers(4, "4")//44
// addtwonumbers(2,4)//6
// addtwonumbers(2,null)//2

const result = addtwonumbers(3,5)
console.log(result);

function loginusermassage(username){
    if(!username){
        console.log("pleas entar a username");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginusermassage("Abhishek"));