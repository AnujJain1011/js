class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}hitesh`
    }
    // set password(value){
    //     this.password = value
    // } node is getting confused in setting the value of password so we create a new variable 

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.in",'abc')
console.log(hitesh._email);
console.log(hitesh._password);