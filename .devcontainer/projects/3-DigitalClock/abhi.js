//const clock = document.querySelector('clock')
const clock1 = document.querySelector("#clock")

// let tim = new Date();
// console.log(tim.toLocaleTimeString())

setInterval(function(){
    let tim = new Date();
    clock.innerHTML = tim.toLocaleTimeString();
},1000);