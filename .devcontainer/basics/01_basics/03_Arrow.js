const user = {
    username: "Abhishek",
    price: 999,
    welcomeMassage: function(){
        console.log((`${this.username} , welcome to website`));
       // console.log(this);
        
    }

}
// user.welcomeMassage()
// user.username = " Abhi"
// user.welcomeMassage()

console.log(this);

// function abhi() {
//     let username = "Abhishek"
//     console.log(this.username);
    
// }
// abhi()

const abhi = () => {
    let username = "Abhishek"
    console.log(this.username);
    
}
// abhi()
const  addtwo = (num1 , num2) => {
return num1+num2
}
console.log(addtwo(3,5));
//implisit reurn bolte he
const  addtwo1 = (num1 , num2) => num1+num2
const  addtwo2 = (num1 , num2) => (num1+num2)
console.log(addtwo1(5,4));
console.log(addtwo2(8,4));

//const Array = [1,2,3,4,5,6,7,8]


