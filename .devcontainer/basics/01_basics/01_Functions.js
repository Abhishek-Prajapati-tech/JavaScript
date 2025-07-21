
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

function calculatecarprice(val1,val2, ...number1){// three doste ka mtlb ak bundal me sab pack karo or mujhe dedo
// val1 = 200 ,  val2 = 300, ...number1 = [400,500]
    return number1
} 

console.log(calculatecarprice(200, 300, 400, 500));

const user = {
    username: "ABhishek",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} add price is ${anyobject.price}`);
    
}
handleobject(user)
handleobject(
    {
        username: "Abhi",
        price: 399
    }
)

const mynewArray = [200,100,300,400,600]

function retrunsecondValue(getArray){
    return getArray[2]
}
console.log(retrunsecondValue(mynewArray));
console.log(retrunsecondValue([200,100,300,400,600]));
