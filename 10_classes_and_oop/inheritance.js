class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{  // instead of prototype using extends 
constructor(username,email,password){
        super(username)  // do not need to use call() explicitly
        this.email = email
        this.password = password
    }
    
    addCourse(){
            console.log(`The new course was added by Mr./Mrs.${this.username}`);
        }
        }
        
const chai = new Teacher('Chai','chai@gmail.com',123)
// chai.addCourse()

const masalaChai = new User('masalaChai')
// masalaChai.addCourse() // user does not have access to it's child property
// masalaChai.logMe()

const userOne = new User('AyushK')
// userOne.addCourse() // user does not have access to it's child property
// chai.logMe() // but child has access to parents property

// console.log(chai === masalaChai);
// console.log(chai === Teacher); ///chai is instance of Teacher not exactly same
// console.log(chai instanceof Teacher);// both true
// console.log(chai instanceof User);
// console.log(masalaChai instanceof User); //true
console.log(masalaChai instanceof Teacher); //false


// behind the scenes 
//         function User(username){
//                 this.username = username
        
//             User.prototype.logMe = function(){ //prototypal inheritance
//                 console.log(`USERNAME is ${this.username}`);
//             }
//         }
//         Teacher.prototype = User
//     function Teacher(username,email,password){
//         User.call(this,username)
//         this.email = email
//         this.password = password
        
//         Teacher.prototype.addCourse = function(){
//             console.log(`The new course was added by Mr./Mrs.${this.username}`);
//     }
// }
// const chai = new Teacher('Chai','chai@gmail.com',123)
// chai.addCourse()