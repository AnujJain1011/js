const User = {
    _email: 'h@hc.com',  //by using _email we are making it private, thought inside gettter and setter they don't differ from email and password 
    _password: "abc",


    get email(){ //email will be treated as a property only
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)//factory functions
console.log(tea.email);