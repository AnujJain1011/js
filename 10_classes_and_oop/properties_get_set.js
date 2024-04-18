function User(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        get : function(){
            return this._email
        },
        set : function(value){
            this._email = value
        }
    })
    Object.defineProperty(User,'password',{
        get : function(){
            return this._password
        },
        set : function(value){
            this._password = value
        }
    })
}

const userOne = new User('chai@chai.com','abc')
console.log(userOne.email);

