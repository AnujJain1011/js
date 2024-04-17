console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI) // not changed and error also not 
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor);

const mynewObject = {
    username: "Chai",
    email: "chai@gmail.com",

    createNewObject : function(){
        console.log('chai nhi bn pai');
    }
}
console.log(Object.getOwnPropertyDescriptor(mynewObject,"username"));

//we can change the characteristics of the property of the object
Object.defineProperty(mynewObject,"username",{
    // writable:false,
    enumerable:false
})

//as soon as we put enumerable to false the selected property could not be returned through loops

// mynewObject.username = "masala chai"
// console.log(Object.getOwnPropertyDescriptor(mynewObject,"username"));

// for (let [key,value] of mynewObject) {
//     console.log(iterator);
// }gives error that mynewObject is not iterable

for (let [key,value] of Object.entries(mynewObject)) {
    if(typeof value !== "function")
    console.log(`${key} : ${value}`);
}
 