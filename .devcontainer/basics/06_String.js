const name = "abhishek"
const repoCount = 80

 console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('A b h i sh ek')

console.log(gameName[0]);
console.log(gameName.charAt(2));
const newString = gameName.substring(0,4)
console.log(newString);

const newString1 = gameName.slice(-8,4)
console.log(newString1);

const newString2 = "  Abhishek prajapati "
console.log(newString2);
console.log(newString2.trim());

const url = "https://www.bingdigfinoehe"
console.log(url.replace(".", '-'));

console.log(url.includes('www'));
console.log(gameName.split(" "));


let text = "How are you doing today?";
const myArray = text.split(" ");
let word = myArray[1];
console.log(word);
console.log(myArray[0]);
let text1 = `He's often called "Johnny"`;
console.log(text1);

let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
// let t1 = "We are the so-called , "Vikings"  , from the north.";

// Code 	Result	 Description
// \'    	 '	       Single quote
// \"   	"	       Double quote
// \\    	\        	Backslash

//  \" inserts a double quote in a string:
let text3 = "We are the so-called \"Vikings\" from the north.";
console.log(text3);


//  \' inserts a single quote in a string:

let text4 = 'It\'s alright.';

//   \\, \ inserts a backslash in a string:

let text5 = "The character \ is called backslash.";
console.log(text5);
