const user = {
    username:"Ayush",
    price:999,
    greetingFunc:function(){
        console.log(`Hello ${this.username} ,Welcome to Website`);
        console.log(this);
    }
}
//this refers to the current context of object
// user.greetingFunc();
// user.username = "hitesh";

// this.greetingFunc(); //here this represents the global object which is empty in node js
// console.log(this);

// function chai(){
//     const flavour = "chocolaty";
//     console.log(this.flavour);
// }
// chai();//undefined : this doesn't work with the functions


// const addTwo = function(num1,num2){ //normal function
//     return num1+num2;
// }

// const addTwo = (num1,num2) => { //arrow function
//     return num1+num2;
// }
//if {} then return is neccessary

// ()=>{}    //arrow function

// const addTwo = (num1,num2) => (num1+num2);

const addTwo = (num1,num2) => ({username:"Ayush"});//with object () are required

console.log(addTwo());