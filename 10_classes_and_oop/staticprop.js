// static properties

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
    static createId(){
        return Math.floor(Math.random()*10);
    }
}

const chai = new User('chai')
// console.log(chai.createId());

class Teacher extends User{
    constructor(username,email)
    {
        super(username)  //call,this,passing all data to another context
        this.email = email
    }
}
const iPhone = new Teacher('iPhone','iphone@gmail.com')
iPhone.logMe()
