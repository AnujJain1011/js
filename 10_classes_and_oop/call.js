function setUserName(username){
    //complex DB calls
    this.username = username
    console.log('called');
}

//if we use setUserName() only then all the information of setUserName() will be lost because of removal of it from call stack
function createUser(username,email,password){ 
    setUserName.call(this,username)  // whenever call() is used first arguement(this) is optional that refers to the current context,call() stores all the details of the function accompanied
    this.email = email
    this.password = password
}

const chai = new createUser('chaiaurcode','chai@fb.com',1243);
console.log(chai);