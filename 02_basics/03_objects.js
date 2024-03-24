//literal , constructor
//if object is created using constructors then it is singleton,means only one copy of that object is available but in case of literals multiple instance of objects can be their

const mySym = Symbol("key1");//symbol : used for unique values
const mySym2 = Symbol("key2");
const jsUser = {
    name:"ayush",
    "full name":"ayush kumar",
    age:21,
    [mySym]:"myKey1"
}
console.log(jsUser); //dot notation
console.log(jsUser["full name"]); //square notation
// console.log(typeof jsUser.mySym);

Object.freeze(jsUser);//freezez the object ,value can not be changed

jsUser.age = 22;
// console.log(jsUser);