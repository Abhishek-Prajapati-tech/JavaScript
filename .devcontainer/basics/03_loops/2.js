//for of
//["","",""]valu
//[{},{},{}]string

const arr = [1,2,3,4,5,6]
for (const num of arr) {
    console.log(num); 
}

const gritting = "good morning"
for (const grit of gritting) {
    console.log(`each char is ${grit}`);
    
}

//map => maoakobjct h

const map = new Map()
map.set('In' , "India")
map.set('U' , "usa")
map.set('am' , "amrika")
map.set('Fra' , "franch")
console.log(map);

// for (const (key,value) of map) {
//     console.log(key, ":-" , value);
// } y kam nhi karga

const objct = {
    js: 'Javascript',
    cpp: 'c++',
    rb: " ruby",
    swift: " swift by appl"
}

for (const key in objct) {
   console.log(`${key} shortcut is for ${objct[key]}`);
   
}

const Array = ["js" , "rb","py","java","cpp"]
for (const key in Array) {
   console.log(Array[key]);
}