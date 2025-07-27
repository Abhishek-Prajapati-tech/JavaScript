const button = document.querySelectorAll('.button')
const body = document.querySelector("body")

button.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(abhi){
    console.log(abhi);
    console.log(abhi.target);
    if (abhi.target.id == 'grey') {
        body.style.backgroundColor = abhi.target.id;
    }
    if (abhi.target.id == 'white') {
        body.style.backgroundColor = abhi.target.id;
    }
     if (abhi.target.id == 'blue') {
        body.style.backgroundColor = abhi.target.id;
    }
     if (abhi.target.id == 'yellow') {
        body.style.backgroundColor = abhi.target.id;
    }
     if (abhi.target.id == 'red') {
        body.style.backgroundColor = abhi.target.id;
    }
    
    })  
});

