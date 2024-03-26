// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"ayush@yahoo.com",
    fullname:{
        userfullname:{
            firstname:"ayush",
            lastname:"kumar"
        }
    }
};

// console.log(typeof regularUser.fullname?.userfullname); 
//? : optional chaining - will check whether the fullname exists or not(used when dealing with API's)

//---destructuring of the object----
const course = {
    courseName : "js in hindi",
    courseInstructor : "hitesh"
};
// console.log(course.courseInstructor);
const {courseInstructor:instructor} = course;
console.log(instructor);

//--Json = not an object because object has a name--
// {
//     "name":"ayush",
//     "courseName":"js in hindi",
//     "price": "$999"
// }

// randomuser me api generator
// json formatter
