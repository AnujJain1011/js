const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount+ " Value");
// console.log(`My name is ${name} and my repoCount is ${repoCount}`); // string interpolation

let gameName = new String("hitesh-hc");
// console.log(gameName.__proto__);//prototype of the object is it's property which is itself an object

// console.log(typeof gameName);//object hai

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

console.log(gameName);
// console.log(gameName.substr(-5,3));//not ecmascript official,treats -5 as reverse direction
// console.log(gameName.substring(-5,3)); //brings -ve to 0,swaps values accordingly

// const anotherString = gameName.slice(-8,10);
// console.log(anotherString);

// const anotherString = "  hello hitesh. ";
// console.log(anotherString);
// console.log(anotherString.trim());

gameName = "hitesh-hc-com";
console.log(gameName);
console.log(gameName.split(""));
// trim slice substring replace 
