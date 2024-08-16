//two ways to create objects using literal and constructor
//if object is created using constructors then it is singleton,means only one copy of that object is available but in case 
of literals multiple instance of objects can be their

const mySym = Symbol("key1");//symbol : used for unique values
const mySym2 = Symbol("key2");
const jsUser = {
    name:"ayush",
    "full name":"ayush kumar",
    age:21,
    [mySym]:"myKey1"
}

// const mySymbol = Symbol(optional string);
//the only way to add symbol to the object is placing symbol into [symbol_name] 

console.log(jsUser); //dot notation
console.log(jsUser["name"]); //square notation  ,here all the keys behave like string inside js
// console.log(typeof jsUser.mySym);

Object.freeze(jsUser);//freezez the object ,It will not show any error but value can not be changed after this. 

jsUser.age = 22;
// console.log(jsUser);

