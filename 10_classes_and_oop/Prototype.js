let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trim().length);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){ // object prototype
    console.log('Hitesh is present everywhere');
}

Array.prototype.HeyHitesh = function(){
    console.log('hitesh says hello');
}
// heroPower.hitesh()  //object
// myHeros.hitesh() //array

// heroPower.HeyHitesh() // because prototype of object can be used by all but prototype of arrays can not be used by objects
// myHeros.HeyHitesh()

///-- inheritance---(prototypal inheritance)
// every object is an instance in itself

const  User = {
    username:"Ayush K"
}
const Teacher = {
makeVideo:true
}
const TeachingSupport= {
    isAvailable : true
}
const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__:TeachingSupport
}

// console.log(TASupport.isAvailable) // accessible hai

Teacher.__proto__ = User // all properties and methods of User will be accessible by Teacher
// console.log(Teacher.username); 

Object.setPrototypeOf(TeachingSupport,Teacher) //giving  all properties of Teacher to TeachingSuppport
// console.log(TeachingSupport.makeVideo);

const anotherName = " chaiaurcode "
String.prototype.trueLength = function(){
    console.log(this);  // this matlab jis ko reference kar raha hai
    console.log(this.trim().length);
}

anotherName.trueLength()//jis ne call kiya whi this hain.
"Hitesh".trueLength()