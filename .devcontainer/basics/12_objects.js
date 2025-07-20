// singleton

const tinderuser = new Object()// singleton Object he
const tinderuser1 = {}//NonSingleton Object he

console.log(tinderuser);
console.log(tinderuser1);

tinderuser.id = " 123abcd"
tinderuser.name = "abhishek"
tinderuser.isloggedIn = false

const regulerUser = {
    email: " Abhi7470@gmail.com",
    fullName: {
        userfullName: {
            firstname: "Abhishek",
            lastname: "prajapati"
        }
    }
}
console.log(regulerUser.fullName.userfullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1 , obj2}
console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2)// {} ak empty object he

console.log(obj4);

const obj5 = {...obj1,...obj2}
console.log(obj5);

const users = [
    {
        id: 1,
        email: "abhishekprajapti7470@gmail.com"
    },
     {
        id: 1,
        email: "abhishekprajapti7470@gmail.com"
    },
     {
        id: 1,
        email: "abhishekprajapti7470@gmail.com"
    },
    
]
users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('islogged'));

const course = {
    coursename: "hindi",
    price: "10000",
    courseInstructor: "Abhishek"
}

// course.courseInstructor
const{courseInstructor} = course
console.log(courseInstructor);
const{price} = course
console.log(price);

console.log(course.coursename);
// destructuring on objects
// const navbar = () => {

// }

// consept of API apnakam kisi or ke sir pe dak dena hi api he
// resrorent ka menue = ap sirf order karenge banki uski problem knha se 
// kya karega 


//  {
//     "name": "hindi",
//     "price": "10000",
//     "course": "Abhishek"
// };


