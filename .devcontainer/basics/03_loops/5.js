const mynums = [1,2,3,4,5,6,7,8,9]
mynums.map((num) => num +10)
console.log(mynums);


const nwnums = mynums.map((num) => num*20)
                     .map((num) => num+1)
                     .filter((num) => num >= 40)

console.log(nwnums);
                  
const mynums1 = [1,2,3]

const mytotal = mynums1.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0) 
console.log(mytotal);

const mytotal1 = mynums1.reduce((acc,currval) => acc+currval, 0)
console.log(mytotal1);
