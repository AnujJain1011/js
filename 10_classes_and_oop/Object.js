function mutiplyby5(num1,num2){
    return num1*5
}

// console.log(mutiplyby5.length) // length of function = no of arguements
// console.log(mutiplyby5.prototype); // empty object {}

//object creation function
function createUser(userName,price){
    this.userName = userName
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++;
}
createUser.prototype.printMe = function(){
    // console.log(`Price is ${this.price}`);
}

// console.log(createUser.prototype)

const chai = createUser('chai',25)// object creation
const tea = new createUser('tea',250)

// console.log(chai);
// console.log(tea);
// console.log(tea.increment())


//call
// function callme(){
//     console.log('callme')
//     console.log(this)
// }             
// function dad(){
//     console.log('dad'); 
//     console.log(this)
//     callme();
// }
// dad()