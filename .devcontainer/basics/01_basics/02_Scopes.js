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

function one(){
    const username = "Abhishek"

    function two() {
        const website = "youtube"
        console.log(username);
        // chiled function(two) parent function(one) ke data ko
        //  accecekar sakte he isliye isk closure bhi bolte he
    }
    //console.log(website);
   two()
}
one()

if (true) {
    const username = "Abhishek"
    if (username == "Abhishek") {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website); function ke bhar he
}
//console.log(username);//ye bhi nhi hoga

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num) {
    return num + 1
}
// console.log(addone(5))

const addtwo = function (num){
    return num + 2
}
console.log(addtwo(8));

