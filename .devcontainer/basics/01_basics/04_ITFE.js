// Immediatly Invoked Function Expressions (IIFE)
(function abhi(){
    console.log("db connected");
})();
//  globle scope ke pollution se problem hoti he kai bar
//  us globle scope ke variales he y declaration he uske 
// pollution ko hatane ke liye hatane ke liye iska use hota he isliye ise immediatly 
//Invoked function Expressions bolte he or(jo function immediatly execute hota he use 
// bhi IIFe bolte he)
( function abhi() {
     console.log(`DB CONNECTED TWO`);
})();

( () => {
     console.log(`DB CONNECTED THTREE`);
})();

( (name) => {
     console.log(`DB CONNECTED FOUR ${name}`);
})('Abhishek')