// after ES6

// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `c${this.password}ab`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

const chai = new User('ayush','ayush@fb.com',123)
// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// behind the scenes
function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `c${this.password}ab`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase}`
}

const tea = new User('hitesh','hitesh@fb.com',124)
console.log(tea.encryptPassword())