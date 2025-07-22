// const Array = ["js" , "rb","py","java","cpp"]
// const valu = Array.forEach(function(val){
//     console.log(val); 
// })

// console.log(valu);//undfine

const nums = [1,2,3,,4,5,6,7,8,91,10]
const ans = nums.filter( (num) =>  num > 4)
console.log(ans);

const ans1 = nums.filter( (num) =>  {
     return num > 4
})

const nwnums = []

nwnums.forEach( (num) => {
    if (num > 4) {
        nwnums.push(num)
    }
});
console.log(nwnums);

const Array = [
    {title: 'Book one' , genr: 'math', publish: 1947,edition: 1946},
     {title: 'Book two' , genr: 'biology', publish: 1955,edition: 1946},
      {title: 'Book thre' , genr: 'english', publish: 1959,edition: 1946},
       {title: 'Book four' , genr: 'history', publish: 1964,edition: 1946},
        {title: 'Book fiv' , genr: 'chamistry', publish: 1968,edition: 1946},
         {title: 'Book six' , genr: 'physics', publish: 1972,edition: 1946},
          {title: 'Book sevan' , genr: 'history', publish: 1978,edition: 1946},
           {title: 'Book eight' , genr: 'history', publish: 1982,edition: 1946},
            {title: 'Book nine' , genr: 'history', publish: 2000,edition: 1946},
             {title: 'Book ten' , genr: 'history', publish: 2020,edition: 1946},

] 

const usrbook = Array.filter((bk) =>bk.genr === 'history')
console.log(usrbook);

const usrbook1 = Array.filter((bk) =>bk.publish >= 2000)
console.log(usrbook1);
